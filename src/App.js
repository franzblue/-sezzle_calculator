import React, { Component } from 'react';
import Calculator from './calculator';

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <div className="bg-gray-100 border border-gray-400">
          <div className="bg-gray-300 py-2 px-16 border rounded border-gray-500 max-w-sm mx-auto">
            <h1 className="font-bold text-4xl">
                Sezzle Calculator
            </h1>
          </div>
          <Calculator />
        </div>
      </div>
      </>
    );
  }
}

export default App;
