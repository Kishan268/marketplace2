import {Component} from  'react'
import CheckoutComponent from './Checkout.component'
import {connect} from 'react-redux'
import { Redirect,withRouter } from 'react-router-dom';
import {updateCart,fetchCart} from '../../store/addToCart/addToCart.action.js'
import { ToastContainer, toast } from 'react-toastify';
import axios from '../../Utils/axios.config.js'

const mapStateToProps = state => ({
    cardData:state.cardItems.cardData
})
const mapDispatchToProps = dispatch => ({
    fetchCart:(token)=>dispatch(fetchCart(token))
})

class Checkout extends Component {
    state = {
        isopen : false,
        user_information : '',
        orderDetails:{},
        get_shipping_address:{}
    };
    async getUserInfo (){
        var token= localStorage.getItem('token');
        var userInfo=await axios.get(`/get_user_info/${token}`).then((res)=>{
       this.setState({user_information:res.data})		
      }).catch((error)=>{
          return error
      })
    }
    
    checkOut(event,cartId){
        const{fetchCart} = this.props
        event.preventDefault()
        var address = event.target.address.value
        var token = localStorage.getItem('token')
        var checkOut = {address:address ,cart_id:cartId,token:token}
        axios.post('/createOrder/',checkOut).then((res)=>{
            // fetchCart(token)
            this.setState({isopen:true,orderDetails:res})

        }).catch((error)=>{
         return error
        })
    }

    continueShoping(){
        // this.props.history.push('/')
        window.location.href = '/'
    }
    billingAddress(values){
        const{handleClickOpen,closeBideModel,getCartData} = this.props
        const token = localStorage.getItem('token');
        var data= {
            address_id:values.address_id,
            type_of_shiping:values.type_of_shiping,
            token:token,
        }
        var result= axios.post('/createOrder/',data).then((res)=>{
            closeBideModel()
            getCartData()
            toast(res.data.data);
            // this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
            return res.data
        }).catch((error)=>{
            toast.error(error);
            console.log(error)
        });         
                
    }
    addressModelOpen(){
        this.setState({isopen:true,popupStatus:"address"})
    }

    getShippingAddress(){
        const {cardData} = this.props
        const {user_id} =cardData
        var token= localStorage.getItem('token');
        var result = axios.post(`/get_shipping_address/`,{token:token}).then((res)=>{
       this.setState({get_shipping_address:res.data})       
      }).catch((error)=>{
          return error
      })
    }
    async componentWillMount(){
        const{fetchCart} = this.props
        var token = localStorage.getItem('token')
        fetchCart(token)
        this.getUserInfo();
        this.getShippingAddress();
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

    render(){
		const{cardData,user_information,popupStatus,get_shipping_address} = this.props
        return(
           <>
            <CheckoutComponent 
            {...this.state}
            {...this.props}
             checkOut={this.checkOut.bind(this)}
             continueShoping={this.continueShoping.bind(this)}
             billingAddress={this.billingAddress.bind(this)}
             addressModelOpen={this.addressModelOpen.bind(this)}
             closeBideModel={this.closeBideModel.bind(this)}
             getShippingAddress={this.getShippingAddress.bind(this)}
             deleteAddress={this.deleteAddress.bind(this)}

            />
            <ToastContainer />
           </>
        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Checkout));