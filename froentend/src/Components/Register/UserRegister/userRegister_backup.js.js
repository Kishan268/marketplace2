import React,{useState,useEffect,Component} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
 function UserRegister(){
 	var history =useHistory();
	const [error,setError]=useState("");
	const [loading,setLoading]=useState("");
	const [user, setUser] = useState({
		f_name:"",
		l_name:"",
		dob:"",
		gender:"",
		phone_no:"",
		address:"",
		name:"",
		email:"",
		password:"",
		country:"",
		password_confirmation:'',
		user_role:4
	});
	const{f_name,l_name,dob,gender,phone_no,name,email,address,password,country,password_confirmation,user_role,district_town} = user;
	const onInputChange = e =>{
		console.log(e.target.value)
		setUser({...user,[e.target.name]:e.target.value})

		
	}
	const onSubmit =async (e) =>{
	e.preventDefault()
	await axios.post("http://localhost:8000/api/register",user)
	.then(response=> {
	  	setLoading(false);
	  	sessionStorage.setItem("token",response.data.token);
		sessionStorage.setItem("user",JSON.stringify(response.data.user));
		history.push('/');

	  })
	  .catch(error=> {
	  	setLoading(false);
	  	if (error.response.status === 401 || error.response.status === 400) {
	  		setError(error.response.data.message)
	  	}else
	  	{
	  		setError('Somthing went wrong, Please try again later.')
	  	}
})
	}
	return (
		<>
			<div className="row">
			    <div className="col-md-12 register-inner-body" style={{fontSize:'135%'}}>
			        <form onSubmit={e=>onSubmit(e)}>
			            <div className="row">
			               <div className="col-md-12 form-group">
			                 <h3 className="font-weight-bold f-14">Personal Information</h3>
			               </div>
			               	<div className="col-md-4 form-group error-div">
			                  <label>First Name:</label>
			                  <input 
						    	type="text" 
						    	name="f_name"
						    	value={f_name}
						    	onChange={e=>onInputChange(e)}
						    	
						    	className="form-control form-control-lg" 
						    	placeholder="Enter First name" />
			               </div> 
			               <input 
						    	type="hidden" 
						    	name="user_role"
						    	value={user_role}
						    	onChange={e=>onInputChange(e)} />
			                <div className="col-md-4 form-group error-div">
			                  <label>Last Name:</label>
			                  <input 
						    	type="text" 
						    	name="l_name"
						    	value={l_name}
						    	onChange={e=>onInputChange(e)}
						    	className="form-control form-control-lg" 
						    	placeholder="Enter Last name" />
			               </div> 
			               <div className="col-md-4 form-group error-div">
			                  <label>Date of Birth:</label>
			                 <input 
						    	type="date" 
						    	name="dob"
						    	value={dob}
						    	onChange={e=>onInputChange(e)}
						    	className="form-control form-control-lg" 
						    	placeholder="Enter Date of Birth:" />
			               </div>
			                <div className="col-md-4 form-group error-div">
			                  <label>Phone number</label>
			                   <input 
						    	type="number" 
						    	name="phone_no"
						    	value={phone_no}
						    	onChange={e=>onInputChange(e)}
						    	className="form-control form-control-lg" 
						    	placeholder="Enter Phone number" />
			               </div> 
			                <div className="col-md-4 form-group error-div">
			                  <label>Gender: </label>
			                  <select 
						    	name="gender"
						    	value={gender}
						    	onChange={e=>onInputChange(e)}
						    	className="form-control form-control-lg required" >
			                     <option value="">Select Gender</option>
			                     <option value="Male">Male</option>
			                     <option value="Female">Female</option>
			                     <option value="Gender diverse">Gender diverse</option>
			                  </select>
			               </div>
			               <div className="col-md-4 form-group error-div">
			                   <label>New Zealand:</label>
			                 
			                   <input 
						    	type="text" 
						    	name="address"
						    	value={address}
						    	onChange={e=>onInputChange(e)}
						    	className="form-control form-control-lg" 
						    	placeholder="Enter Address" />
			               </div> 
			              
			                <div className="col-md-4 form-group error-div">
			                  <label>Closest town: </label>
			                   <select 
						    	name="district_town"
						    	value={district_town}
						    	onChange={e=>onInputChange(e)}
						    	className="form-control form-control-lg required" >
			                     <option value="">Closest town</option>
			                     <option value="Northland - Dargaville">Northland - Dargaville</option>
			                     <option value="Northland - Kaikohe"> Northland - Kaikohe </option>
			                     <option value="Northland - Kerikeri"> Northland - Kerikeri </option>
			                  </select>
			                 
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
						    	value={email}
						    	onChange={e=>onInputChange(e)}
						    	className="form-control form-control-lg" 
						    	placeholder="Enter Email" />
			               </div>
			               <div className="col-md-6 form-group error-div">
			                  <label for="name">User Name:</label>
			                   <input 
						    	type="text" 
						    	name="name"
						    	value={name}
						    	onChange={e=>onInputChange(e)}
						    	className="form-control form-control-lg" 
						    	placeholder="Enter UserName" />
			               </div>
			               <div className="col-md-6 form-group error-div">
			                  <label>Password:</label>
			                  <input 
						    	type="text" 
						    	name="password"
						    	value={password}
						    	onChange={e=>onInputChange(e)}
						    	className="form-control form-control-lg" 
						    	placeholder="Enter Password" />
			               </div>
			               <div className="col-md-6 form-group error-div">
			                  <label>Confirm Password: </label>
			                   <input 
						    	type="text" 
						    	name="password_confirmation"
						    	value={password_confirmation}
						    	onChange={e=>onInputChange(e)}
						    	className="form-control form-control-lg required" 
						    	placeholder="Re-Type Password" />
			               </div>
			                <div className="col-md-6 form-group error-div">
			                  <label>Country: </label>
			                  <select 
						    	name="country"
						    	value={country}
						    	onChange={e=>onInputChange(e)}
						    	className="form-control form-control-lg required" >
			                     <option value="">Select Country</option>
			                     <option value="1">Afghanistan</option>
			                     <option value="2">Aland Islands</option>
			                  </select>
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


export default UserRegister;
