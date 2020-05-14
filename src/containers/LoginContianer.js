import React,{useState} from 'react'
import { connect } from 'react-redux'
import {AuthenticateUser} from '../actions/authActions'
import LoginComponent from '../components/LoginComponent'

const LoginContianer = ({AuthenticateUser,history,login}) =>{ 
    const [formData, setFormData] = useState({username:'', password:''})
    const LoginData =()=>{
        AuthenticateUser(formData.username,formData.password)
    }
    //checking when the user has logged in
    if(login){
        history.push('/')
    }
    return (
        <div>
         <LoginComponent 
            formData={formData} 
            setFormData={setFormData}
            LoginData={LoginData}
         /> 
        </div>
    )
}
const mapStateToProps = state=>({
    authToken: state.auth.authToken,
    login:state.auth.login
})
export default connect(mapStateToProps, {AuthenticateUser})(LoginContianer)
