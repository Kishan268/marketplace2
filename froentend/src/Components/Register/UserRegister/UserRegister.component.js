import React,{Component} from "react";

class UserRegister extends Component {

	render(){
		const{UserRegister} = this.props
	return (

		<>
			<div className="row">
			    <div className="col-md-12 " >
			        <form  onSubmit={((event)=>UserRegister(event))}>
			            <div className="row">
			               <div className="col-md-12 form-group">
			                 <h3 className="font-weight-bold f-14">Personal Information</h3>
			               </div>
			               	<div className="col-md-6 form-group error-div">
			                  <label>First Name:</label>
			                  <input 
						    	type="text" 
						    	name="f_name"
						    	className="form-control form-control-lg" 
						    	placeholder="Enter First name" />
			               </div> 
			                <div className="col-md-6 form-group error-div">
			                  <label>Last Name:</label>
			                  <input 
						    	type="text" 
						    	name="l_name"
						    	className="form-control form-control-lg" 
						    	placeholder="Enter Last name" />
			               </div> 
			               <div className="col-md-6 form-group error-div">
			                  <label>Date of Birth:</label>
			                 <input 
						    	type="date" 
						    	name="dob"
						    	className="form-control form-control-lg" 
						    	placeholder="Enter Date of Birth:" />
			               </div>
			                <div className="col-md-6 form-group error-div">
			                  <label>Phone number</label>
			                   <input 
						    	type="number" 
						    	name="phone_no"
						    	className="form-control form-control-lg" 
						    	placeholder="Enter Phone number" />
			               </div> 
			                <div className="col-md-6 form-group error-div">
			                  <label>Gender: </label>
			                  <select 
						    	name="gender"
						    	className="form-control form-control-lg required" >
			                     <option value="">Select Gender</option>
			                     <option value="Male">Male</option>
			                     <option value="Female">Female</option>
			                     <option value="Gender diverse">Gender diverse</option>
			                  </select>
			               </div>
			               <div className="col-md-6 form-group error-div">
			                   <label>New Zealand:</label>
			                   <input 
						    	type="text" 
						    	name="address"
						    	className="form-control form-control-lg" 
						    	placeholder="Enter Address" />
			               </div> 
			              
			                <div className="col-md-6 form-group error-div">
			                  <label> City: </label>
			                   <select 
						    	name="district_town"
						    	className="form-control form-control-lg required" >
			                     <option value=""> City</option>
			                     <option value="Northland - Dargaville">Northland - Dargaville</option>
			                     <option value="Northland - Kaikohe"> Northland - Kaikohe </option>
			                     <option value="Northland - Kerikeri"> Northland - Kerikeri </option>
			                  </select>
			                 
			               </div>
						   <div className="col-md-6 form-group error-div">
			                  <label> State: </label>
			                   <select 
						    	name="state"
						    	className="form-control form-control-lg required" >
			                     <option value="">Select State</option>
			                     <option value="Auckland">Auckland</option>
			                     
			                  </select>
			                </div>
							<div className="col-md-6 form-group error-div">
			                  <label> District: </label>
			                   <select 
						    	name="district_town"
						    	className="form-control form-control-lg required" >
			                     <option value="">District town</option>
			                     <option value="Auckland">Auckland</option>
			                     <option value="Devonport">Devonport</option>
			                     <option value="Waiuku">Waiuku</option>

			                     
			                  </select>
			                </div>
							<div className="col-md-6 form-group error-div">
			                  <label>Country: </label>
			                  <select 
						    	name="country"
						    	className="form-control form-control-lg required" >
			                     <option value="">Select Country</option>
			                     <option value="New Zealand">New Zealand</option>
			                  </select>
			               </div>
						   <div className="col-md-6 form-group error-div">
			                  <label for="zip">Zip Code:</label>
			                   <input 
						    	type="text" 
						    	name="zip"
						    	className="form-control form-control-lg" 
						    	placeholder="Enter zip code" />
			               </div>
			            </div>
						
			           
			            <div className="row">
			               <div className="col-md-12 form-group error-div">
			                  <hr />
			               <h3 className="font-weight-bold f-14">Security Information</h3>
			               </div>
			                <div className="col-md-6 form-group error-div">
			                  <label for="email">Email:</label>
			                   <input 
						    	type="text" 
						    	name="email"
						    	className="form-control form-control-lg" 
						    	placeholder="Enter Email" />
			               </div>
			               
			               <div className="col-md-6 form-group error-div">
			                  <label>Password:</label>
			                  <input 
						    	type="text" 
						    	name="password"
						    	className="form-control form-control-lg" 
						    	placeholder="Enter Password" />
			               </div>
			               <div className="col-md-6 form-group error-div">
			                  <label>Confirm Password: </label>
			                   <input 
						    	type="text" 
						    	name="password_confirmation"
						    	className="form-control form-control-lg required" 
						    	placeholder="Re-Type Password" />
			               </div>
			                
			             
			               <div className="col-md-12 mt-4 form-group">
			                  <button className=" btn-success">Submit</button>
			               </div>
			               
			            </div>
					</form>
			   </div>
			</div>
		</>
	)
}
}


export default UserRegister;
