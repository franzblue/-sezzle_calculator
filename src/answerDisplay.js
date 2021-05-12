import React, { Component } from 'react';
// import axios from 'axios';

class AnswerDisplay extends Component {
    // state = {
    //     inputs: '',
    //     question: ''
    // }

    // componentDidMount = () => {
    //     console.log('mounted state', this.state, 'and its props', this.props);
    //     this.getOperations();
    // }
      
    // getOperations = () => {
    //     axios.get('http://localhost:5000/api/operations').then((response) => {
    //         for (let index = 0; index < response.data.length; index++) {
    //             const element = response.data[index];
    //             this.setState({ question: [...this.state.question, ...[element.question]] })
    //         }
    //         console.log('results from get', response.data, 'and now the state is', this.state);
    //     }).catch((error) => {
    //         console.log('error fetching operations data', error);
    //     });
    // }

  render() {
    return (
        <div className="py-2">
            <b>10 Recent Equations (from all users)</b>
            <div className="max-w-sm mx-auto border border-gray-500 flex p-6 bg-white rounded-lg shadow-2xl items-center">
                {this.props.passedDown ? (
                    <ul className="mx-auto">
                        {this.props.passedDown.map(item => <li className="text-base text-gray-900 py-1">{item} = {eval(item)}</li>)}
                    </ul>
                ) : (
                    <p className="mx-auto text-base text-gray-900 py-1">Please enter your equation</p>
                    )}
        </div>
            <b>PROPS {JSON.stringify(this.props)}</b>
        </div>
);
  }
}

export default AnswerDisplay;
