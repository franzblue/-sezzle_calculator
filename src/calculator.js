import React, { Component } from 'react';
import axios from 'axios';
import AnswerDisplay from './answerDisplay';

class Calculator extends Component {
    state = {
        inputs: '',
        question: ''
    }

    componentDidMount = () => {
        console.log('mounted state', this.state, 'and its props', this.props);
        this.getOperations();
    }
      
    getOperations = () => {
        axios.get('http://localhost:5000/api/operations').then((response) => {
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                this.setState({ question: [...this.state.question, ...[element.question]] })
            }
            console.log('results from get', response.data, 'and now the state is', this.state);
        }).catch((error) => {
            console.log('error fetching operations data', error);
        });
    }

    setInput = (event) => {
        if(event.target.value === '.') {
            this.setState({ inputs: this.state.inputs.concat(event.target.value) });
        } else {
            this.setState({ inputs: this.state.inputs.concat(Number(event.target.value)) });
        }
    }
    
    setOperator = (event) => {
        if(this.state.inputs === '') {
            alert('Please enter a number first')
        } else {
            this.setState({ inputs: this.state.inputs.concat(' ' + event.target.value + ' ') });
        }
    }
    
    clearInputs = () => {
        this.setState({
            inputs: ''
        });
    }

    handleOperation = () => {
        // to verify the equation is in proper syntax
        const check = this.state.inputs.charAt(this.state.inputs.length-1)
        if(check === ' ') {
            alert('Please enter another number.')
        }
        else {
            axios.post('http://localhost:5000/api/operations', this.state)
            .then(() => this.getOperations())
            .catch(error => {
                console.log('error making POST', error);
            });
        window.location.reload();
        }
    }

    render() {
        return (
            <>
                <AnswerDisplay passedDown={this.state.question} />
                <form className="max-w-sm mx-auto bg-blue-700 border border-gray-500 p-6 my-4 bg-white rounded-lg shadow-2xl items-center">
                    <p className="text-white bg-gray font-bold">{!this.state.inputs ? (
                        0
                    ) : (
                        this.state.inputs
                    )}</p>
                    <div className="grid grid-cols-4 gap-2 py-2">
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="7" 
                            onClick={this.setInput}>
                            7
                        </button>
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="8" 
                            onClick={this.setInput}>
                            8
                        </button>
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="9" 
                            onClick={this.setInput}>
                            9
                        </button>
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="/" 
                            onClick={this.setOperator}>
                            ÷
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2 py-2">
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="4" 
                            onClick={this.setInput}>
                            4
                        </button>
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="5" 
                            onClick={this.setInput}>
                            5
                        </button>
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="6" 
                            onClick={this.setInput}>
                            6
                        </button>
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="*" 
                            onClick={this.setOperator}>
                            x
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2 py-2">
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="1" 
                            onClick={this.setInput}>
                            1
                        </button>
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="2" 
                            onClick={this.setInput}>
                            2
                        </button>
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="3" 
                            onClick={this.setInput}>
                            3
                        </button>
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="-" 
                            onClick={this.setOperator}>
                            -
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2 py-2">
                        <button
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="0" 
                            onClick={this.setInput}>
                            0
                        </button>
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="."
                            onClick={this.setInput}>
                            .
                        </button>
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            onClick={this.handleOperation}>
                            =
                        </button>
                        <button 
                            type="button" 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            value="+" 
                            onClick={this.setOperator}>
                            +
                        </button>
                        <div className="grid col-span-4 py-2">
                            <button 
                                type="button" 
                                className="mt-2"
                                onClick={this.clearInputs}>
                                <strong className="font-bold text-red-700 hover:bg-red-400 bg-red-100 border border-red-400 px-4 py-3 rounded relative">CLEAR</strong>
                            </button>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

export default Calculator;
