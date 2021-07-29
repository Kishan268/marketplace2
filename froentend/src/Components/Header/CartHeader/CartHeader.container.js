import {Component} from  'react'
import CartComponent from './CartHeader.component'
import {connect} from 'react-redux'
import axios from 'axios'
import {addToCart} from "../../../store/addToCart/addToCart.action.js"


const mapStateToProps = state => ({
    cardData:state.cardItems.cardData
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})
 
class CartHeader extends Component {

    async getCartData (){
        const {addToCartHandler} = this.props
        const token = localStorage.getItem('token');
        var carts=await axios.get(`http://localhost:4000/get_cart_data/${token}`)
        .then((res)=>{
             addToCartHandler(res.data.data)
        })
        .catch((error)=>{
            return error
        })
    }
    
	componentDidMount(){
        this.getCartData()
		// const{cartData} = this.props
	}
   
    render(){
		// const{cartData} = this.props
    	
		console.log( this.props)
        return(
            <CartComponent 
            {...this.state}
			{...this.props}
            />
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartHeader);