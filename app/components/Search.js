import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const {
  View,
  TextInput,
  Text,
  Navigator,
} = ReactNative;

class Search extends Component {
  render() {
    return (
      <View style={{marginTop: 30}}>

        <Text>Hello World!</Text>
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
)(Search);
