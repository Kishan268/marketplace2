import {Component} from  'react'
import BuyNowComponent from './BuyNow.component.js'
import {connect} from 'react-redux'
import { Redirect,withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from '../../Utils/axios.config.js'
class BuyNow extends Component {
	
	state={
		user_information:'',
		get_shipping_address:'',
		redirect: false,
		isopen : false
	}
	

	getUserInformation(){
		 const token = localStorage.getItem('token');
         var result= axios.get(`/get_user_info/${token}`).then((res)=>{
         	this.setState({user_information:res.data})
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
  	billingAddress(values){
		const{handleClickOpen,closeBideModel,products} = this.props
		 const token = localStorage.getItem('token');
		var data= {
          address_id:values.address_id,
          type_of_shiping:values.type_of_shiping,
          product_id:products.pro_id,
          order_type:'buy_now',
          token:token,
      }
		var result= axios.post('/createOrder/',data).then((res)=>{
			toast(res.data.data);
			closeBideModel()
			this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
			return res.data
		}).catch((error)=>{
			toast.error(error);
			console.log(error)
		});
				
	}
	getShippingAddress(){
     	const {cardData} = this.props
     	var token= localStorage.getItem('token');
     	var result = axios.post(`/get_shipping_address/`,{token:token}).then((res)=>{
       this.setState({get_shipping_address:res.data}) 
       return res.data    
      }).catch((error)=>{
          return error
      })
   }	
   closeBideModel(){
        this.setState({
            isopen:false
        })
        this.getShippingAddress()
        
    }
    deleteAddress(id){
        var token = localStorage.getItem('token')
        var datas={
            token:token,
            address_id:id
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
     async componentDidMount(){
        this.getShippingAddress();
    }
    addressModelOpen(){
        this.setState({isopen:true,popupStatus:"address"})
    }
    render(){
    		const {isopen,user_information,get_shipping_address} = this.props;
            return(
               <>
                <BuyNowComponent
                	{...this.props}
                	{...this.state}
						billingAddress = {this.billingAddress.bind(this)}
						handleClickOpen = {this.handleClickOpen.bind(this)}
						closeBideModel={this.closeBideModel.bind(this)}
		            getShippingAddress={this.getShippingAddress.bind(this)}
		            deleteAddress={this.deleteAddress.bind(this)}
		            addressModelOpen={this.addressModelOpen.bind(this)}
                 />
					<ToastContainer />
               </>
         )
    }
}

export default BuyNow;