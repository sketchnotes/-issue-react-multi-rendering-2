import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from './pages/welcome';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Welcome} exact />
    </Switch>
  );
};
export default Routes;
