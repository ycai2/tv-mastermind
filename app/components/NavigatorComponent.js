import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Scene from './Scene';

class NavigatorComponent extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.onForward = this.onForward.bind(this);
    this.onBackward = this.onBackward.bind(this);
  }

  renderScene(route, navigator) {
    return (
      <Scene
        title={route.title}
        onForward={this.onForward}
        onBackward={this.onBackward} />
    );
  }

  onForward(route, navigator) {
    const nextIndex = route.index + 1;
    navigator.push({
      title: route.title,
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
        initialRoute={{ title: 'Starred', index: 0 }}
        renderScene={this.renderScene} />
    );
  }
}

export default NavigatorComponent;
