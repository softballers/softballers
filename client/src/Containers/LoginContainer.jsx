import React, { Component } from 'react';
import LoginForm from '../Components/LoginForm.jsx';

export default class LoginContainer extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleUsername(evt) {
    this.setState({username: evt.target.value});
  }

  handlePassword(evt) {
    this.setState({password: evt.target.value});
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.loginUser(this.state)
  }

  render() {
    return (
      <div>
        <LoginForm 
          handleUsername={this.handleUsername}
          handlePassword={this.handlePassword}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}