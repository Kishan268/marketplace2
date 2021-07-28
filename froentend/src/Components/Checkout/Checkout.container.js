import {Component} from  'react'
import CheckoutComponent from './Checkout.component'
import {connect} from 'react-redux'
import axios from 'axios'
import {updateCart} from '../../store/addToCart/addToCart.action.js'

const mapStateToProps = state => ({
    data:state.cardItems
})
const mapDispatchToProps = dispatch => ({
})

class Checkout extends Component {
    
	
    async getUserInfo (){
        var token= localStorage.getItem('token');
        var userInfo=await axios.get(`http://localhost:4000/getUserInfo/${token}`).then((res)=>{
        // console.log( res.data)
       this.setState(res.data)		

        return res.data
      }).catch((error)=>{
          return error
      })
  
      }
    async componentDidMount(){
        this.getUserInfo();
	}
     checkOut(event){
        alert()
        event.preventDefault()
        // var data ={
        //     id:id
        // }
        console.log(event)
        axios.post('http://localhost:4000/post_order/',3)
        .then((res)=>{
        // console.log( res.data)
         return res.data
        }).catch((error)=>{
         return error
        })
   
     }
    render(){
		const{cartData} = this.props
        return(
           <>
            <CheckoutComponent 
            {...this.state}
            {...this.props}
           checkOut={this.checkOut.bind(this)}
            />
           </>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);