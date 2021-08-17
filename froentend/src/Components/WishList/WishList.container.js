import {Component} from  'react'
import WishListComponent from './WishList.component.js'
// import axios from 'axios'
import {addToCart} from '../../store/addToCart/addToCart.action.js'
import { ToastContainer, toast } from 'react-toastify';
import axios from '../../Utils/axios.config.js'


const mapStateToProps=state=>({
    productDetails:state.product.productDetails
})
const mapDispatchToProps=dispatch=>({
   addToCartHandler:data=>dispatch(addToCart(data))

})
class WishList extends Component {
	state={
		wish_list:[]
	}

	async geWishList(){
		 const token = localStorage.getItem('token');
		 var data = {
		 	token:token
		 }
         var result= axios.post('/get_wishlist/',data).then((res)=>{
         	console.log(res.data)
			 this.setState({wish_list:res.data})		
			return res.data
		}).catch((error)=>{
			console.log(error)
		});

	}
    addToCartHandler(data){
		const{addToCartHandler,placeBidClickOpen,handleClickOpen,popupStatus} = this.props
		const{UserLogin} = this.props
		data.token = localStorage.getItem('token');

		axios.post('http://localhost:4000/cart_data',data)
        .then((res)=>{
        	if(typeof res.data.data === 'string'){
				toast.warning(res.data.data);
        	}
        	else{
				addToCartHandler(res.data.data)
				toast("Item added successfully!");
        	}
		 	
		}).catch((error)=>{
			toast.error("Item not added in cart!");
			console.log(error)
		})
		
	}
	deleteWishlistItem(wishListId){
        const{deleteWishlistItem,fetchCart} = this.props
        var token = localStorage.getItem('token')

        axios.post('http://localhost:4000/delete_wishlist_item/',{wishListId:wishListId,token:token}).then((result)=>{
				toast("Item deleted successfully WishList!");
				this.geWishList()
				return result.data
        }).catch((error)=>{
            return error
        })
    }
    componentDidMount() {
     	this.geWishList()
  	}

    render(){
    		const {wish_list} = this.props;
    		// console.log(this.props)
            return(
               <>
               	<WishListComponent 
               	{...this.props}
               	{...this.state}
				addToCartHandler = {this.addToCartHandler.bind(this)}
				deleteWishlistItem = {this.deleteWishlistItem.bind(this)}

               	/>
					<ToastContainer />

               </>

                	
            )
    }
}

export default WishList;