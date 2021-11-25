import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom'
import App from './App';

import Dashboard from './components/Dashboard/Dashboard';
import Add from './components/Add/Add'
import Edit from './components/edit/Edit'
import Delete from './components/Delete/Delete'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <Router>
    <Switch>
      <Route path="/dashboard/edit/:id">
        <Edit />
      </Route>
      <Route path="/dashboard/delete/:id">
        <Delete />
      </Route>
      <Route path="/dashboard/add">
        <Add />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/">
        <App />
      </Route>

    </Switch>
  </Router>,
  document.getElementById('root')
);


serviceWorker.unregister();
