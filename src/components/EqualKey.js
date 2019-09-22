import React from 'react';
import './Key/Key.css';

class EqualKey extends React.Component {
  render() {
    return (
      <div className="key" onClick={this.props.eqClick}>
        <span class="keyValue">{this.props.children} </span>
      </div>
    )
  }
}

export default EqualKey;