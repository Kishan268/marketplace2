import {Component} from 'react'
import LoginComponent from './UserLogin.component.js';
// import axios from 'axios';
import {connect} from 'react-redux';
import { Redirect,withRouter } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import {saveToken} from '../../../store/User/user.action.js'
import {updateCart,fetchCart} from '../../../store/addToCart/addToCart.action.js'
import axios from '../../../Utils/axios.config.js'

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    saveToken: state => dispatch(saveToken(state)),
    updateCart: (token) => dispatch(fetchCart(token))
})

class UserLogin extends Component{

	state = {
		redirect: false,
		isopen : false
	};

    handleClickOpen(){ 
        this.setState({isopen:true})
    } 

	UserLogin1(values){
		const{saveToken,handleClickOpen,updateCart,closeBideModel} = this.props
			
		axios.post('/login/',values).then((result)=>{

		if (result.data.token ) {
			saveToken(result.data.token)
			this.setState({isopen:false})
			const tokenStore = localStorage.setItem('token',result.data.token);
			updateCart(result.data.token)
			toast("Login successfully!");
			this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
			closeBideModel()
			// this.props.history.push('/');
		}else if(result.data.message == 'Request failed with status code 404'){
			toast.error("Email and Password not match!");
		}else{
			toast(result.data);
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
						UserLogin1 = {this.UserLogin1.bind(this)}
						handleClickOpen = {this.handleClickOpen.bind(this)}
					/>
					<ToastContainer />
				</>
			)
	}
}

export default withRouter (connect(mapStateToProps,mapDispatchToProps)(UserLogin));