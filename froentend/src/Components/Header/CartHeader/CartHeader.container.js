import {Component} from  'react'
import CartComponent from './CartHeader.component'
import {connect} from 'react-redux'
import axios from 'axios'
import {addToCart,fetchCart} from "../../../store/addToCart/addToCart.action.js"


const mapStateToProps = state => ({
    cardData:state.cardItems.cardData,
    isLogin:state.UserDetailsReducer.isLogin,
    randomNumber:state.cardItems.randomNumber,
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    fetchCart:(token)=>dispatch(fetchCart(token))
})
 
class CartHeader extends Component {

	componentDidMount(){
        const {fetchCart} = this.props
        var token = localStorage.getItem('token')
        fetchCart(token)
	}
   
    render(){
        const{randomNumber} = this.props
        if(randomNumber >=0){    	
            return(
                <CartComponent 
                {...this.state}
    			{...this.props}
                />
            )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartHeader);