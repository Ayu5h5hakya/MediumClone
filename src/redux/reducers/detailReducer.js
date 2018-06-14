import {FETCHING_DETAILS_REQUEST, FETCHING_DETAILS_SUCCESS, FETCHING_DETAILS_FAILURE} from '../actions/types'

const initalState = {
    body : '',
    errorMessage : ''
}

export default (state = initalState, action) => {
    
    switch(action.type){
        case FETCHING_DETAILS_REQUEST:
            return state
        case FETCHING_DETAILS_SUCCESS:
            return {...state, body : action.payload}
        case FETCHING_DETAILS_FAILURE:
            return {...state, errormessage : action.payload}
        default: 
            return state
    }
}