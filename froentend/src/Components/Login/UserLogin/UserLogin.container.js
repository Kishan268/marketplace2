import {PureComponent} from 'react'
import LoginComponent from './UserLogin.component.js';
// import axios from 'axios';
import {connect} from 'react-redux';
import { Redirect,withRouter } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import {saveToken} from '../../../store/User/user.action.js'
import {updateCart,fetchCart} from '../../../store/addToCart/addToCart.action.js'
import axios from '../../../Utils/axios.config.js'
import LoginContainer from '../Login.container.js'
import io from 'socket.io-client'

const socket = io('http://localhost:7000')

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    saveToken: state => dispatch(saveToken(state)),
    updateCart: (token) => dispatch(fetchCart(token))
})

class UserLogin extends PureComponent{

	constructor(props){
	    super(props);
	    this.state = {
			redirect: false,
			user_id: '',
			isopen : false
		};
	}

    handleClickOpen(){ 
        this.setState({isopen:true})
    } 

	UserLogin(value){
		const{saveToken,handleClickOpen,updateCart,closeBideModel} = this.props

		axios.post('/login/',value).then((result)=>{

		if (result.data.token ) {
			socket.on('connect',()=>{
	    		socket.emit('user_connected',result.data.user.id)
			})
			saveToken(result.data.token)
			this.setState({isopen:false})
			const tokenStore = localStorage.setItem('token',result.data.token);
			updateCart(result.data.token)
			toast("Login successfully!");
			this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
			this.setState({user_id:result.data.user.id});
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
					/>
					<ToastContainer />
				</>
			)
	}
}

export default withRouter (connect(mapStateToProps,mapDispatchToProps)(UserLogin));