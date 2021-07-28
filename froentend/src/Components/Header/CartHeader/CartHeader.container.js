import {Component} from  'react'
import CartComponent from './CartHeader.component'
import {connect} from 'react-redux'
import axios from 'axios'

const mapStateToProps = state => ({
    data:state.cardItems
})
const mapDispatchToProps = dispatch => ({
})

 
class CartHeader extends Component {

    getCartData(){
        var token = localStorage.getItem('token')
        axios.get('http://localhost:4000/get_cart_data/'+token).then((res)=>{ 
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
	componentDidMount(){
        this.getCartData()
		const{cartData} = this.props
	}
   
    render(){
		const{cartData} = this.props
    	
		// console.log( this.props)
        return(
            <CartComponent 
            {...this.state}
			{...this.props}
            />
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartHeader);