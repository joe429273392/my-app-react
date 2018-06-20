
import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";

import {
  ConnectedRouter,
  routerMiddleware
} from "react-router-redux";

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import blogApp from "./reducers"; // Or wherever you keep your reducers

import IndexPage from './components/Index';
import Login from './container/Login';
import Reg from './components/RegPage';
import './static/css/App.css';
import './static/css/public.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const routeMiddleware = routerMiddleware(history);
const loggerMiddleware = createLogger();
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  blogApp,
  applyMiddleware(
    routeMiddleware,
    thunkMiddleware,
    loggerMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={IndexPage} />
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);