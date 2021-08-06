import {PureComponent} from 'react'
import {connect} from 'react-redux';
import axios from 'axios'
import UserLoginComponent from './UserLogin.component.js';
import PropTypes from 'prop-types';
import {saveToken} from '../../../store/User/user.action.js'
import { Redirect,withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    saveToken: state => dispatch(saveToken(state))
})

class UserLogin extends PureComponent{
	state = {
		redirect: false // add a redirect flag
	};
	
	UserLogin(event){
		const{saveToken,handleClickOpen} = this.props

		event.preventDefault()
		var data= {
			email:event.target.email.value,
			password:event.target.password.value,
		}
				
		axios.post('http://localhost:4000/login/',data).then((result)=>{
			toast("Login successfully!");
			saveToken(result.data.token)
		const tokenStore = localStorage.getItem('token');

		if (result.data.token ) {
			this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
			// this.props.history.push('/my-account');

		}
			
		}).catch((error)=>{
			toast.error("Email and Password not match!");
			console.log(error)
		})
	}

	render(){
		const {token} = this.props

		return (
				<>
					<UserLoginComponent 
					{...this.props}
					UserLogin = {this.UserLogin.bind(this)

					}
					/>
			        <ToastContainer />

				</>
			)
	}
}

export default withRouter (connect(mapStateToProps,mapDispatchToProps)(UserLogin));