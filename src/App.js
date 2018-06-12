/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomePage from './components/HomePage/HomePage'
import {createStackNavigator} from 'react-navigation'

const RootStack = createStackNavigator({
  Home : HomePage
},{
  navigationOptions : {
    title :'Medium'
  }
})

export default class App extends Component {
  render() {
    return (
        <RootStack/>
    );
  }
}