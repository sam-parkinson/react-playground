import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, timer: 'tick' };
  }

  tickTock = () => {
    if (this.state.count >= 8) {
      this.setState({ timer: 'BOOM!' });
      clearInterval(this.interval);
    } else if (this.state.count % 2 === 0) {
      this.setState({ timer: 'tick' });
    } else {
      this.setState({ timer: 'tock' });
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ 
        count: this.state.count + 1 
      })
      this.tickTock()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>{this.state.timer}</p>
      </div>
    )
  }
}

export default Bomb;