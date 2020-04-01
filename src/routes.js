import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';

export default function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/:uf" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
