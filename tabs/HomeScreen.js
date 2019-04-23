import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles.js';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
      </View>
    );
  }
}

export default HomeScreen;
