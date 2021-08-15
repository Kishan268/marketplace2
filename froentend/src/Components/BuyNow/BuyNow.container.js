import {Component} from  'react'
import BuyNowComponent from './BuyNow.component.js'
import {connect} from 'react-redux'
import axios from 'axios'
import { Redirect,withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

class BuyNow extends Component {
	
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
    
  	 componentDidMount() {
     	this.getUserInformation()
  	}
  	 handleClickOpen(){ 
        this.setState({isopen:true})
    } 
  	billingAddress(event){
		const{handleClickOpen,closeBideModel} = this.props

		event.preventDefault()
		 const token = localStorage.getItem('token');
		alert(event.target.address_type.value)
		if (event.target.address_type.value =="default_address") {
			var data= {
				user_id:event.target.user_id.value,
				product_id:event.target.product_id.value,
				quantity:event.target.quantity.value,
				address_type:'default_address',
				type_of_shiping:event.target.type_of_shiping.value,
				order_type:event.target.order_type.value,
				token:token,
			
			}
		}else{
			var data= {
				user_id:event.target.user_id.value,
				product_id:event.target.product_id.value,
				quantity:event.target.quantity.value,
				f_name:event.target.f_name.value,
				l_name:event.target.l_name.value,
				country:event.target.country.value,
				city:event.target.city.value,
				state:event.target.state.value,
				zip_code:event.target.zip_code.value,
				email:event.target.email.value,
				phone_no:event.target.phone_no.value,
				alternative_phone_no:event.target.alternative_phone_no.value,
				notes:event.target.notes.value,
				address_type:'custome_address',
				type_of_shiping:event.target.type_of_shiping.value,
				order_type:event.target.order_type.value,
				token:token,
			
			}
			
		}
		// var result= axios.post('http://localhost:4000/createOrder/',data).then((res)=>{

		// 	toast(res.data.data);
		// 	closeBideModel()
		// 	this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
		// 	return res.data
		// }).catch((error)=>{
		// 	toast.error(error);

		// 	console.log(error)
		// });			
				
	}
    render(){
    		const {isopen,user_information} = this.props;
            return(
               <>
                <BuyNowComponent
                	{...this.props}
                	{...this.state}
						billingAddress = {this.billingAddress.bind(this)}
						handleClickOpen = {this.handleClickOpen.bind(this)}
                 />
					<ToastContainer />
               </>

                	
            )
    }
}

export default BuyNow;