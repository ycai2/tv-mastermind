// @flow

import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Search from './search/search';

export const NavigationRouter = () => (
  <Router>
    <Scene
      key="user-stats"
      title="Show List"
      component={Search}
    />
  </Router>
);

export default NavigationRouter;
