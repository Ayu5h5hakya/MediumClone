import {SESSION_RESTORING, SESSION_LOADING, SESSION_SUCCESS, SESSION_ERROR, SESSION_LOGOUT} from './types'
import firebase from 'react-native-firebase'

import NavigationService from '../../NavigationService'

const sessionRestoring = () => ({
    type : SESSION_RESTORING
})

export const sessionLoading = (email, password) => ({
    type : SESSION_LOADING,
    email,
    password
})

export const sessionSuccess = user => ({
    type : SESSION_SUCCESS,
    payload : user
})

export const sessionError = err => ({
    type : SESSION_ERROR,
    payload : err
})

const sessionLogout = () => ({
    type : SESSION_LOGOUT
})

export const restoreSession = () => {
    return (dispatch) => {
        dispatch(sessionRestoring())
        let unsubscribe = firebase.auth()
                                  .onAuthStateChanged(user => {
                                      if(user){
                                          dispatch(sessionSuccess(user))
                                          unsubscribe()
                                      } else {
                                          dispatch(sessionLogout())
                                          unsubscribe()
                                      }
                                  })
    }
}

export const loginUser = (email, password) => {
    return (dispatch) => {
        if(!(email || password)){
            dispatch(sessionError('Email or password cannot be empty'))
        } else {
            console.log("Authenticating....")
            dispatch(sessionLoading())
            firebase.auth()
            .signInAndRetrieveDataWithEmailAndPassword(email, password)
            .catch(error => {
                dispatch(sessionError(error.message))
            })
    
            let unsubscribe = firebase.auth()
            .onAuthStateChanged(user => {
                if(user){
                    dispatch(sessionSuccess(user))
                    NavigationService.goBack()
                    unsubscribe()
                }
            })
        }
    }
}

export const signUpUser = (email, password) => {
    return (dispatch) => {
        dispatch(sessionLoading())
        firebase.auth()
        .createUserAndRetrieveDataWithEmailAndPassword(email, password)
        .catch(error => {
            dispatch(sessionError(error.message))
        })

        let unsubscribe = firebaseService.auth()
        .onAuthStateChanged(user => {
          if (user) {
            dispatch(sessionSuccess(user))
            unsubscribe()
          }
        })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch(sessionLoading())
        firebase.auth()
        .signOut()
        .then(() => {
            dispatch(sessionLogout())
        })
        .catch(error => {
            dispatch(sessionError(error.message))
        })
    }
}
