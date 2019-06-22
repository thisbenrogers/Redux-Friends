import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import App from './App';
import './index.css';


const initialState = {
  stateExists: true
}

// TODO refactor reducer into seperate file
const reducer = (state = initialState, action) => {
  console.log(state);
  return state;
}

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

ReactDOM.render(<App />, document.getElementById('root'));
