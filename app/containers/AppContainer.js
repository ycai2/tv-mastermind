import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Home from '../components/Home';

class AppContainer extends Component {
  render() {
    return (
      <Home />
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
