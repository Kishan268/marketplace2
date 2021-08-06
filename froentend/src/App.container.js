import {PureComponent} from 'react'
import {connect} from 'react-redux'

import{CheckLogin} from './store/User//user.action.js'
import {fetchCart} from './store/addToCart/addToCart.action.js'
import App from './App.js';

const mapStateToProps = state => ({
    isLogin:state.UserDetailsReducer.isLogin
})

const mapDispatchToProps = dispatch => ({
    CheckLogin:()=>dispatch(CheckLogin()),
    fetchCart:(token)=>dispatch(fetchCart(token)),
})

class AppContainer extends PureComponent{

	
   componentWillMount(){
	    const {CheckLogin,isLogin,fetchCart} = this.props
	    const token = localStorage.getItem('token')
	    CheckLogin()
	    if(isLogin || isLogin === 'true'){
	        fetchCart(token)
	    }
  }

  render(){
  	return(
  			<App/>
  		)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);