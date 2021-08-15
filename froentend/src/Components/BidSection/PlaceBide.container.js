import {Component} from  'react'
import PlaceBidComponent from './PlaceBid.component.js'
import {connect} from 'react-redux'
import axios from 'axios'
import { Redirect,withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

class PlaceBid extends Component {
	
	state={
		user_information:'',
		redirect: false,
		isopen : false
	}
	

  
   	getUserInformation(){
		 const token = localStorage.getItem('token');
         var result= axios.get(`http://localhost:4000/get_user_info/${token}`).then((res)=>{
         	this.setState({
						user_information:res.data
					})

			return res.data
		}).catch((error)=>{
			console.log(error)
		});
	}
    
  	placeBidFrom(event){
		event.preventDefault()
		const {closeBideModel} = this.props

		 const token = localStorage.getItem('token');

  		var data= {
				user_id:event.target.user_id.value,
				product_id:event.target.product_id.value,
				your_bid_price:event.target.your_bid_price.value,
				shipping_option:event.target.shipping_option.value,
				payment_methode:event.target.payment_methode.value,
				reminder_email:event.target.reminder_email.value,
				token:token,
			}
			var result= axios.post('http://localhost:4000/place_bid/',data).then((res)=>{
			this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
			toast(res.data.data);
			closeBideModel()
			// this.setState({isopen:false})
			// return res.data
			}).catch((error)=>{
				toast.error(error);

				console.log(error)
			});	
  	}
  	componentWillMount(){
		this.getUserInformation()
	}
    render(){
    	
            return(
               <>
                <PlaceBidComponent
                	{...this.props}
                	{...this.state}
						placeBidFrom = {this.placeBidFrom.bind(this)}

                 />
					<ToastContainer />
               </>

                	
            )
    }
}

export default PlaceBid;