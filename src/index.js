import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Recipe from './pages/Recipe';
import ErrorPage from './pages/ErrorPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe" component={Recipe} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);