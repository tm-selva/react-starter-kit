import * as React from 'react';
import { Route, Switch } from 'react-router';
import Counter from '../pages/Counter';
import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';

const routes = (
  <div>
    <Switch>
      <Route exact={true} path="/" component={Counter} />
      <Route path="/counter" component={Counter} />
      <Route component={NoMatch} />
    </Switch>
    {/* <Route path="/" component={App}>
      <Route path="/:login"
        component={UserPage} />
      <Route path="/:login/:name"
        component={RepoPage} />
    </Route> */}
  </div>
);

export default routes;
