import {PureComponent} from 'react'
import LoginComponent from './Login.component';

import {connect} from 'react-redux';
import { Redirect,withRouter } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import {saveToken} from '../../store/User/user.action.js'
import {updateCart,fetchCart} from '../../store/addToCart/addToCart.action.js'
import axios from '../../Utils/axios.config.js'
import io from 'socket.io-client'

const socket = io('http://localhost:4000')

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    saveToken: state => dispatch(saveToken(state)),
    updateCart: (token) => dispatch(fetchCart(token))
})

class Login extends PureComponent{

	state = {
		redirect: false,
		user_id: '',
		isopen : false
	};

    handleClickOpen(){ 
        this.setState({isopen:true})
    }  
    SingUpOpen(){ 
        this.setState({isopen:true,popupStatus:"sing_up_open"})
    } 

	UserLogin(value){
		const{saveToken,handleClickOpen,updateCart,closeBideModel,popupStatus} = this.props

		axios.post('/login/',value).then((result)=>{

		if (result.data.token ) {
			socket.on('connect',()=>{
	    		socket.emit('user_connected',result.data.user.id)
			})
			this.setState({user_id:result.data.user.id});
			// console.log(result.data.user.id)
			saveToken(result.data.token)
			this.setState({isopen:false})
			const tokenStore = localStorage.setItem('token',result.data.token);
			updateCart(result.data.token)
			toast("Login successfully!");
			this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
			closeBideModel()
			this.props.history.push('/');
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
	closeBideModel(){
		this.setState({
			isopen:false
		})
	}
	componentDidMount(){
   		const {user_id} = this.state
		socket.on('connect',()=>{
	    	socket.emit('user_connected',user_id)
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
						SingUpOpen = {this.SingUpOpen.bind(this)}
						closeBideModel = {this.closeBideModel.bind(this)}
					/>
					<ToastContainer />
				</>
			)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);