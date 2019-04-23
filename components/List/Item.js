import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles.js';

const ListItem = props => (
  <View style={styles.listItem}>
    <Text>{props.text}</Text>
  </View>
);
// <Button title="remove" onPress={props.removeCb} />

export default ListItem;
