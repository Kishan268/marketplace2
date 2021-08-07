import {Component} from 'react'
import ProductDetailsComponent from './ProductDetails.component.js';
import {connect} from 'react-redux'
import { Redirect,withRouter } from 'react-router-dom';
import  axios from 'axios';
import {addProduct} from '../../../store/product/product.action'


const mapStateToProps=state=>({
    productDetails:state.product.productDetails
})
const mapDispatchToProps=dispatch=>({
    addProduct: productDetails=>dispatch(addProduct(productDetails))
})

class ProductDetails extends Component{

	state={
		products:[],
		productsImg:[],
		userDetails:{},
		isLoading:true,
		isRemove:false,
		showError:''
	}

	async getProduct(){
		var id = this.props.match.params.id
		const{addProduct} = this.props

		const result = await axios.get(`http://localhost:4000/product_details/${id}`).then((res)=>{
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

	addToCartHandler(){
		alert('sdsd')
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

	componentWillMount(){
		this.getProduct()
	}

	render(){
		const {isLoading} = this.state
		if(isLoading){
			return (
					<div>dfddffdfdffdf</div>
				)
		}
		return (
				<>
					<ProductDetailsComponent
						{...this.props}
						{...this.state}
						addToCartHandler = {this.addToCartHandler.bind(this)}
						addAndRemoveProduct = {this.addAndRemoveProduct.bind(this)}
					/>

				</>
			)
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProductDetails));