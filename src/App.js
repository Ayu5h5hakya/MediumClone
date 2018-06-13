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
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import postReducer from './redux/reducers/postReducer'

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore)

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
        <Provider store = {createStoreWithMiddleWare(postReducer)}>
          <RootStack/>
        </Provider>
    );
  }
}