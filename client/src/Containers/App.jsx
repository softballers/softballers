import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsApi from '../actions/loginAPI';

import Login from '../Components/Login.jsx';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (      
      <div>
        <h1>Softballers</h1>
        <Login />
      </div>
    )
  }
}

const mapStateToProps = (store) => { return {login : store.login}; }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, actionsApi), dispatch); }

export default connect(mapStateToProps, mapDispatchToProps)(App);