import {Component} from 'react'
import MyAccountComponent from './MyAccount.component';
import axios from 'axios';
import NavbarComponet from '../Header/NavbarSection/NavbarSection.container.js'
import {Redirect,useHistory,withRouter} from 'react-router-dom';
import {Logout} from '../../store/User/user.action.js'
import {addToCart,updateLogoutCart} from '../../store/addToCart/addToCart.action.js'
import {connect} from 'react-redux'


const mapStateToProps = state => ({
    isLogin:state.UserDetailsReducer.isLogin
})
const mapDispatchToProps = dispatch => ({
	Logout:()=>dispatch(Logout()),
	updateLogoutCart:()=>dispatch(updateLogoutCart())
})
class MyAccount extends Component{
	
	state = {
		userInfo:{}
	}
	async getUserInfo(){
		var token = localStorage.getItem('token');
		var result = await axios.get(`http://localhost:4000/get_user_info/${token}`).then((res)=>{
		 this.setState({userInfo:res.data})		
			return res.data
		}).catch((error)=>{
			console.log(error)
		})
	}
	Logout(){
       const{Logout,isLogin,updateLogoutCart} = this.props
		var cart = {}
		updateLogoutCart()
		Logout() 
       this.props.history.push('/');

        
     }
	componentDidMount(){
		this.getUserInfo()
	}
	render(){
		const{userInfo,Logout} = this.state;
		return (
				<>
					<MyAccountComponent
					{...this.props}
					{...this.state}
					Logout = {this.Logout.bind(this)}

					/>
					{/* {<NavbarComponet
					{...this.state}
					/>} */}
				</>
			)
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MyAccount))