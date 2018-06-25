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
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import HomePage from './components/HomePage/HomePage'
import DetailPage from './components/DetailPage/DetailPage'
import LoginModal from './components/LoginModal/LoginModal'
import postReducer from './redux/reducers/postReducer'
import detailReducer from './redux/reducers/detailReducer'
import sessionReducer from './redux/reducers/sessionReducer'

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore)

const reducers = combineReducers({
  Post : postReducer,
  Detail : detailReducer,
  Session : sessionReducer
})

const NewStack = createStackNavigator({
  Home : HomePage,
  Detail : DetailPage
},{
  navigationOptions : {
    title :'Medium'
  }
})

const RootStack = createStackNavigator({
  New : NewStack,
  Login : LoginModal
},{
  initialRouteName : 'New',
  mode: 'modal',
  headerMode: 'none',
})

export default class App extends Component {
  render() {
    return (
        <Provider store = {createStoreWithMiddleWare(reducers)}>
          <RootStack/>
        </Provider>
    );
  }
}