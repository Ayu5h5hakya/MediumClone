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
import DetailPage from './components/DetailPage/DetailPage'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import postReducer from './redux/reducers/postReducer'
import detailReducer from './redux/reducers/detailReducer'

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore)

const reducers = combineReducers({
  Post : postReducer,
  Detail : detailReducer
})

const NewStack = createStackNavigator({
  Home : HomePage,
  Detail : DetailPage
},{
  initialRouteName : 'Home',
  navigationOptions : {
    title :'Medium'
  }
})

const ArchiveStack = createStackNavigator({
  Home : HomePage,
  Detail : DetailPage
},{
  navigationOptions : {
    title : 'Archive'
  }
})

const RootStack = createBottomTabNavigator({
  New : NewStack,
  Archive : ArchiveStack
})

export default class App extends Component {
  render() {
    return (
        <Provider store = {createStoreWithMiddleWare(reducers)}>
          <NewStack/>
        </Provider>
    );
  }
}