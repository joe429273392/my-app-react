import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRoute from './AppRoute';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import blogApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
let store = createStore(
  blogApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
ReactDOM.render(
  <Provider store={store}>
    <AppRoute />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();


