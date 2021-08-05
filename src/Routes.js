import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Header from './components/Header';
import Quotes from './components/Quotes';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/quotes" component={Quotes} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
