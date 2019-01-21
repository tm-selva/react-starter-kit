import * as React from 'react';
import { Route, Switch } from 'react-router';
import Counter from '../pages/Counter';
import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';

const routes = (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/counter' component={Counter} />
      <Route path='/home' component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default routes;
