import {FETCHING_DETAILS_REQUEST, 
    FETCHING_DETAILS_SUCCESS, 
    FETCHING_DETAILS_FAILURE,
    ADD_COMMENT_FOR_POST,
    ADD_COMMENT_FOR_POST_SUCCESS,
    ADD_COMMENT_FOR_POST_FAILURE} from './types'

export const fetchDetailsAction = () => {
    return {
        type : FETCHING_DETAILS_REQUEST
    }
}

export const postSuccessAction = (data) => {
    return {
        type : FETCHING_DETAILS_SUCCESS,
        payload : data
    }
}

export const postFailureAction = (error) => {
    return {
        type : FETCHING_DETAILS_FAILURE,
        errorMessage : error
    }
}

export const fetchDetails = (id) => {
        return async dispatch => {
            dispatch(fetchDetailsAction())
            try{
                let response = await fetch('http://10.10.30.134:3000/detail?id='+id)
                let json = await response.json()
                console.log(json)
                dispatch(postSuccessAction(json))
            }catch(error){
                console.log(error)
                dispatch(postFailureAction(error))
            }
        }
}

export const addCommentAction = () => {
    return {
        type : ADD_COMMENT_FOR_POST
    }
}

export const addCommentSuccessAction = () => {
    return {
        type : ADD_COMMENT_FOR_POST_SUCCESS
    }
}

export const addCommentFailureAction = () => {
    return {
        type : ADD_COMMENT_FOR_POST_FAILURE
    }
}

export const addCommentForpost = (userId, postId, comment) => {
    return async dispatch => {
        dispatch(addCommentAction)
        try{
            await fetch('http://10.10.30.134:3000/detail')
        }catch(error){
            console.log(error)
            dispatch(addCommentFailureAction())
        }
    }
}

