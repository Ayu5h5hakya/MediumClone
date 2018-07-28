import {
    FETCHING_DETAILS_REQUEST,
    FETCHING_DETAILS_SUCCESS,
    FETCHING_DETAILS_FAILURE,
    ADD_COMMENT_FOR_POST,
    ADD_COMMENT_FOR_POST_SUCCESS,
    ADD_COMMENT_FOR_POST_FAILURE
} from './types'

export const fetchDetailsAction = (id) => {
    return {
        type: FETCHING_DETAILS_REQUEST,
        payload : id
    }
}

export const detailSuccessAction = (data) => {
    return {
        type: FETCHING_DETAILS_SUCCESS,
        payload: data
    }
}

export const detailFailureAction = (error) => {
    return {
        type: FETCHING_DETAILS_FAILURE,
        errorMessage: error
    }
}

export const addCommentAction = () => {
    return {
        type: ADD_COMMENT_FOR_POST
    }
}

export const addCommentSuccessAction = () => {
    return {
        type: ADD_COMMENT_FOR_POST_SUCCESS
    }
}

export const addCommentFailureAction = () => {
    return {
        type: ADD_COMMENT_FOR_POST_FAILURE
    }
}

export const addCommentForpost = (userId, postId, comment) => {
    return async dispatch => {
        dispatch(addCommentAction)
        try {
            let response = await fetch('http://10.10.30.134:3000/detail',
                {
                    method: 'PATCH',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userId: 1001,
                        postId: 1,
                        comment: comment
                    })
                })
            let json = await response.json()
            console.log(json)
            dispatch(addCommentSuccessAction())
        } catch (error) {
            console.log(error)
            dispatch(addCommentFailureAction())
        }
    }
}

