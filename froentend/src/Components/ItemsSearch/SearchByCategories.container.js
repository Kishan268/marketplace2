import {Component} from 'react'
import SearchByCategoriesComponent from './SearchByCategories.component.js'
import CategorySectionComponent from '../Header/Categories/Categories.container.js'
import {connect} from 'react-redux'
import axios from 'axios';
import {addToCart} from '../../store/addToCart/addToCart.action.js'
import { ToastContainer, toast } from 'react-toastify';
import {withRouter} from 'react-router-dom';

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})

class SearchByCategories extends Component{
	state={
		Items:{},
		addWishList:'',
		user_information:''
	}

async getItemsSearchByCategory(itemName){
	
	var result = await axios.post('http://localhost:4000/get_items_by_category',{itemName:itemName} ).then((res)=>{
		console.log(res.data)
	 // this.setState({Items:res.data})
		return res.data
	}).catch((error)=>{
		console.log(error)
	})
	await this.setState({Items:result})
}
async componentDidMount(){
	var itemName = this.props.match.params.id
	// console.log(this.props)
	  this.getItemsSearchByCategory(itemName);

}

async componentWillReceiveProps(nextProps) {

var parts = nextProps.location.pathname.split('/');
var lastSegment = parts.pop() || parts.pop();  
// console.log(lastSegment)
await this.setState({item:lastSegment})
this.getItemsSearchByCategory(lastSegment);

}	
	addToCart(data){
		const{addToCartHandler,handleClickOpen} = this.props
		const{UserLogin} = this.props
		if (localStorage.getItem('token')) {
			data.token = localStorage.getItem('token');
			axios.post('http://localhost:4000/cart_data',data)
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
      		this.LoginModelOpen();
		}
	}
	 
	addWishList(data){
        var token= localStorage.getItem('token');
        if (token) {
	  		var data= {
				user_id:data.user_id,
				product_id:data.product_id,
				token:token
			}
			var result= axios.post('http://localhost:4000/add_wishlist/',data).then((res)=>{
			this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000);
			toast(res.data.data);
	  		// this.props.history.push('/wish-list');

			}).catch((error)=>{
				toast.error(error);
				console.log(error)
			});
		}else{
      		this.LoginModelOpen();
				
		}
	}
	async getUserInfo (){
        var token= localStorage.getItem('token');
        var userInfo=await axios.get(`http://localhost:4000/get_user_info/${token}`).then((res)=>{
        // console.log( res.data)
       this.setState({user_information:res.data})	
        return res.data
      }).catch((error)=>{
          return error
      })
    }
     LoginModelOpen(data){
    	// console.log(data)
		 this.setState({isopen:true})
    } 
	componentWillMount(){
		var itemName = this.props.match.params.id

		this.getItemsSearchByCategory(itemName)
	}
	closeBideModel(){
		this.setState({
			isopen:false
		})
	}
	render(){
		return(
			<>
				<SearchByCategoriesComponent 
					{...this.props}
					{...this.state}
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
export default withRouter (connect(mapStateToProps,mapDispatchToProps)(SearchByCategories))