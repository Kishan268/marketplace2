import {Component} from 'react';
import TemplateProductsComponent from './TemplateProducts.component.js'
import {connect} from 'react-redux'
import axios from 'axios';
import {addToCart} from '../../store/addToCart/addToCart.action.js'
import {withRouter} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import axios from '../../Utils/axios.config.js'

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})

class TemplateProducts extends Component{

state = {
		products:[],
		addWishList:'',
		user_information:'',
		get_template_products:''
	}

	async getProducts(){
		var products = await axios.get('/all_products')
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
		if (localStorage.getItem('token')) {
			data.token = localStorage.getItem('token');
			axios.post('/cart_data',data)
            .then((res)=>{
            	if(typeof res.data.data === 'string'){
					toast.warning(res.data.data);
            	}
            	else{
            		//console.log(res.data)
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
		}
	}
	async getUserInfo (){
        var token= localStorage.getItem('token');
        var userInfo=await axios.get(`/get_user_info/${token}`).then((res)=>{
       this.setState({user_information:res.data})	
        return res.data
      }).catch((error)=>{
          return error
      })
    }
    async getTemplateProducts(){
    	var template = this.props.match.params.id
    	// alert(template)
        var userInfo=await axios.post(`/get_template_products/`,{template:template}).then((res)=>{
       this.setState({get_template_products:res.data})	
        return res.data
      }).catch((error)=>{
          return error
      })
    }
	addWishList(data){
        var token= localStorage.getItem('token');
        if (token) {
  		var wishListData= {
			user_id:data.user_id,
			product_id:data.product_id,
			token:token
		}
		var result= axios.post('/add_wishlist/',wishListData).then((res)=>{
		this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
		
		toast(res.data.data);

		}).catch((error)=>{
			toast.error(error);
			console.log(error)
		});
		}else{
			this.LoginModelOpen();
		}
	}
	LoginModelOpen(data){
		 this.setState({isopen:true})
    } 
	
	componentDidMount(){
		this.getProducts();
		this.getUserInfo();
		this.getTemplateProducts();
	}
	closeBideModel(){
		this.setState({
			isopen:false
		})
	}

	
	render(){
		const{products,cart,addWishList,user_information,get_template_products} = this.state
		if(!products){
			return 	<Loader />
		}
		return(
			<>
			<TemplateProductsComponent 
				{...this.state}
				{...this.props}
				addToCart = {this.addToCart.bind(this)}
				addWishList = {this.addWishList.bind(this)}
				LoginModelOpen = {this.LoginModelOpen.bind(this)}
				closeBideModel = {this.closeBideModel.bind(this)}
			/>
	        <ToastContainer />
					
			</>
		)
	}
}
export default withRouter (connect(mapStateToProps,mapDispatchToProps)(TemplateProducts))