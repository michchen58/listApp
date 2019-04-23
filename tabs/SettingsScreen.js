import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles.js';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
      </View>
    );
  }
}

export default SettingsScreen;
