import {Component} from  'react'
import CartComponent from './Cart.component'
import {connect} from 'react-redux'
import axios from 'axios'
import { Redirect,withRouter } from 'react-router-dom';

import {
        fetchCart,
        updateCart,
        deleteCartItem
        } from '../../store/addToCart/addToCart.action.js'

const mapStateToProps = state => ({
    cardData:state.cardItems.cardData,
    isLoading:state.cardItems.isLoading,
    randomNumber:state.cardItems.randomNumber,
})
const mapDispatchToProps = dispatch => ({
    fetchCart:cartValue=>dispatch(fetchCart(cartValue)),
    deleteCartItem:itemId=>dispatch(deleteCartItem(itemId)),
    updateCart:({qty,itemId,price,discount})=>dispatch(updateCart({qty,itemId,price,discount}))
})

class Cart extends Component {

    async getCartData (){
        const{fetchCart} = this.props
        const token = localStorage.getItem('token');
        await fetchCart(token)
    }

    async updateCart(type,itemId,price,discount){
        const{updateCart,fetchCart} = this.props
        var itemId = itemId
        var price = price
        var discount = discount
        var qty = 1
        var token = localStorage.getItem('token')
        
        axios.post('http://localhost:4000/update_item/',{qty,itemId,type,token}).then((result)=>{

            if(type === 'plus'){
                qty = 1
                 fetchCart(token)
            }
            else{
                qty = 1
                 fetchCart(token)
            }
        }).catch((error)=>{

        })   
    }

    deleteCartItem(itemId){
        const{deleteCartItem,fetchCart} = this.props
        var token = localStorage.getItem('token')

        axios.post('http://localhost:4000/delete_item/',{itemId:itemId,token:token}).then((result)=>{
            fetchCart(token)
        }).catch((error)=>{
            return error
        })
    }

    async componentWillMount(){
        await this.getCartData();
	}

    render(){
        const{randomNumber} = this.props   
        if(randomNumber >= 0){
            return(
                <CartComponent 
                {...this.state}
    			{...this.props}
                updateCart = {this.updateCart.bind(this)}
                deleteCartItem = {this.deleteCartItem.bind(this)}                />
            )
        }    
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Cart));