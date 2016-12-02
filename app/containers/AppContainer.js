import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const {
  View,
  Text,
  TouchableHighlight,
} = ReactNative;

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {showCount: 0};
  }

  incrementShowCount() {
    this.setState({showCount: this.state.showCount + 1});
  }

  render() {
    return (
      <View>

        <Text style={{marginTop: 20}}>
          This is the app container for TV Mastermind. Count: {this.state.showCount}
        </Text>
        <TouchableHighlight onPress={() => {this.incrementShowCount()}}>
          <Text>Add Count</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => ({}), mapDispatchToProps)(AppContainer);
