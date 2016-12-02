import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
// import AppContainer from './app/containers/AppContainer';
import { Provider } from 'react-redux';
import reducer from './app/reducers';
import configureStore from './app/store';


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <TVMastermind />
  </Provider>
);

AppRegistry.registerComponent('TVMastermind', () => App);
