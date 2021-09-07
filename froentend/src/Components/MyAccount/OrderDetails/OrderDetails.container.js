import {Component} from 'react'
import OrderDetailsComponent from './OrderDetails.component.js'
import axios from 'axios'
class OrderDetails extends Component{
	state = {
		userInfo:{},
		order_details:{}
	}
	
orderDetails(){
	var id = this.props.match.params.id	
	var token = localStorage.getItem('token');
	var data={
		id:id,
		token:token
	}
	var result =  axios.post('/get_order_details/',data).then((res)=>{
	 this.setState({order_details:res.data})		
		return res.data
	}).catch((error)=>{
		console.log(error);
	})
}

	componentDidMount(){
		this.orderDetails();
	}
	
	render(){
		const{order_details} = this.state;

		return (
				<>
					<OrderDetailsComponent
					{...this.props}
					{...this.state}
					
					/>
					
				</>
			)
	}
}

export default OrderDetails