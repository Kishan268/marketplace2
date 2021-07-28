import {Component} from  'react'
import CartComponent from './Cart.component'
import {connect} from 'react-redux'
import axios from 'axios'
import {updateCart} from '../../store/addToCart/addToCart.action.js'

const mapStateToProps = state => ({
    data:state.cardItems
})
const mapDispatchToProps = dispatch => ({
    updateCart:cartValue=>dispatch(updateCart(cartValue))
    
})

class Cart extends Component {
    
    async getCartData (){
        // const{updateCart} = this.props
        const token = localStorage.getItem('token');
        console.log(token)
        var carts=await axios.get(`http://localhost:4000/get_cart_data/${token}`)
        .then((res)=>{
            console.log(res.data)
            // var cartValue
            // updateCart(res.data)
            return res.data
        })
        .catch((error)=>{
            return error
        })

    }

    async componentDidMount(){
		
        await this.getCartData();
	}
    render(){
        
		const{cartData} = this.props
        console.log(this.props)
        return(
            <CartComponent 
            {...this.state}
			{...this.props}
            />
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);