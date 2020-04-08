import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from '../containers/dashboard';

export default function Routes() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" component={Dashboard}></Route>
      </Switch>
    </Fragment>
  );
}
