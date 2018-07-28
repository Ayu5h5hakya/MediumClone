import { all, takeLatest } from 'redux-saga/effects'

import fetchPosts from './postSaga'
import fetchDetails from './detailSaga'
import loginUser from './sessionSaga'
import {FETCHING_POST_REQUEST, FETCHING_DETAILS_REQUEST, SESSION_LOADING} from '../redux/actions/types'


export default function* rootSaga() {

    yield all([
        yield takeLatest(FETCHING_POST_REQUEST, fetchPosts),
        yield takeLatest(FETCHING_DETAILS_REQUEST, fetchDetails),
        yield takeLatest(SESSION_LOADING, loginUser)
    ])

}
