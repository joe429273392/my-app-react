import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from './components/Index';
import Login from './container/Login';
import Reg from './components/RegPage';

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/reg" component={Reg} />
              <Route path="/" component={IndexPage} />
            </Switch>
        </BrowserRouter>
    );
  }
}


