import {Component} from  'react'
import CartComponent from './CartHeader.component'
import {connect} from 'react-redux'
import axios from 'axios'

const mapStateToProps = state => ({
    data:state.cardItems
})
const mapDispatchToProps = dispatch => ({
})

 
class CartHeader extends Component {

    async getCartData (){
        const token = localStorage.getItem('token');
        var carts=await axios.get(`http://localhost:4000/get_cart_data/${token}`)
        .then((res)=>{
            return res.data
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
    	
		// console.log( this.props)
        return(
            <CartComponent 
            {...this.state}
			{...this.props}
            />
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartHeader);