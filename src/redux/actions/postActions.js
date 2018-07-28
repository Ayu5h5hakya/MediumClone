import {FETCHING_POST_REQUEST, FETCHING_POST_SUCCESS, FETCHING_POST_FAILURE} from './types'

export const fetchPostsAction = () => {
    return {
        type : FETCHING_POST_REQUEST
    }
}

export const postSuccessAction = (data) => {
    return {
        type : FETCHING_POST_SUCCESS,
        payload : data
    }
}

export const postFailureAction = (error) => {
    return {
        type : FETCHING_POST_FAILURE,
        errorMessage : error
    }
}