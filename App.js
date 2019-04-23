import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import ListScreen from './tabs/ListScreen.js';
import HomeScreen from './tabs/HomeScreen.js';
import SettingsScreen from './tabs/SettingsScreen.js';

import Icon from 'react-native-vector-icons/AntDesign';

const MainNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" size={24} />
        )
      },
    },
    ListScreen: {
      screen: ListScreen,
      navigationOptions: {
        tabBarLabel: 'List of things',
        tabBarIcon: ({tintColor}) => (
          <Icon name="bars" size={24} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({tintColor}) => (
          <Icon name="setting" size={24} />
        )
      },
    },
  },
  {
    initialRouteName: 'ListScreen',
    navigationOptions: {
      tabBarVisible: true,
    }
  }
);

export default createAppContainer(MainNavigator);
