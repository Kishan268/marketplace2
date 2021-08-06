import {Component} from 'react'
import ProductDetailsComponent from './ProductDetails.component.js';
import {connect} from 'react-redux'
import { Redirect,withRouter } from 'react-router-dom';
import  axios from 'axios';
import {addToCart} from '../../../store/addToCart/addToCart.action.js'


const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

class ProductDetails extends Component{

	state={
		products:[],
		productsImg:[],
		userDetails:{},
		isLoading:true
	}

	async getProduct(){
		var id = this.props.match.params.id

		const result = await axios.get(`http://localhost:4000/product_details/${id}`).then((res)=>{
			var data = res.data
			// delete res.data.pro_images
			// delete res.data.user_details

			this.setState({
						products: res.data,
						productsImg:data.pro_images,
						userDetails:res.data.user_details,
						isLoading:false
					})
			return res.data
		}).catch((error)=>{
			console.log(error)
		});

		// console.log(result)
	}

	addToCartHandler(){
		alert('sdsd')
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
					/>

				</>
			)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);