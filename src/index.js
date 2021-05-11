import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const operationReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EQUATION': 
      console.log('testing', action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
}

const storeInstance = createStore(
  operationReducer
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
