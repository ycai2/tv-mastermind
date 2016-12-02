import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/store';
import AppContainer from './app/containers/AppContainer';

const store = configureStore({});
const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

AppRegistry.registerComponent('TVMastermind', () => App);
