import {Component} from 'react'
import UserRegisterComponent from './UserRegister.component';
import axios from 'axios'
import {saveToken} from '../../../store/User/user.action.js'
import { Redirect,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    saveToken: state => dispatch(saveToken(state))
})

class UserRegister extends Component{
	state = {
		redirect: false // add a redirect flag
	};
		
	UserRegister(event){
		const{saveToken,handleClickOpen} = this.props

		event.preventDefault()
		console.log(event.target.f_name.value)
		var data = {
					f_name:event.target.f_name.value,
					l_name:event.target.l_name.value,
					dob:event.target.dob.value,
					phone_no:event.target.phone_no.value,
					gender:event.target.gender.value,
					address:event.target.address.value,
					district_town:event.target.district_town.value,
					email:event.target.email.value,
					password:event.target.password.value,
					password_confirmation:event.target.password_confirmation.value,
					}
		axios.post('http://localhost:4000/register/',data).then((result)=>{
			// saveToken(result.data.token)
      		const tokenStore = localStorage.getItem('token');
      		if (result.data.status==200) {
				// this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
      			this.props.history.push(''); 
					toast("Registration successfully! We sent activation link, Check your email and click on the link to verify your email'");
					return result.data

      		}else if (result.data.status==201) {
				toast("Something went wrong!");
					return result.data
      		}
			
		}).catch((error)=>{
			console.log(error)
		})
	}

	render(){
		const {token} = this.props

		return (
				<>
					<UserRegisterComponent
					{...this.props}
					 UserRegister = {this.UserRegister.bind(this)}
					 />
			        <ToastContainer />

				</>
			)
	}
}

export default  withRouter (connect(mapStateToProps,mapDispatchToProps)(UserRegister));