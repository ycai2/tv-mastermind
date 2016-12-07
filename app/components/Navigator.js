import React, { Component } from 'react';
import { Navigator, Text, View } from 'react-native';

class NavigatorComponent extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.onForward = this.onForward.bind(this);
    this.onBackward = this.onBackward.bind(this);
  }

  renderScene(route, navigator) {
    if (route.name === 'Starred') {
      return (
        <Text style={{marginTop: 40}}>
          The starred scene goes here
        </Text>
      );
    } else if (route.name === 'Search') {
      return (
        <Text style={{marginTop: 40}}>
          The search scene goes here
        </Text>
      );
    }
  }

  onForward(route, navigator) {
    const nextIndex = route.index + 1;
    navigator.push({
      name: route.name,
      index: nextIndex
    });
  }

  onBackward(route, navigator) {
    if (route.index > 0) {
      navigator.pop();
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Starred', index: 0 }}
        renderScene={this.renderScene} />
    );
  }
}

export default NavigatorComponent;
