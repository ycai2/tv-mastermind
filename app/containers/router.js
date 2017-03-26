// @flow

import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
// import Stats from './stats/stats';

export const NavigationRouter = () => (
  <Router>
    <Scene
      key="user-stats"
      title="My Stats"
      component={Stats}
    />
  </Router>
);

export default NavigationRouter;
