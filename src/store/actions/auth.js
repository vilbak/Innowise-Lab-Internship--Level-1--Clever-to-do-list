import axios from 'axios'
import { toast } from 'react-toastify'
import * as actionTypes from './actionTypes'
import database from '../../fireBase'

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  }
}
export const authSuccess = (idToken, userId) => {
  return dispatch => {
    dispatch({
      type: actionTypes.AUTH_SUCCESS,
      idToken: idToken,
      userId: userId,
    })
    toast.success('Logged in')
  }
}

export const authFail = (error) => {
  return dispatch => {
    dispatch({
      type: actionTypes.AUTH_FAIL,
      error: error,
    })
    toast.error(error.message)
  }
}


export const auth = (email, password, isSignUp) => {
  return (dispatch) => {

    dispatch(authStart())
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    }
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    if (isSignUp) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    }
    axios.post(url, authData)
         .then(response => {
           database.ref('users/id').push(response.data.localId).then((ref) => {
           })
           dispatch(authSuccess(response.data.idToken, response.data.localId))
           dispatch(checkAuthTimeout(response.data.expiresIn))
         })
         .catch((err => {
           dispatch(authFail(err.response.data.error))

         }))
  }
}
export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  }
}

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())

    }, expirationTime * 1000)

  }
}



