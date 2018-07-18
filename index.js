import React from 'react'
import { AppRegistry } from 'react-native';
import App from './src/App';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import postReducer from './src/redux/reducers/postReducer'
import detailReducer from './src/redux/reducers/detailReducer'
import sessionReducer from './src/redux/reducers/sessionReducer'

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore)

const reducers = combineReducers({
  Post : postReducer,
  Detail : detailReducer,
  Session : sessionReducer
})

const AppContainer = () => {
    return (
        <Provider store={createStoreWithMiddleWare(reducers)}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent('MediumClone', () => AppContainer);
