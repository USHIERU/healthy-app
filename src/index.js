import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './style.css';
import { getSession } from './session';

import Login from './pages/Login';
import Main from './pages/Main';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact >
          {getSession() ? <Main /> : <Login />}
        </ Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
