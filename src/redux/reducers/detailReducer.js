import {
    FETCHING_DETAILS_REQUEST,
    FETCHING_DETAILS_SUCCESS,
    FETCHING_DETAILS_FAILURE,
    ADD_COMMENT_FOR_POST,
    ADD_COMMENT_FOR_POST_SUCCESS,
    ADD_COMMENT_FOR_POST_FAILURE
} from '../actions/types'

const initalState = {
    body: '',
    errorMessage: '',
    comments: []
}

export default (state = initalState, action) => {

    switch (action.type) {
        case FETCHING_DETAILS_REQUEST:
            return state
        case FETCHING_DETAILS_SUCCESS:
            return { ...state, body: action.payload }
        case FETCHING_DETAILS_FAILURE:
            return { ...state, errormessage: action.payload }
        case ADD_COMMENT_FOR_POST :
            return {...state}
        case ADD_COMMENT_FOR_POST_SUCCESS:
            return {...state, comments : action.payload}
        case ADD_COMMENT_FOR_POST_FAILURE:
            return {...state, comments : []}
        default:
            return state
    }
}