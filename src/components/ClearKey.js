import React from 'react';
import './Key/Key.css';

class ClearKey extends React.Component {
  constructor(props) {
    super(props);

    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleClearClick() {
    this.props.clearClick();
  }

  render() {
    return (
      <div className="key" onClick={this.handleClearClick}>
        <span class="keyValue">{this.props.children} </span>
      </div>
    )
  }
}

export default ClearKey;