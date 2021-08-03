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

	logOut(){
		const{Logout,isLogin,updateLogoutCart} = this.props
		var cart = {}
		updateLogoutCart()
		Logout()
		
	}

	componentWillReceiveProps(nextProps){
		const {isLogin} = nextProps
		// if(!isLogin){
		// 	this.props.history.push('/'); 
		// }
	}
	
	render(){
		const {isLogin} = this.props
		// console.log(this.props)
		return (
				<>
					<NavbareSectionComponent
					{...this.state}
					{...this.props}
					logOut = {this.logOut.bind(this)}
					/>
				</>
			)
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavbarSection));