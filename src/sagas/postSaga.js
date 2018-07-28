import { put, call } from 'redux-saga/effects'
import {postSuccessAction, postFailureAction} from '../redux/actions/postActions'

function* fetchPosts(){
        try{
            const response = yield call( fetch,'http://192.168.100.4:3000/data')
            const json = yield call([response, response.json])
            console.log(json)
            yield put(postSuccessAction(json))
        }catch(error){
            console.log(error)
            yield put(postFailureAction(error))
        }
}

export default fetchPosts