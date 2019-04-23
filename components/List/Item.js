import React from 'react';
import { View, Text, Button, TouchableNativeFeedback } from 'react-native';
import styles from '../../styles.js';

const ListItem = props => (
  <View style={styles.listItem}>
    <View style={styles.listText}>
      <Text>{props.text}</Text>
    </View>

    <TouchableNativeFeedback
      onPress={props.removeCb}
      background={TouchableNativeFeedback.SelectableBackground()}
      style={styles.removeButton}
      >
      <View>
        <Text>[Remove]</Text>
      </View>
    </TouchableNativeFeedback>
    </View>
);
// <Button title="remove" onPress={props.removeCb} />

export default ListItem;
