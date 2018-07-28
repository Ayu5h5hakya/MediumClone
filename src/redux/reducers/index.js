import postReducer from './postReducer'
import detailReducer from './detailReducer'
import sessionReducer from './sessionReducer'
import {combineReducers} from 'redux'

const reducers = combineReducers({
    Post : postReducer,
    Detail : detailReducer,
    Session : sessionReducer
})

export default reducers