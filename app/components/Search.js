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
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  searchShows() {
    this.props.searchShows();
  }

  render() {
    return (
      <View style={{marginTop: 30}}>
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 20}}
            placeholder="Search shows you want to watch"
            onChangeText={(searchText) => this.searchShows(searchText)}
          />
        </View>
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
