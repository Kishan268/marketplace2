import React,{Component} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, Form, Field } from 'formik';
import {SignupSchema} from '../../../Utils/ValidationSchema/index.js'
import Select from 'react-select';
// import genderOptions from '../../../addressSchema/index.js'
const genderOptions = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Gender diverse', label: 'Gender diverse' }
];
const cityOptions = [
  { value: 'Dargaville', label: 'Dargaville' },
  { value: 'Kaikohe', label: 'Kaikohe' },
  { value: 'sKerikeri', label: 'Kerikeri' }
];const stateOptions = [
  { value: 'Auckland', label: '	Auckland' }
];const countryOptions = [
  { value: 'New Zealand', label: 'New Zealand' }
];
class UserRegister extends Component {
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
	const{UserSignUp} = this.props
	return (

		<>
			<div className="row">
			    <div className="col-md-12 " >
			     <Formik
                 initialValues={{
                   f_name: '',
                   l_name: '',
                   dob: '',
                   gender: '',
                   address: '',
                   city: '',
                   // district_town: '',
                   state: '',
                   country: '',
                   phone_no: '',
                   zip: '',
                   email: '',
                   password: '',
                 }}
                 validationSchema={SignupSchema}
                 onSubmit={values => {
                 	console.log(values)
                  UserSignUp(values)
                 }}
                >
                {({ errors, touched }) => (
                <Form className="form-group">
			            <div className="row">
			               <div className="col-md-12 form-group">
			                 <h3 className="font-weight-bold f-14">Personal Information</h3>
			               </div>
			               	<div className="col-md-6 form-group error-div">
			                  <label>First Name:</label>
			                  <Field 
										    	type="text" 
										    	name="f_name"
										    	className="form-control form-control-lg" 
									    		placeholder="Enter First name" / >
                        <p style={{color:"red",fontSize:"14px"}}>{errors.f_name}</p>

			               </div> 
			                <div className="col-md-6 form-group error-div">
			                  <label>Last Name:</label>
			                  <Field 
										    	type="text" 
										    	name="l_name"
										    	className="form-control form-control-lg" 
										    	placeholder="Enter Last name" />
                        <p style={{color:"red",fontSize:"14px"}}>{errors.l_name}</p>

			               </div> 
			               <div className="col-md-6 form-group error-div">
			                  <label>Date of Birth:</label>
			                 <Field 
									    	type="date" 
									    	name="dob"
									    	className="form-control form-control-lg" 
									    	placeholder="Enter Date of Birth:" />
                        <p style={{color:"red",fontSize:"14px"}}>{errors.dob}</p>

			               </div>
			                <div className="col-md-6 form-group error-div">
			                  <label>Phone number</label>
			                   <Field 
										    	type="number" 
										    	name="phone_no"
										    	className="form-control form-control-lg" 
										    	placeholder="Enter Phone number" />
                        <p style={{color:"red",fontSize:"14px"}}>{errors.phone_no}</p>

			               </div> 
			                <div className="col-md-6 form-group error-div">
			                  <label>Gender: </label>
			                    <Field as="select"  name="gender"  
			                     className="form-control">
			                     <option value="">Select Gender</option>
			                     <option value="Male">Male</option>
							             <option value="Female">Female</option>
							             <option value="Gender diverse">Gender diverse</option>
			                      </Field>
                        <p style={{color:"red",fontSize:"14px"}}>{errors.gender}</p>

			               </div>
			               <div className="col-md-6 form-group error-div">
			                   <label>Address:</label>
			                   <Field 
										    	type="text" 
										    	name="address"
										    	className="form-control form-control-lg" 
										    	placeholder="Enter Address" />
										    	 
                        <p style={{color:"red",fontSize:"14px"}}>{errors.address}</p>

			               </div> 
			              
			                <div className="col-md-6 form-group error-div">
			                  <label> Select City: </label>
			                  <Field as="select" name="city" className="form-control">
			                  	<option value="">Select City</option>
			                  	<option value="Kaikohe">Kaikohe</option>
							          </Field>
                        <p style={{color:"red",fontSize:"14px"}}>{errors.city}</p>
			               </div>
			               {/*<div className="col-md-6 form-group error-div">
			               			                <label> District: </label>
			               			                  <Select options = {stateOptions} name="district_town" />
			               			                <p style={{color:"red",fontSize:"14px"}}>{errors.district_town}</p>
			               			              </div>*/}
									   <div className="col-md-6 form-group error-div">
			                  <label> State: </label>
			                  <Field as="select" name="state" className="form-control">
			                  <option value="">Select State</option>
			                  <option value="Auckland">Auckland</option>
							            
			                  </Field>
			                  <p style={{color:"red",fontSize:"14px"}}>{errors.state}</p>
			               </div>
										
										<div className="col-md-6 form-group error-div">
			                <label>Country: </label>
			               	<Field as="select"  name="country" className="form-control">
	               				<option value="">Select Country</option>
	               				<option value="NZ">NZ</option>

			               	</Field>
			               
			                <p style={{color:"red",fontSize:"14px"}}>{errors.country}</p>
			             </div>
								   <div className="col-md-6 form-group error-div">
			                <label for="zip">Zip Code:</label>
			                <Field 
								    	type="text" 
								    	name="zip"
								    	className="form-control form-control-lg" 
								    	placeholder="Enter zip code" />
			                <p style={{color:"red",fontSize:"14px"}}>{errors.zip}</p>
					         </div>
					       </div>
			          <div className="row">
			             <div className="col-md-12 form-group error-div">
			                <hr />
			             <h3 className="font-weight-bold f-14">Security Information</h3>
			             </div>
			              <div className="col-md-6 form-group error-div">
			                <label for="email">Email:</label>
			                 <Field 
									    	type="text" 
									    	name="email"
									    	className="form-control form-control-lg" 
									    	placeholder="Enter Email" />
			                <p style={{color:"red",fontSize:"14px"}}>{errors.email}</p>

			             </div>
			             
			             <div className="col-md-6 form-group error-div">
			                <label>Password:</label>
			                <Field 
									    	type="text" 
									    	name="password"
									    	className="form-control form-control-lg" 
									    	placeholder="Enter Password" />
			                <p style={{color:"red",fontSize:"14px"}}>{errors.password}</p>

			             </div>
			             <div className="col-md-6 form-group error-div">
			                <label>Confirm Password: </label>
			                 <Field 
									    	type="text" 
									    	name="password_confirmation"
									    	className="form-control form-control-lg required" 
									    	placeholder="Re-Type Password" />
			                <p style={{color:"red",fontSize:"14px"}}>{errors.password_confirmation}</p>

			             </div>
			              
				     		 	<div className="col-md-12 mt-4 form-group">
			                <ReCAPTCHA
			                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
			                onChange={this.handelOnChange}
			              />
			            </div>
		              <div className="form-group">
		                <button disabled={!this.state.isVerified} className="btn float-left btn-warning login_btn" >Submit</button>
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


export default UserRegister;
