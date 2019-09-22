import React from 'react';
import {evaluate} from 'mathjs';
import './App.css';

import CalcField from '../CalcField/CalcField';
import Keyboard from '../Keyboard/Keyboard';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNumber: '0'
    }
  }

  handleClick = (number) => {
    if (this.state.currentNumber === '0') {
      this.setState({ currentNumber: number });
    } else {
      let num = this.state.currentNumber;

      this.setState({ currentNumber: num + number });
    }
  }

  handleEqualClick = () => {
    let number = evaluate(this.state.currentNumber);

    this.setState({ currentNumber: number.toString() });
  }

  handleClearClick = () => {
    this.setState({ currentNumber: '0' })
  }

  render() {
    return (
      <div className="grid">
        <CalcField className="calc" value={this.state.currentNumber} />
        <Keyboard
          className="keyboard"
          numClick={this.handleClick}
          eqClick={this.handleEqualClick}
          clearClick={this.handleClearClick} />
      </div>
    );
  }
}

export default App;
