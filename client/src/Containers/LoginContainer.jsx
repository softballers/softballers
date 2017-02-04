import React, { Component } from 'react';
import LoginForm from '../Components/LoginForm.jsx';

export default class LoginContainer extends Component { 
  constructor() {
    super();

    this.state = { 
      username: '',
      password: '',
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleKeyPress(id, evt) {
   this.setState({ [id]: evt.target.value }) 
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.loginUser(this.state)
  }

  render() {
    return (
      <div>
        <LoginForm
          handleSubmit={ this.handleSubmit }
          handleKeyPress={ this.handleKeyPress }
        />
      </div>
    )
  }
}
