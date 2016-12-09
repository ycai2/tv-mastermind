import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import Scene from '../components/Scene';

const {
  View,
  Text,
  TouchableHighlight,
  ListView,
  Navigator } = ReactNative;

class AppContainer extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <Scene
            title={route.title}

            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            onBackward={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
                {  },
              RightButton: (route, navigator, index, navState) =>
                { return (<Text style={{color: 'white'}}>+</Text>); },
              Title: (route, navigator, index, navState) =>
                { return (<Text style={{color: 'white'}}>TV Mastermind</Text>); },
            }}
            style={{backgroundColor: '#222'}}
          />
        }
      />
    );
  }
}

const mapStateToProps = (state) => (
  {}
);

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(ActionCreators, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
