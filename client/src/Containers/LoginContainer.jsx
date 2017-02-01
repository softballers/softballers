import React, { Component } from 'react';
import LoginForm from '../Components/LoginForm.jsx';

export default class LoginContainer extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };

    // this.handleUsername = this.handleUsername.bind(this);
    // this.handlePassword = this.handlePassword.bind(this);

  }

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }
}