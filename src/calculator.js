import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        this.setState({ inputs: this.state.inputs.concat(Number(event.target.value)) });
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
            <div className="App">
                <p>{!this.state.inputs ? (
                    '.'
                ) : (
                    this.state.inputs
                )}</p>
                <form className="calculator-frame">
                    <div className="calculator-row">
                        <button 
                            type="button" 
                            className="number-btn" 
                            value="7" 
                            onClick={this.setInput}>
                            7
                        </button>
                        <button 
                            type="button" 
                            className="number-btn" 
                            value="8" 
                            onClick={this.setInput}>
                            8
                        </button>
                        <button 
                            type="button" 
                            className="number-btn" 
                            value="9" 
                            onClick={this.setInput}>
                            9
                        </button>
                        <button 
                            type="button" 
                            className="operator-btn" 
                            value="/" 
                            onClick={this.setOperator}>
                            ÷
                        </button>
                    </div>
                    <div className="calculator-row">
                        <button 
                            type="button" 
                            className="number-btn" 
                            value="4" 
                            onClick={this.setInput}>
                            4
                        </button>
                        <button 
                            type="button" 
                            className="number-btn" 
                            value="5" 
                            onClick={this.setInput}>
                            5
                        </button>
                        <button 
                            type="button" 
                            className="number-btn" 
                            value="6" 
                            onClick={this.setInput}>
                            6
                        </button>
                        <button 
                            type="button" 
                            className="operator-btn" 
                            value="*" 
                            onClick={this.setOperator}>
                            x
                        </button>
                    </div>
                    <div className="calculator-row">
                        <button 
                            type="button" 
                            className="number-btn" 
                            value="1" 
                            onClick={this.setInput}>
                            1
                        </button>
                        <button 
                            type="button" 
                            className="number-btn" 
                            value="2" 
                            onClick={this.setInput}>
                            2
                        </button>
                        <button 
                            type="button" 
                            className="number-btn" 
                            value="3" 
                            onClick={this.setInput}>
                            3
                        </button>
                        <button 
                            type="button" 
                            className="operator-btn" 
                            value="-" 
                            onClick={this.setOperator}>
                            -
                        </button>
                    </div>
                    <div className="calculator-row">
                        <button 
                            type="button" 
                            className="number-btn" 
                            value="0" 
                            onClick={this.setInput}>
                            0
                        </button>
                        <button 
                            type="button" 
                            className="number-btn" 
                            value=".">
                            .
                        </button>
                        <button 
                            type="button" 
                            onClick={this.handleOperation}>
                            =
                        </button>
                        <button 
                            type="button" 
                            className="operator-btn" 
                            value="+" 
                            onClick={this.setOperator}>
                            +
                        </button>
                    </div>
                    <button 
                        type="button" 
                        className="clear-btn" 
                        onClick={this.clearInputs}>
                        CLEAR
                    </button>
                </form>
                <div>
                    {/* <ul>
                        {this.state.answers.length > 10 ? (
                            this.props.reduxState.slice(this.state.answers.length - 10, this.state.answers.length).map((answer) => {
                                return <li>{answer.question} = {eval(answer.question)}</li>
                            })
                            ) : (
                                this.props.reduxState.slice(0,10).map((answer) => {
                                    return <li>{answer.question} = {eval(answer.question)}</li>
                                })
                                ) }
                            </ul> */}

                    {/* {this.state.question ? (
                        <ul>
                            <li>{this.state.question[0]} = {eval(this.state.question[0])}</li>
                            <li>{this.state.question[1]} = {eval(this.state.question[1])}</li>
                            <li>{this.state.question[2]} = {eval(this.state.question[2])}</li>
                            <li>{this.state.question[3]} = {eval(this.state.question[3])}</li>
                            <li>{this.state.question[4]} = {eval(this.state.question[4])}</li>
                            <li>{this.state.question[5]} = {eval(this.state.question[5])}</li>
                            <li>{this.state.question[6]} = {eval(this.state.question[6])}</li>
                            <li>{this.state.question[7]} = {eval(this.state.question[7])}</li>
                            <li>{this.state.question[8]} = {eval(this.state.question[8])}</li>
                            <li>{this.state.question[9]} = {eval(this.state.question[9])}</li>
                        </ul>
                    ) : (
                        <p>no answered questions</p>
                        )} */}

                    {/* <ul>
                        {this.state.question.map(item => <li>{item} = {eval(item)}</li>)}
                    </ul> */}
                {JSON.stringify(this.state)}
                </div>
                <AnswerDisplay passedDown={this.state.question} />
            </div>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState: reduxState });

export default connect(putReduxStateOnProps)(Calculator);
