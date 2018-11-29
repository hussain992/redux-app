import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import home from './containers/home';
import Form from './containers/form';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/home" component={home} />

      <Route exact path="/form" component={Form} />
    </Switch>
  );
};
export default Routes;
// const home = asyncComponent(() =>
//   import('components/home').then(module => module.default)
// )

// const Form = asyncComponent(() =>
//   import('containers/form').then(module => module.default)
// )