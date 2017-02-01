import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsApi from '../actions/loginAPI';
import LoginContainer from './LoginContainer.jsx';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (      
      <div>
        <h1 style={{fontSize: 50}}>Softballers</h1>
        <LoginContainer loginUser={this.props.loginUser} />
      </div>
    )
  }
}

const mapStateToProps = (store) => { return {login : store.login}; }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, actionsApi), dispatch); }

export default connect(mapStateToProps, mapDispatchToProps)(App);
