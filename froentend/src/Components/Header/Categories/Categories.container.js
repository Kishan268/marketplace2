import {Component} from 'react'
import CategoriesComponent from './Categories.component';
// import axios from 'axios'
import { Redirect,withRouter } from 'react-router-dom';
import axios from '../../../Utils/axios.config.js'

class Categories extends Component{

	state={
		categories_data:{},
		Items:{}
	}

async getAllCategories(){
	var token = localStorage.getItem('token');
	
	var result = await axios.get('/get_categories' ).then((res)=>{
		// console(res.data)
		return res.data
	}).catch((error)=>{
		console.log(error)
	})
	await this.setState({categories_data:result})

}


async componentDidMount(){
	  this.getAllCategories();
}

async componentWillReceiveProps(nextProps) {

var parts = nextProps.location.pathname.split('/');
var lastSegment = parts.pop() || parts.pop();  
await this.setState({item:lastSegment})
// this.getItemsSearchByCategory(lastSegment);

}

	render(){
		return (
				<>
					<CategoriesComponent
						{...this.props}
						{...this.state}

					/>
					
					
				</>
			)
	}
}

export default withRouter(Categories);