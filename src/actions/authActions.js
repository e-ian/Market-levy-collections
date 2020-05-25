import { LOADING, USERLOGIN } from './actionTypes'
import firebaseApp from '../config/firebaseConfig'


//making call to the firebase function that authenticate users
export const AuthenticateUser = (username, password) => dispatch => {
    dispatch({
        type:LOADING
    })
    firebaseApp.auth().signInWithEmailAndPassword(username,password).then((data)=>{
        localStorage.setItem('access-token',data.user.refreshToken)
        dispatch({
            type:USERLOGIN,
            payload:'your have successfully logged in'
        })
    }).catch((error)=>{
        const errorCode = error.code
        const errorMessage = error.errorMessage
        console.log(errorCode, errorMessage)
    })

}