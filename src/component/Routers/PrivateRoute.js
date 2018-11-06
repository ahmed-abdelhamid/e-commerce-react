import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';

export const PrivateRoute = ({ isAuthorized, component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (
    isAuthorized ? (
      <div>
        <Navbar />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to='/' />
    )
  )} />
);

const mapStateToProps = (state) => ({
  isAuthorized: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);