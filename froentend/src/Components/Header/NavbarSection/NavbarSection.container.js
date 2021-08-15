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
		isopen: false
	};
	logOut(){
		const{Logout,isLogin,updateLogoutCart} = this.props
		var cart = {}
		updateLogoutCart()
		Logout()
			this.props.history.push('/'); 
		
		
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


	render(){
		const {isLogin,myAccount,handleClickOpen,isopen} = this.props
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