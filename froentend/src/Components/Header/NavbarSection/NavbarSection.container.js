import {Component} from 'react'
import NavbareSectionComponent from './NavbarSection.component';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
  useHistory
} from "react-router-dom";
import {Logout} from '../../../store/User/user.action.js'
import {addToCart,updateLogoutCart} from '../../../store/addToCart/addToCart.action.js'
import io from 'socket.io-client'
import axios from 'axios'
const socket = io('http://localhost:7000')

const mapStateToProps = state => ({
    isLogin:state.UserDetailsReducer.isLogin
})
const mapDispatchToProps = dispatch => ({
	Logout:()=>dispatch(Logout()),
	updateLogoutCart:()=>dispatch(updateLogoutCart())
})

class NavbarSection extends Component{
state = {
		redirect: false,
		user_information: {},
		isopen: false
	};
	logOut(){
		const{Logout,isLogin,updateLogoutCart} = this.props
		var cart = {}
		updateLogoutCart()
		Logout()
			this.props.history.push('/'); 

		socket.on('connect',()=>{
			    socket.emit('user_connected','')
			})
		
	}


	myAccount(){
       this.props.history.push('/my-account');
    }
	handleClickOpen(){ 
	    this.setState({isopen:true})
	} 
	 LoginModelOpen(data){
		 this.setState({isopen:true,popupStatus:'loginModel'})
	} 
	SignUpModelOpen(data){
		 this.setState({isopen:true,popupStatus:'signUpModel'})
	} 
	closeBideModel(){
		this.setState({
			isopen:false
		})
	}
	getUserInfo (){
    var token= localStorage.getItem('token');
    var userInfo= axios.get(`/get_user_info/${token}`).then((res)=>{
   	 this.setState({user_information:res.data})	
    return res.data
    }).catch((error)=>{
        return error
    })
   }
componentDidMount(){
	this.getUserInfo()
}


	render(){
		const {
			isLogin,
			myAccount,
			handleClickOpen,
			isopen,
			user_information
		} = this.props
		// console.log(this.props)
		return (
				<>
					<NavbareSectionComponent
					{...this.state}
					{...this.props}
					logOut = {this.logOut.bind(this)}
					myAccount = {this.myAccount.bind(this)}
					handleClickOpen = {this.handleClickOpen.bind(this)}
					LoginModelOpen = {this.LoginModelOpen.bind(this)}
					SignUpModelOpen = {this.SignUpModelOpen.bind(this)}
					closeBideModel = {this.closeBideModel.bind(this)}
					/>
				</>
			)
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavbarSection));