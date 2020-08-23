import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './index.css';
import './style.css';
import 'material-design-icons/iconfont/material-icons.css';

import Home from './pages/Home';
import Admin from './pages/Admin';

import { isSession } from './services/session'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={isSession() ? Admin : Home} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);