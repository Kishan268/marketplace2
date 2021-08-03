import {Component} from  'react'
import CartComponent from './Cart.component'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    data:state.cardItems
})
const mapDispatchToProps = dispatch => ({
})

class Cart extends Component {
	componentDidMount(){
		const{cartData} = this.props
	}

    render(){
		const{cartData} = this.props
    	        return(
           <>
            <CartComponent 
               {...this.state}
			      {...this.props}
            />
           </>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);