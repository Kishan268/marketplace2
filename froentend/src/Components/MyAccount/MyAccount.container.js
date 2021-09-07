import {Component} from 'react'
import MyAccountComponent from './MyAccount.component';
import axios from 'axios';
import NavbarComponet from '../Header/NavbarSection/NavbarSection.container.js'
import {Redirect,useHistory,withRouter} from 'react-router-dom';
import {Logout} from '../../store/User/user.action.js'
import {addToCart,updateLogoutCart} from '../../store/addToCart/addToCart.action.js'
import {connect} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';



const mapStateToProps = state => ({
    isLogin:state.UserDetailsReducer.isLogin
})
const mapDispatchToProps = dispatch => ({
	Logout:()=>dispatch(Logout()),
	updateLogoutCart:()=>dispatch(updateLogoutCart())
})
class MyAccount extends Component{
	
	state = {
		userInfo:{},
		value:''
	}

	async getUserInfo(){
		var token = localStorage.getItem('token');
		var result = await axios.get(`/get_user_info/${token}`).then((res)=>{
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
    getShippingAddress(){
        const {userInfo} = this.state
        var user_id =userInfo
        var token= localStorage.getItem('token');
        var result = axios.post(`/get_shipping_address/`,{token:token,user_id:44}).then((res)=>{
       this.setState({get_shipping_address:res.data})       
      }).catch((error)=>{
          return error
      })
    }
    updateProfile(values){
    	var token = localStorage.getItem('token')
        var data={
        	token:token,
        	values:values
        }
        var token= localStorage.getItem('token');
        var result = axios.post(`/profile_update/`,data).then((res)=>{
       this.setState({get_shipping_address:res.data})       
      }).catch((error)=>{
          return error
      })
    }
    deleteAddress(data){
    	var token = localStorage.getItem('token')
        var datas={
        	token:token,
        	address_id:data.id
        }
        var token= localStorage.getItem('token');
        var result = axios.post(`/delete_address/`,datas).then((res)=>{
        	this.getShippingAddress()
			toast(res.data.data);
        	return res.data
      }).catch((error)=>{
          return error
      })
    }
    AddShippingAddress(){
    	this.setState({isopen:true})
    }
   
	closeBideModel(){
		this.setState({
			isopen:false
		})
		this.getShippingAddress()
	}
	componentWillMount(){
		this.getUserInfo()
		this.getShippingAddress()
	}
	render(){
		const{userInfo,Logout,get_shipping_address} = this.state;

		return (
				<>
					<MyAccountComponent
					{...this.props}
					{...this.state}
					Logout = {this.Logout.bind(this)}
					updateProfile = {this.updateProfile.bind(this)}
					AddShippingAddress = {this.AddShippingAddress.bind(this)}
					deleteAddress = {this.deleteAddress.bind(this)}
					closeBideModel = {this.closeBideModel.bind(this)}

					/>
					<ToastContainer />
					
				</>
			)
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MyAccount))