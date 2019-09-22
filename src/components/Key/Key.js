import React from 'react';
import './Key.css';

class Key extends React.Component {
  constructor(props) {
    super(props);

    this.handleNumberClick = this.handleNumberClick.bind(this);
  }

  handleNumberClick() {
    this.props.numClick(this.props.children);
  }

  render() {
    return (
      <div className="key" onClick={this.handleNumberClick}>
        <span class="keyValue">{this.props.children} </span>
      </div>
    )
  }
}

export default Key;