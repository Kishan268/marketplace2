import {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Popup from '../Popup/Popup.container.js'
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, Form, Field } from 'formik';
import {LoginSchema} from '../../Utils/ValidationSchema/index.js'

class Login extends Component{
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
  loginForm(){
      const{UserLogin,handelOnChange,isVerified,closeBideModel} = this.props
     
      return (
        <>
           <div className="row">
             <Formik
                 initialValues={{
                   password: '',
                   email: '',
                 }}
                 validationSchema={LoginSchema}
                 onSubmit={values => {
                  UserLogin(values)
                 }}
            >
              {({ errors, touched }) => (
                <div className="col-sm-12">
                  <Form className="form-group">
                    <div className="row">
                      <div className="col-md-6 ">
                        <img className="login-image" src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"/>

                      </div> 
                      <div className="col-md-6">
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
                           <div className="col-md-12 mt-4 form-group">
                            <button disabled={!this.state.isVerified} className="btn float-left btn-warning login_btn" type="submit">Submit</button>
                          </div>
                      </div>
                    </div>
                  </Form>  
                </div>
              )}
            </Formik> 
        </div>
          
      </>
      )
    }

	render(){
    const {handleClickOpen,isopen,isVerified,closeBideModel} = this.props

		return (
				<>
					<div className="container">
						<div className="col-md-12 ">
							<div className="row">
                <div className="col-md-6 ">
                  <img className="login-image" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
                </div>
                <div className="col-md-6 ">
                  <span>What's the main purpose for the account you're creating?</span>
                    <div class="top-form top-form-minicart flashmart-minicart2 mt-3">
                      <div class="top-minicart-icon ">
                        <a onClick={(()=>handleClickOpen())}  className="btn btn-primary btn-lg btn-block"  size="lg">Personal use</a>
                        <a  href="http://localhost:8000/login" className="btn btn-secondary btn-lg btn-block"  size="lg">Business membership</a>
                      </div>
                    </div>
                </div>
							</div>
						</div>
					</div>
				  <Popup
            title="User Sign In" 
            isopen= {isopen}
            content = {this.loginForm(this.props)}  
          />
                  
			</>
			)
	}
}


export default Login;
