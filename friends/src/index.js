import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import './index.css';


const initialState = {
  stateExists: true
}

// TODO refactor reducer into seperate file
const reducer = (state = initialState, action) => {
  console.log(state);
  return state;
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <header className="App-header">
      <h1>Friends App</h1>
    </header>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
