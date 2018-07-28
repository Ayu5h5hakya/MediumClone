import { call, put, takeLatest } from 'redux-saga/effects'
import firebase from 'react-native-firebase'
import {sessionError, sessionSuccess} from '../redux/actions/sessionActions'
import NavigationService from '../NavigationService'

function* loginUser(action){

    if(!(action.email || action.password)){
        yield put(sessionError('Email or password cannot be empty'))
    } else {
        console.log("Authenticating....")
        const auth = firebase.auth()
        try{
            const result = yield call(
                [auth, auth.signInAndRetrieveDataWithEmailAndPassword],
                action.email,
                action.password
            )
            yield put(sessionSuccess(action.email))
            NavigationService.goBack()

        }catch (error){
            yield put(sessionError(error.message))
        }
    }
}

export default loginUser