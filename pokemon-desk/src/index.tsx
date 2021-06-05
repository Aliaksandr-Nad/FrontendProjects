import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './app';
import configureStore from './configeStore';

import './index.css';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
