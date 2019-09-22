import React from 'react';
import './Keyboard.css';

import Key from '../Key/Key';
import ClearKey from '../ClearKey';
import EqualKey from '../EqualKey';

class Keyboard extends React.Component {
  render() {
    return (
      <div className="keyboard">
        <div className="row">
          <ClearKey clearClick={this.props.clearClick}>C</ClearKey>
          <Key numClick={this.props.numClick} >(</Key>
          <Key numClick={this.props.numClick} >)</Key>
          <Key numClick={this.props.numClick} >*</Key>
        </div>
        <div className="row">
          <Key numClick={this.props.numClick} >7</Key>
          <Key numClick={this.props.numClick} >8</Key>
          <Key numClick={this.props.numClick} >9</Key>
          <Key numClick={this.props.numClick} >/</Key>
        </div>
        <div className="row">
          <Key numClick={this.props.numClick} >4</Key>
          <Key numClick={this.props.numClick} >5</Key>
          <Key numClick={this.props.numClick} >6</Key>
          <Key numClick={this.props.numClick} >+</Key>
        </div>
        <div className="row">
          <Key numClick={this.props.numClick} >1</Key>
          <Key numClick={this.props.numClick} >2</Key>
          <Key numClick={this.props.numClick} >3</Key>
          <Key numClick={this.props.numClick} >-</Key>
        </div>
        <div className="row">
          <div></div>
          <Key numClick={this.props.numClick} >0</Key>
          <Key numClick={this.props.numClick} >.</Key>
          <EqualKey eqClick={this.props.eqClick} >=</EqualKey>
        </div>
      </div>
    )
  }
}

export default Keyboard;