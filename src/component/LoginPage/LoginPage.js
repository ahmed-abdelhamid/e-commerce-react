import React, { Component } from 'react';
import { history } from '../Routers/AppRouter';

export default class LoginPage extends Component {

  state = {
    usernamePlaceholder: 'Username',
    passowrdPlaceholder: 'Password'
  };

  handleClick = (e) => {
    e.preventDefault();

    history.push('/dashboard');
  };

  handleFocus = (e) => {
    (e.target.name === 'username') ? (
      this.setState(() => ({ usernamePlaceholder: '' }))
    ) : (
      this.setState(() => ({ passowrdPlaceholder: '' }))
    );
  };

  handleBlur = (e) => {
    (e.target.name === 'username') ? (
      this.setState(() => ({ usernamePlaceholder: 'Username' }))
    ) : (
      this.setState(() => ({ passowrdPlaceholder: 'Password' }))
    );
  };

  render() {
    return (
      <div className="container text-center">
        <form className="login-form">
          <h1 className="login-form__title">Login Admin</h1>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder={this.state.usernamePlaceholder}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder={this.state.passowrdPlaceholder}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </div>
          <button
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
};