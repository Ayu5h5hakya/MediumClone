import {FETCHING_POST_REQUEST, FETCHING_POST_SUCCESS, FETCHING_POST_FAILURE} from '../actions/types'

const initalState = {

    isRefreshing : false,
    posts : [],
    errormessage : 'Err'

}

export default (state = initalState, action) => {
    
    switch(action.type){
        case FETCHING_POST_REQUEST:
            return {...state, isRefreshing : true}
        case FETCHING_POST_SUCCESS:
            return {...state, isRefreshing : false, posts : action.payload}
        case FETCHING_POST_FAILURE:
            return {...state, isRefreshing : false, errormessage : action.payload}
        default: 
            return state
    }
}