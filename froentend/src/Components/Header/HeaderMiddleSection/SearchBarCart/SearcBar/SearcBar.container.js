import { Component } from "react";
import {connect} from 'react-redux'
import SearchBarComponent from './SearchBar.component'
import {saveToken} from '../../../../../store/User/user.action.js'
import axios from 'axios'
import { Redirect,withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    token:state.UserDetailsReducer.token
})
const mapDispatchToProps = dispatch => ({
    // saveToken: token => dispatch(saveToken(token))
})

class SearchBar extends Component{

    async getAllCategories(){
        var result = axios.get('http://localhost:4000/get_all_categories' ).then((res)=>{
            this.setState({all_categories_data:res.data})
            return res.data
        }).catch((error)=>{
            console.log(error)
        })

    }
    itemsSearch(event){
        event.preventDefault()
        if (event.target.itemsName.value) {
            this.props.history.push('/Items/'+event.target.itemsName.value);
        }else{
            this.props.history.push('/Items/'+event.target.category_name.value);
        }
        }

    async componentDidMount(){
         await this.getAllCategories();
    }
   render(){
       return(
           <>
                <SearchBarComponent 
                               {...this.state}
                               {...this.props}
                                itemsSearch = {this.itemsSearch.bind(this)}
                               />
           </>
       )
   } 
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchBar));