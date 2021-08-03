import {Component} from  'react'
import CheckoutComponent from './Checkout.component'
import {connect} from 'react-redux'
import axios from 'axios'
import { Redirect,withRouter } from 'react-router-dom';
import {updateCart,fetchCart} from '../../store/addToCart/addToCart.action.js'

const mapStateToProps = state => ({
    cardData:state.cardItems.cardData
})
const mapDispatchToProps = dispatch => ({
    fetchCart:(token)=>dispatch(fetchCart(token))
})

class Checkout extends Component {
    
    state = {
        isopen : false,
        orderDetails:{}
    };

	
    async getUserInfo (){
        var token= localStorage.getItem('token');
        var userInfo=await axios.get(`http://localhost:4000/getUserInfo/${token}`).then((res)=>{
        // console.log( res.data)
       this.setState(res.data)		

        return res.data
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

    async componentWillMount(){
        const{fetchCart} = this.props
        var token = localStorage.getItem('token')
        fetchCart(token)
        this.getUserInfo();
    }

    render(){
		const{cartData} = this.props
        return(
           <>
            <CheckoutComponent 
            {...this.state}
            {...this.props}
             checkOut={this.checkOut.bind(this)}
             continueShoping={this.continueShoping.bind(this)}
            />
           </>
        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Checkout));