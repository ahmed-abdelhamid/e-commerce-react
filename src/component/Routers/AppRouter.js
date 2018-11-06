import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../LoginPage/LoginPage';
import Dashboard from '../Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;