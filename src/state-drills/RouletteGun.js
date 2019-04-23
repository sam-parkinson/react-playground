import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  }

  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false,
      result: 'Click to play'
    }
  }

  handleButtonClick = () => {
    this.setState({ 
      spinningTheChamber: true,
      result: 'spinning the chamber and pulling the trigger! ...'
    });
    this.timeout = setTimeout(() => {
      this.setState({ 
      chamber: (Math.ceil(Math.random() * 8)),
      spinningTheChamber: false
      });
      this.getResult();
      clearTimeout(this.timeout);
    }, 2000)
  }

  getResult = () => {
    if ((this.state.chamber) === (this.props.bulletInChamber)) {
      this.setState({ result: 'BANG!!!' });
    } else {
      this.setState({ result: 'you\'re safe' });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div>
        <p>{this.state.result}</p>
        <button onClick={this.handleButtonClick}>Pulling the trigger!</button>
      </div>
    )
  }
}

export default RouletteGun;