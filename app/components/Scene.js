import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

class Scene extends Component {
  render() {
    return (
      <View style={{backgroundColor: "white"}}>
        <Text style={{marginTop: 20}}>
          {this.props.title} component should go here.
        </Text>


      </View>
    );
  }
}

export default Scene;
