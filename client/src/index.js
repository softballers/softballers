import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import App from './Containers/App.jsx';
import LoginContainer from './Containers/LoginContainer.jsx';
import store, { history } from './store.js'

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <Route path="/admin" component={LoginContainer} />
      </Route>
    </Router>
  </Provider>,  
  document.getElementById('app')
);
