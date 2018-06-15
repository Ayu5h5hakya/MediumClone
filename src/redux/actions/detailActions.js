import {FETCHING_DETAILS_REQUEST, FETCHING_DETAILS_SUCCESS, FETCHING_DETAILS_FAILURE} from './types'
import realm from '../../components/RealmPage/realm'

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

    let posts = realm.objects('Post')
    let postMatchingId = posts.filtered('postId = '+id)

    if(postMatchingId.length > 0){
        const matchingPost = postMatchingId[0]
        console.log(matchingPost)
        dispatch(postSuccessAction(matchingPost))
    }
    else{
        return async dispatch => {
            dispatch(fetchDetailsAction())
            try{
                let response = await fetch('http://192.168.100.4:3000/detail?id='+id)
                let json = await response.json()
                console.log(json)
                dispatch(postSuccessAction(json))
            }catch(error){
                console.log(error)
                dispatch(postFailureAction(error))
            }
        }
    }
}

export const saveDetails = (post) => {
    realm.write(() => {
        realm.create('Post',{
            postId : post.id,
            title : post.title,
            body : post.body,
            author : post.author,
            views : post.views,
            likes : post.likes
        })
    })
}