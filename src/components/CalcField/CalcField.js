import React from 'react';
import './CalcField.css';

class CalcField extends React.Component {
  render() {
    return (
      <div className="calc">
        <span className="value">{this.props.value}</span>
      </div>
    );
  }
}

export default CalcField;