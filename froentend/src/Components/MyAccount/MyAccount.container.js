import {Component} from 'react'
import MyAccountComponent from './MyAccount.component';
import axios from 'axios';
import NavbarComponet from '../Header/NavbarSection/NavbarSection.container.js'
class MyAccount extends Component{
	
	state = {
		userInfo:[]
	}
	async getUserInfo(){
		var token = localStorage.getItem('token');
		var userInfo = await axios.get(`http://localhost:8000/api/get_user_info/${token}`).then((res)=>{
			return res.data
		}).catch((error)=>{
			console.log(error)
		})
		await this.setState({userInfo})		
	}
	componentDidMount(){
		this.getUserInfo()
	}
	render(){
		const{userInfo} = this.state;
		return (
				<>
					<MyAccountComponent
					{...this.props}
					{...this.state}
					/>
					{/* {<NavbarComponet
					{...this.state}
					/>} */}
				</>
			)
	}
}

export default MyAccount;