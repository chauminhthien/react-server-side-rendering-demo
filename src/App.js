// @flow

import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import DashboardPage from './screens/Dashboard';

class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route render={ () => <DashboardPage /> } />
      </Switch>

    );
  }
};

export default withRouter(App);
