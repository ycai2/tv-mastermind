import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import AppContainer from './app/containers/AppContainer';
import { Provider } from 'react-redux';
import configureStore from './app/store';


const store = configureStore();

export default class TVMastermind extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to TV Mastermind!
        </Text>
        <Text style={styles.detail}>
          TV Mastermind is a mobile app to provide TV show schedules & info
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  detail: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const App = () => (
  <Provider store={store}>
    <TVMastermind />
  </Provider>
);

AppRegistry.registerComponent('TVMastermind', () => App);
