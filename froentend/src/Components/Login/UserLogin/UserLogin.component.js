import {PureComponent} from 'react'
import { Button } from 'react-bootstrap';
import  axios from 'axios';
import { sessionReducer } from 'redux-react-session';
import  { Redirect,useHistory } from 'react-router-dom'


class UserLogin extends PureComponent {
	render(){
		const{UserLogin,token} = this.props
		return (
				<>
					<div className="row">
					   <div className="col-md-12 col-lg-12 " style={{fontSize:'135%'}}>
					   		<form onSubmit={((event)=>UserLogin(event))}>
						       <div className="row">
					           
					                <div className="col-md-12 form-group error-div">
					                  <label for="email">Email:{token}</label>
					                   <input 
								    	type="text" 
								    	name="email"
								    	className="form-control form-control-lg" 
								    	placeholder="Enter Email" />
					               </div>
					               <div className="col-md-12 form-group error-div">
					                  <label>Password:</label>
					                  <input 
								    	type="text" 
								    	name="password"
								    	className="form-control form-control-lg" 
								    	placeholder="Enter Password" />
					               </div>
					               
					               <div className="col-md-12 mt-4 form-group">
										<input type="checkbox" />Remember Me
									</div>
									<div className="form-group">
										<input type="submit" value="Login" className="btn float-left btn-success login_btn" />
					               </div>
					               
					            </div>
					        </form>				               
				   </div>
				</div>
					
			</>
			)

	}
}


export default UserLogin;
