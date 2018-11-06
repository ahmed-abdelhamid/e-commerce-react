import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../Routers/AppRouter';
import { login } from '../../action/auth';
import authUsers from '../../authUser';

export class LoginPage extends Component {

  state = {
    usernamePlaceholder: 'Username',
    username: '',
    passowrdPlaceholder: 'Password',
    password: ''
  };

  handleClick = (e) => {
    e.preventDefault();
    
    authUsers.map((user) => {
      if (user.username === this.state.username && user.password === this.state.password) {
        this.props.login(user.id);
        history.push('/dashboard');
      }
    });
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

  handleChange = (e) => {
    const { name, value } = e.target;
    (name === 'username') ? (
      this.setState(() => ({ username: value }))
    ) : (
      this.setState(() => ({ password: value }))
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
              value={this.state.username}
              placeholder={this.state.usernamePlaceholder}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.password}
              placeholder={this.state.passowrdPlaceholder}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
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

const mapDispatchToProps = (dispatch) => ({
  login: (uid) => dispatch(login(uid))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);