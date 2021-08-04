import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Calculator} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
