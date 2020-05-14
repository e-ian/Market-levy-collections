import {USERLOGIN, LOADING} from '../actions/actionTypes'

const initialState = {
    authToken:'',
    login: false,
    loading:false
}

//reducer for handling verious users authentications 
export const authReducer = (state=initialState, action)=>{
    switch(action.type){
        case USERLOGIN:
            return{
                ...state,
                authToken: action.payload,
                login:true
            }
        case LOADING:{
            return{
                ...state,
                login: false,
                loading:true
            }
        }
        default:
            return state
    }
}