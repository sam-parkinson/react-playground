import React from 'react';

class Accordion extends React.Component {
  static defaultProps = { sections: [] }

  state = { activeButton: null }

  handleButtonClick(index) {
    console.log('Button clicked:', {index})
    this.setState({ activeButton: index})
  }

  renderContent(index) {
    if (index === this.state.activeButton) {
      return(
        <p>
          {this.props.sections[index].content}
        </p>
      )
    }
  }

  renderList() {
    return this.props.sections.map((section, index) => (
      <li key={index}>
        <button key={index} onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {this.renderContent(index)}
      </li>
    ))
  }
  render() {
    return (
      <ul>
        Accordion!
        {this.renderList()}
      </ul>
    )
  }
}

export default Accordion;