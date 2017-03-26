// @flow
import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import styles from './styles';

export default class ShowList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queryParam: null,
    };
  }

  componentDidMount() {
    this.props.searchShows('girls');
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
      <View>
        {shows.map((showData) => (<Text key={showData.show.id}>{JSON.stringify(showData.show.name)}</Text>))}
      </View>
    );
  }
}
