import React from 'react'
import { AppRegistry } from 'react-native';
import App from './src/App';
import {Provider} from 'react-redux'

import store from './store'

const AppContainer = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent('MediumClone', () => AppContainer);
