import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import InfoPage from './components/InfoPage/InfoPage';
import DashboardView from './components/DashboardPage/DashboardView';
import AdminView from './components/AdminPage/AdminView';
import ProfileView from './components/ProfilePage/ProfileView';
import SiteView from './components/SitePage/SiteView';

import './styles/main.css';

const App = () => (
  <div>
    <Header title="Project Base" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
          <Route
          path="/admin"
          component={AdminView}
        />
          <Route
          path="/profile"
          component={ProfileView}
        />
          <Route
          path="/site"
          component={SiteView}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/dash"
          component={DashboardView}
        />
        <Route
          path="/info"
          component={InfoPage}
        />
        {/* OTHERWISE no path */}
        <Route
          render={() => <h1>404</h1>}
        />
      </Switch>
    </Router>
  </div>
);

export default App;
