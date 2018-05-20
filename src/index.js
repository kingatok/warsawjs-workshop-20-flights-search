import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchView from './SearchView'
import FlightsView from './FlightsView'

ReactDOM.render(
  <Router>
      <Switch>
        <Route exact path="/" component={SearchView} />
        <Route path="/flights" component={FlightsView} />
      </Switch>
  </Router>,
  document.getElementById('root')
)