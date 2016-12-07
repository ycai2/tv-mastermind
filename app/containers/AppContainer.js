import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import NavigatorComponent from '../components/NavigatorComponent';

const {
  View,
  Text,
  TouchableHighlight,
  ListView
} = ReactNative;

class AppContainer extends Component {
  render() {
    return (
      <View>
        <Text style={{marginTop: 20}}>
          This is the app container for TV Mastermind.
        </Text>
        <NavigatorComponent />
      </View>
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
