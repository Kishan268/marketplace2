import {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Popup from '../../Popup/Popup.container.js'
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, Form, Field } from 'formik';
import {LoginSchema} from '../../../Utils/ValidationSchema/index.js'
import LoginComponent from '../Login.component.js'

class UserLogin extends LoginComponent{
  constructor(props){
    super(props);
    this.handelOnChange=this.handelOnChange.bind(this)
    this.state = {
      isVerified: false
    };

  }

 handelOnChange(value) {
  console.log("Captcha value:", value);
  this.setState({isVerified:true})   

}
 
render(){
    console.log(this.props)
    // const {handleClickOpen,isopen,isVerified} = this.props
      const{handelOnChange,isVerified,emailError,passwordError,UserLogin1} = this.props
      return (
        <>
          {this.loginForm()}  
        </>
      )
  }
}



export default UserLogin;