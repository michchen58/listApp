import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import styles from '../styles.js';

import Item from '../components/List/Item.js';

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: new Map([
        ['0', {
          name: 'michelle chen',
          star: true
        }],
        ['1', {
          name: 'chris chang',
          star: false
        }],
        ['2', {
          name: 'forrest moret',
          star: false
        }],
        ['3', {
          name: 'dylan moret',
          star: false
        }],
        ['4', {
          name: 'toad',
          star: false
        }],
        ['5', {
          name: 'bowser',
          star: false
        }],
      ]),
      keyCount: 6,
    };
  }

  addItem = () => {
    let itemsCopy = new Map(this.state.items);

    itemsCopy.set(this.state.keyCount.toString(), {
      name: `item ${this.state.keyCount}`,
      star: false,
    });

    this.setState({
      'items': itemsCopy,
      'keyCount': this.state.keyCount + 1,
    });
  }

  removeItem = uid => {
    let itemsCopy = new Map(this.state.items);
    itemsCopy.delete(uid);
    this.setState({
      items: itemsCopy,
    })
  }

  render() {
    console.log(Array.from(this.state.items))
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Inhabitants of 503</Text>
        <Button title="Add item" onPress={this.addItem} />
        <FlatList data={Array.from(this.state.items)}
                  renderItem={({item, i}) => (
                    <Item text={item[1].name}
                          uid={item[0]}
                          removeCb={() => this.removeItem(item[0])}
                    />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  style={styles.flatList}
        />
      </View>
    );
  }
}

export default ListScreen;
