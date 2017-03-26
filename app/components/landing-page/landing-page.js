// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';

export default class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount() {
  //   this.props.fetchInfo('DoctorCai-1480');
  // }

  render() {
    return (
      <View style={{ paddingTop: 60 }}>
        <Text>Data</Text>
        <Text>{JSON.stringify(this.props.data)}</Text>
      </View>
    );
  }

}
