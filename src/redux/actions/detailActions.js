import {FETCHING_DETAILS_REQUEST, FETCHING_DETAILS_SUCCESS, FETCHING_DETAILS_FAILURE} from './types'

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

export default fetchDetails = () => {
    return async dispatch => {
        dispatch(fetchDetailsAction())
        try{
            let response = await fetch('http://192.168.100.4:3000/detail')
            let json = await response.json()
            console.log(json)
            dispatch(postSuccessAction(json))
        }catch(error){
            console.log(error)
            dispatch(postFailureAction(error))
        }
    }
}