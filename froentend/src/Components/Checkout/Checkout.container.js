import {Component} from  'react'
import CheckoutComponent from './Checkout.component'
import {connect} from 'react-redux'
import axios from 'axios'
import { Redirect,withRouter } from 'react-router-dom';
import {updateCart,fetchCart} from '../../store/addToCart/addToCart.action.js'
import { ToastContainer, toast } from 'react-toastify';

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
        orderDetails:{}
    };
    async getUserInfo (){
        var token= localStorage.getItem('token');
        var userInfo=await axios.get(`http://localhost:4000/get_user_info/${token}`).then((res)=>{
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
        axios.post('http://localhost:4000/createOrder/',checkOut).then((res)=>{
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
    billingAddress(event){
        const{handleClickOpen,closeBideModel,getCartData} = this.props
        event.preventDefault()
        
         const token = localStorage.getItem('token');
        if (event.target.address_type.value =="default_address") {
            var data= {
                quantity:event.target.quantity.value,
                address_type:event.target.address_type.value,
                type_of_shiping:event.target.type_of_shiping.value,
                cart_id:event.target.cart_id.value,
                token:token,
            
            }
        }else{
            var data= {
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
                cart_id:event.target.cart_id.value,
                token:token,
            
            }
            
        }
        var result= axios.post('http://localhost:4000/createOrder/',data).then((res)=>{
            toast(res.data.data);
            this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
            // closeBideModel()
            getCartData()
            return res.data
        }).catch((error)=>{
            toast.error(error);

            console.log(error)
        });         
                
    }

    async componentWillMount(){
        const{fetchCart} = this.props
        var token = localStorage.getItem('token')
        fetchCart(token)
        this.getUserInfo();
    }

    render(){
		const{cartData,user_information} = this.props
        return(
           <>
            <CheckoutComponent 
            {...this.state}
            {...this.props}
             checkOut={this.checkOut.bind(this)}
             continueShoping={this.continueShoping.bind(this)}
             billingAddress={this.billingAddress.bind(this)}
            />
            <ToastContainer />
           </>
        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Checkout));