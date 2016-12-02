import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const {
  View,
  Text,
} = ReactNative;

class AppContainer extends Component {
  render() {
    return (
      <View>
        <Text style={{marginTop: 20}}>
          This is the app container for TV Mastermind.
        </Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => ({}), mapDispatchToProps)(AppContainer);
