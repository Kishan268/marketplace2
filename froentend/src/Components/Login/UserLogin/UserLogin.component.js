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

class UserLogin extends Component{
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
    // const {handleClickOpen,isopen,isVerified} = this.props
      const{handelOnChange,isVerified,emailError,passwordError,UserLogin1} = this.props
      return (
        <>
          <div className="row">
             <div className="col-md-12 col-lg-12 " style={{fontSize:'135%'}}>
                <Formik
                 initialValues={{
                   password: '',
                   email: '',
                 }}
                 validationSchema={LoginSchema}
                 onSubmit={values => {
                  UserLogin1(values)
                 }}
                >
                  {({ errors, touched }) => (
                    <Form className="form-group">
                      <div className="row">
                          <div className="col-md-12 form-group error-div">
                            <label for="email">Email:</label>
                             <Field  
                              type="text" 
                              name="email"
                              className="form-control form-control-lg" 
                              placeholder="Enter Email" />
                              <p style={{color:"red",fontSize:"14px"}}>{errors.email}</p>
                          </div>
                          <div className="col-md-12 form-group error-div">
                            <label for="email">Email:</label>
                              <Field  
                              type="password" 
                              name="password"
                              className="form-control form-control-lg"
                              placeholder="Enter Password" />
                              <p style={{color:"red",fontSize:"14px"}}>{errors.password}</p>
                          </div>
                          <div className="col-md-12 mt-4 form-group">
                              <input type="checkbox" />Remember Me
                          </div>
                          <div className="col-md-12 mt-4 form-group">
                              <ReCAPTCHA
                              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                              onChange={this.handelOnChange}
                            />
                          </div>
                          <div className="form-group">
                            <button disabled={!this.state.isVerified} className="btn float-left btn-warning login_btn" type="submit">Submit</button>
                          </div>
                      </div>
                    </Form>  
                  )}
                </Formik>                
             </div>
        </div>
          
      </>
			)
	}
}



export default UserLogin;
