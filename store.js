 import {createStore, applyMiddleware} from 'redux'
 import createSagaMiddleware from 'redux-saga'

 import reducers from './src/redux/reducers'
 import rootSaga from './src/sagas'

 const sageMiddleware = createSagaMiddleware()

 const store = createStore(
     reducers,
     applyMiddleware(sageMiddleware)
 )

 sageMiddleware.run(rootSaga)
 export default store