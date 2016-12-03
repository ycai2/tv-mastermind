import React, { Component } from 'react';
import ReactNative from 'react-native';

const {
  View,
  Text,
  Navigator,
} = ReactNative;

class Home extends Component {
  render() {
    return (
      <View style={{marginTop: 30}}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

export default Home;
