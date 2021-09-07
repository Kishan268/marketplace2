import {Component} from 'react'
import ProductDetailsComponent from './ProductDetails.component.js';
import './ProductDetails.css'

import {connect} from 'react-redux'
import { Redirect,withRouter } from 'react-router-dom';

import {addProduct} from '../../../store/product/product.action'
import {addToCart} from '../../../store/addToCart/addToCart.action.js'
import { ToastContainer, toast } from 'react-toastify';
import Popup from '../../Popup/Popup.container.js'

import LoginComponent from '../../Login/Login.container.js';
import axios from '../../../Utils/axios.config.js'


const mapStateToProps=state=>({
    productDetails:state.product.productDetails
})
const mapDispatchToProps=dispatch=>({
    addProduct: productDetails=>dispatch(addProduct(productDetails)),
        addToCartHandler:data=>dispatch(addToCart(data))


})

class ProductDetails extends Component{

	state={
		products:[],
		productsImg:[],
		userDetails:{},
		isLoading:true,
		isRemove:false,
		redirect: false,
		isopen : false,
		showError:'',
		popupStatus:'',
		user_information:{},
	}
		
    handleClickOpenBuyNow(data){
		 if (localStorage.getItem('token')) {
		 this.setState({isopen:true,popupStatus:true})
    	}else{
      		this.LoginModelOpen()
    	}
    } 
    placeBidClickOpen(data){
		if (localStorage.getItem('token')) {
		 this.setState({isopen:true,popupStatus:false})
    	}else{
      		this.LoginModelOpen()
    	}
    } 

    LoginModelOpen(data){
		 this.setState({isopen:true,popupStatus:"login_form"})
    } 
    ChatWithSeller(data){
		 this.setState({isopen:true,popupStatus:"chat_with_seller"})
    } 

	async getProduct(){
		var id = this.props.match.params.id
		const{addProduct} = this.props

		const result = await axios.get(`/product_details/${id}`).then((res)=>{
			var data = res.data
			var products = {...res.data,buyQty:1}
			this.setState({
						products,
						productsImg:data.pro_images,
						userDetails:res.data.user_details,
						isLoading:false
					})
			delete res.data.pro_images
			delete res.data.user_details
			
			return res.data
		}).catch((error)=>{
			console.log(error)
		});
	}

	addToCartHandler(data){
		const{addToCartHandler,placeBidClickOpen,handleClickOpenBuyNow,popupStatus} = this.props
		const{UserLogin} = this.props

		// console.log(data);
		if (localStorage.getItem('token')) {
			data.token = localStorage.getItem('token');

			axios.post('/cart_data',data)
            .then((res)=>{
            	if(typeof res.data.data === 'string'){
					toast.warning(res.data.data);
            	}
            	else{
            		console.log(res.data)
					 addToCartHandler(res.data.data)
					toast("Item added successfully!");
            	}
			 	
			}).catch((error)=>{
				toast.error("Item not added in cart!");
				console.log(error)
			})
			
		}else{
      		// this.props.history.push('/login');
      		this.LoginModelOpen()
      		// alert()
		}
	}

	async addAndRemoveProduct(type,qty){
		var {products,isRemove,showError} = this.state
		if(type ==='plus'){
			products.buyQty = products.buyQty + qty
			isRemove = true
			showError = ''
			if(products.qty < products.buyQty){
				showError = `Total quantity is ${products.qty}, therefore you can not add the quantity... `
			}
			
		}
		else{
			products.buyQty = products.buyQty - qty
			showError=''
			if(products.buyQty === 1){
				isRemove= false
				showError ="There should be minimun 1 quantity..."
			}
			
		}

		await this.setState({products,isRemove,showError});
	}
	async getUserInfo (){
        var token= localStorage.getItem('token');
        var userInfo=await axios.get(`/get_user_info/${token}`).then((res)=>{
        return res.data
      }).catch((error)=>{
          return error
      })
       	await this.setState({user_information:userInfo})	
    }

	closeBideModel(){
		this.setState({
			isopen:false
		})
	}
	componentWillMount(){
		this.getProduct()
	}
	componentDidMount(){
		this.getUserInfo()

	}

	render(){
		const {isLoading,productData,isopen,LoginModelOpen,ChatWithSeller} = this.state
		// console.log(this.state)
		if(isLoading){
			return (
					<div>Loading</div>
				)
		}
		return (
				<>
					<ProductDetailsComponent
						{...this.props}
						{...this.state}
						addToCartHandler = {this.addToCartHandler.bind(this)}
						addAndRemoveProduct = {this.addAndRemoveProduct.bind(this)}
						handleClickOpenBuyNow = {this.handleClickOpenBuyNow.bind(this)}
						placeBidClickOpen = {this.placeBidClickOpen.bind(this)}
						closeBideModel = {this.closeBideModel.bind(this)}
						LoginModelOpen = {this.LoginModelOpen.bind(this)}
						ChatWithSeller = {this.ChatWithSeller.bind(this)}
					/>
					  
				</>
			)
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProductDetails));