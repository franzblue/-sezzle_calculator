import React, { Component } from 'react';

class AnswerDisplay extends Component {
    render() {
        return (
            <div className="py-2">
                <b className="max-w-sm mx-auto flex justify-center">10 Recent Equations (from all users)</b>
                <div className="max-w-sm mx-auto border border-gray-500 flex p-6 bg-white rounded-lg shadow-2xl items-center">
                    {this.props.passedDown ? (
                        <ul className="mx-auto">
                            {this.props.passedDown.map(item => <li className="text-base text-gray-900 py-1">{item} = {eval(item)}</li>)}
                        </ul>
                    ) : (
                        <p className="mx-auto text-base text-gray-900 py-1">Please enter your equation</p>
                        )}
                </div>
            </div>
        );
    }
}

export default AnswerDisplay;
