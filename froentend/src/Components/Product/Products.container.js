import {Component} from 'react'
import ProductsComponent from './Products.component';
import {connect} from 'react-redux'
import axios from 'axios';
import {addToCart} from '../../store/addToCart/addToCart.action.js'
import {withRouter} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})


class ProductsContainer extends Component{

	state = {
		products:[]
	}

	async getProducts(){
		var products = await axios.get('http://localhost:4000/all_products')
		.then((res)=>{
		return res.data
		}).catch((error)=>{
			console.log(error)
		})
		await this.setState({products})		
	}
	
	addToCart(data){
		const{addToCartHandler,handleClickOpen} = this.props
		const{UserLogin} = this.props

		
		// console.log(data);
		if (localStorage.getItem('token')) {
			data.token = localStorage.getItem('token');

			addToCartHandler(data)
			axios.post('http://localhost:4000/cart_data',data)
            .then((res)=>{
				toast("Item added successfully!");
			 console.log(res.data)
			}).catch((error)=>{
				toast.error("Product not added in cart!");
				console.log(error)
			})
			
		}else{
      		this.props.history.push('/login');
		}
	}
	
	componentDidMount(){
		this.getProducts()

	}

	

	
	render(){
		const{products,cart} = this.state
		if(!products){
			return 	<Loader />
		}

		return (
				<>
					<ProductsComponent
						{...this.state}
						addToCart = {this.addToCart.bind(this)}
					/>
			        <ToastContainer />
					
				</>
			)
	}
}

export default withRouter (connect(mapStateToProps,mapDispatchToProps)(ProductsContainer));