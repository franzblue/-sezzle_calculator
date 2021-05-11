import React, { Component } from 'react';
import { connect } from 'react-redux';

class Calculator extends Component {
    state = {
        question: '',
        answers: []
    }

    componentDidMount = () => {
        console.log(this.state);
    }

    setInput = (event) => {
        this.setState({ question: this.state.question.concat(Number(event.target.value)) });
    }
    
    setOperator = (event) => {
        if(this.state.question === '') {
            alert('Please enter a number first')
        } else {
            this.setState({ question: this.state.question.concat(' ' + event.target.value + ' ') });
        }
    }
    
    clearInputs = () => {
        this.setState({
            question: ''
        });
    }

    handleOperation = () => {
        // to verify the equation is in proper syntax
        const check = this.state.question.charAt(this.state.question.length-1)
        if(check === ' ') {
            alert('Please enter another number.')
        }
        else {
            const answer = eval(this.state.question);
            this.state.answers.push(answer);
            this.clearInputs();
            this.props.dispatch( {type: 'ADD_EQUATION', payload: this.state})
        }
    }

    render() {
        return (
            <div className="App">
                <p>{!this.state.question ? (
                    '.'
                ) : (
                    this.state.question
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
                {JSON.stringify(this.props.reduxState)}
                <div>
                    <ul>
                        {this.state.answers.length > 10 ? (
                            this.props.reduxState.slice(this.state.answers.length - 10, this.state.answers.length).map((answer) => {
                                return <li>{answer.question} = {eval(answer.question)}</li>
                            })
                        ) : (
                            this.props.reduxState.slice(0,10).map((answer) => {
                                return <li>{answer.question} = {eval(answer.question)}</li>
                            })
                        ) }
                    </ul>
                </div>
            </div>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState: reduxState });

export default connect(putReduxStateOnProps)(Calculator);
