// @flow
import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import styles from './styles';

export default class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queryParam: null,
    };
  }

  componentDidMount() {
    this.props.fetchUserData('DoctorCai-1480');
  }

  render() {
    const shows = this.props.searchResults;

    if (shows == null) {
      return (
        <View style={styles.statsContainer}>
          <ActivityIndicator style={styles.spinner} size="large" />
        </View>
      );
    }

    return (
      <View>{JSON.stringify(shows)}</View>
    );
  }
}
