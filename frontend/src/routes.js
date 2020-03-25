import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Logon} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
