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
		
	UserSignUp(values){
		const{saveToken,handleClickOpen,closeBideModel} = this.props

		axios.post('http://localhost:4000/register/',values).then((result)=>{
			// saveToken(result.data.token)
      		// const tokenStore = localStorage.getItem('token');
      		if (result.data.user) {
				this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
					alert("Registration successfully! We sent activation link, Check your email and click on the link to verify your email'");
					toast("Registration successfully! We sent activation link, Check your email and click on the link to verify your email");
      				this.props.history.push('/');
					closeBideModel()

					return "Registration successfully! We sent activation link, Check your email and click on the link to verify your email"

      		}else if (result.data.message==="Request failed with status code 500") {
      			// alert("Something went wrong!")
				toast.error("Something went wrong!");
				return result.data
      		}
			
		}).catch((error)=>{
			// toast.error("Something went wrong!");
			console.log(error)
		})
	}

	render(){

		return (
				<>
					<UserRegisterComponent
					{...this.props}
					 UserSignUp = {this.UserSignUp.bind(this)}
					 />
			        <ToastContainer />


				</>
			)
	}
}

export default  withRouter (connect(mapStateToProps,mapDispatchToProps)(UserRegister));