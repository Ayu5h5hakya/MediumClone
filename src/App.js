/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import NavigationService from './NavigationService'

export default class App extends Component {
  render() {
    return (
        <NavigationService.RootStack
          ref = {navigationRef => {
            NavigationService.setTopLevelNavigator(navigationRef)
          }}
        />
    );
  }
}