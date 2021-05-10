import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
    state = {
      input1: '',
      input2: '',
      operator: ''
  }
  
  setInput = (event) => {
    if(this.state.operator === '') {
      this.setState({ input1: event.target.value })
          console.log('state', this.state);
      }
      else {
        this.setState({ input2: event.target.value });
        console.log('state', this.state);
      }
    }
  
  setOperator = (event) => {
    this.setState({ operator: event.target.value });
    console.log('state', this.state);
  }
  
  clearInputs = () => {
    this.setState({
      input1: '',
      input2: '',
      operator: ''
    });
    console.log('state', this.state);
  }

  handleOperation = () => {
    this.props.dispatch( {type: 'BUTTON_ONE'} );
    console.log(this.state);
  }
  

  render() {
    return (
      <div className="App">
          <p>Hello World</p>
          <form className="calculator-frame">
            <div className="calculator-row">
                <button type="button" className="number-btn" value="7" onClick={this.setInput}>
                  7
                </button>
                <button type="button" className="number-btn" value="8" onClick={this.setInput}>
                  8
                </button>
                <button type="button" className="number-btn" value="9" onClick={this.setInput}>
                  9
                </button>
                <button type="button" className="operator-btn" value="÷" onClick={this.setOperator}>
                  ÷
                </button>
            </div>
            <div className="calculator-row">
                <button type="button" className="number-btn" value="4" onClick={this.setInput}>
                  4
                </button>
                <button type="button" className="number-btn" value="5" onClick={this.setInput}>
                  5
                </button>
                <button type="button" className="number-btn" value="6" onClick={this.setInput}>
                  6
                </button>
                <button type="button" className="operator-btn" value="x" onClick={this.setOperator}>
                  x
                </button>
            </div>
            <div className="calculator-row">
                <button type="button" className="number-btn" value="1" onClick={this.setInput}>
                  1
                </button>
                <button type="button" className="number-btn" value="2" onClick={this.setInput}>
                  2
                </button>
                <button type="button" className="number-btn" value="3" onClick={this.setInput}>
                  3
                </button>
                <button type="button" className="operator-btn" value="-" onClick={this.setOperator}>
                  -
                </button>
            </div>
            <div className="calculator-row">
                <button type="button" className="number-btn" value="0" onClick={this.setInput}>
                  0
                </button>
                <button type="button" className="number-btn" value=".">
                  .
                </button>
                <button type="submit" onClick={this.handleOperation}>
                  =
                </button>
                <button type="button" className="operator-btn" value="+" onClick={this.setOperator}>
                  +
                </button>
              </div>
                <button type="button" className="clear-btn" onClick={this.clearInputs}>
                  CLEAR
                </button>
          </form>
      </div>
    );
  }
}

export default App;
