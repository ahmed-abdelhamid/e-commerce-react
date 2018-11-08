import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { history } from '../Routers/AppRouter';
import { login } from '../../action/auth';
import authUsers from '../../authUser';

export class LoginPage extends Component {
  state = {
    usernamePlaceholder: 'Username',
    passowrdPlaceholder: 'Password',
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
    const { touched, errors, values } = this.props;
    return (
      <div className="container text-center">
        <Form className="login-form">
          <h1 className="login-form__title">Login Admin</h1>
          <div className="form-group">
            { touched.username && errors.username && <div className="error">{errors.username}</div> }
            <Field
              type="text"
              className="form-control"
              name="username"
              value={values.username}
              placeholder={this.state.usernamePlaceholder}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </div>
          <div className="form-group">
            { touched.password && errors.password && <div className="error">{errors.password}</div> }
            <Field
              type="password"
              className="form-control"
              name="password"
              value={values.password}
              placeholder={this.state.passowrdPlaceholder}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </Form>
      </div>
    );
  }
};

const FormikLoginPage = withFormik({
  mapPropsToValues() {
    return {
      username: '',
      password: ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { props, setErrors }) {
    authUsers.map((user) => {
      if (user.username === values.username && user.password === values.password) {
        props.login(user);
        history.push('/dashboard');
      } else {
        setErrors({
          username: 'Wrong username or password'
        })
      }
    });  
  }
})(LoginPage);

const mapDispatchToProps = (dispatch) => ({
  login: (uid) => dispatch(login(uid))
});

export default connect(undefined, mapDispatchToProps)(FormikLoginPage);