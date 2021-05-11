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
        <div>
                {this.props.passedDown ? (
                    <ul>
                        {this.props.passedDown.map(item => <li>{item} = {eval(item)}</li>)}
                    </ul>
                ) : (
                    <p>Please enter your equation</p>
                    )}
                <b>PROPS {JSON.stringify(this.props)}</b>
        </div>
    );
  }
}

export default AnswerDisplay;
