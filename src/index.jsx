// src/index.js or src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers'; // Assuming you have a rootReducer defined

import App from './App'; // Assuming App is your main component

// Create Redux store
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
