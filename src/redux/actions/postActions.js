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

export default fetchPosts = () => {
    return async dispatch => {
        console.log("drggdfgager")
        dispatch(fetchPostsAction())
        try{
            let response = await fetch('http://10.10.30.182:3000/data')
            let json = await response.json()
            console.log(json)
            dispatch(postSuccessAction(json))
        }catch(error){
            console.log(error)
            dispatch(postFailureAction(error))
        }
    }
}