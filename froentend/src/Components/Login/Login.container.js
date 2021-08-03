import {Component} from 'react'
import LoginComponent from './Login.component';
import axios from 'axios';
import {connect} from 'react-redux';
import { Redirect,withRouter } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import {saveToken} from '../../store/User/user.action.js'
import {updateCart,fetchCart} from '../../store/addToCart/addToCart.action.js'

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    saveToken: state => dispatch(saveToken(state)),
    updateCart: (token) => dispatch(fetchCart(token))
})

class Login extends Component{

	state = {
		redirect: false,
		isopen : false
	};

    handleClickOpen(){ 
        this.setState({isopen:true})
    } 

	UserLogin(event){
		const{saveToken,handleClickOpen,updateCart} = this.props

		event.preventDefault()
		var data= {
			email:event.target.email.value,
			password:event.target.password.value,
		}
				
		axios.post('http://localhost:4000/login/',data).then((result)=>{
			toast("Login successfully!");
			saveToken(result.data.token)
			this.setState({isopen:false})
			const tokenStore = localStorage.setItem('token',result.data.token);
			updateCart(result.data.token)

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
		return (
				<>
					<LoginComponent
						{...this.props}
						{...this.state}
						UserLogin = {this.UserLogin.bind(this)}
						handleClickOpen = {this.handleClickOpen.bind(this)}
					/>
				</>
			)
	}
}

export default withRouter (connect(mapStateToProps,mapDispatchToProps)(Login));