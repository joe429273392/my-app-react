import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import blogApp from './reducers';

let store = createStore(blogApp);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();

function showState() {
  console.log(store.getState());
}
 
store.subscribe(showState);

