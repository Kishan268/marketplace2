import { Component } from "react";
import {connect} from 'react-redux'
import SearchBarComponent from './SearchBar.component'
import {saveToken} from '../../../../../store/User/user.action.js'

const mapStateToProps = state => ({
    token:state.UserDetailsReducer.token
})
const mapDispatchToProps = dispatch => ({
    // saveToken: token => dispatch(saveToken(token))
})

class SearchBar extends Component{
   render(){
       return(
           <>
                <SearchBarComponent />
           </>
       )
   } 
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);