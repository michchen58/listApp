import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import styles from '../styles.js';

import Item from '../components/List/Item.js';

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: [
      //   {key: 'michelle'},
      //   {key: 'chris'},
      //   {key: 'forrest'},
      //   {key: 'dylan'},
      //   {key: 'toad'},
      //   {key: 'bowser'},
      // ],
      items: new Map([
        ['michelle', true],
        ['chris', true],
        ['forrest', true],
        ['dylan', true],
        ['toad', true],
        ['bowser', true],
      ])
    };
  }

  addItem = () => {
    // let itemsCopy = this.state.items.slice();
    let itemsCopy = new Map(this.state.items);
    itemsCopy.set(`item ${itemsCopy.size + 1}`, true);
    this.setState({'items': itemsCopy});
  }

  removeItem = () => {

  }

  render() {
    console.log(Array.from(this.state.items))
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Inhabitants of 503</Text>
        <Button title="Add item" onPress={this.addItem}></Button>
        <FlatList data={Array.from(this.state.items)}
                  renderItem={({item, i}) => (<Item text={item[0]} removeCb={this.removeItem} />)}
                  keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default ListScreen;
