import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipePage from './pages/RecipePage';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/NavBar/NavBar';
import AboutPage from './pages/AboutPage';

ReactDOM.render(
  <BrowserRouter>
  <NavBar />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe" component={RecipePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);