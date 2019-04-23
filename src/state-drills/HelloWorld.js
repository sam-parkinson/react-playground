import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = { who: 'world' }
  }

  worldly = () => {
    this.setState({ who: 'world' })
  }

  friendly = () => {
    this.setState({ who: 'friend' })
  }

  reactive = () => {
    this.setState({ who: 'React' })
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={this.worldly}>World</button>
        <button onClick={this.friendly}>Friend</button>
        <button onClick={this.reactive}>React</button>
      </div>
    )
  }
}

export default HelloWorld;