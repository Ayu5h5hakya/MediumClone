import { put, call } from 'redux-saga/effects'
import {detailSuccessAction, detailFailureAction} from '../redux/actions/detailActions'

function* fetchDetails(action){
        try {
            const response = yield call(fetch,'http://192.168.100.4:3000/detail?id=' + action.payload)
            const json = yield call([response,response.json])
            console.log(json)
            yield put(detailSuccessAction(json))
        } catch (error) {
            console.log(error)
            yield put(detailFailureAction(error.message))
        }
}

export default fetchDetails