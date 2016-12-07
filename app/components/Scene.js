import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

class Scene extends Component {
  render() {
    return (
      <View>
        <Text style={{marginTop: 20}}>
          Current Scene: {this.props.title}
        </Text>

        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBackward}>
          <Text>Tap me to load previous scene</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Scene;
