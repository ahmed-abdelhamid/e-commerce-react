import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Navbar from '../Navbar/Navbar';
import LoginPage from '../LoginPage/LoginPage';
import Dashboard from '../Dashboard/Dashboard';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;