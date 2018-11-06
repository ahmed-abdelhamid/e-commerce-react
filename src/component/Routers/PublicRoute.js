import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const PublicRoute = ({ isAuthorized, component: Component, ...rest}) => (
  <Route {...rest} component={(props) => (
    isAuthorized ? (
      <Redirect to="/dashboard" />
    ) : (
      <Component {...props} />
    )
  )} />
);

const mapStateToProps = (state) => ({
  isAuthorized: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);