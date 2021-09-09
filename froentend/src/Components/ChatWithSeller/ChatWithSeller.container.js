import {Component} from "react";
import io from 'socket.io-client'
import axios from 'axios'
import ChatWithSellerComponet from './ChatWithSeller.component.js'	
const socket = io('http://localhost:7000')

// const name = 'User '+parseInt(Math.random()*10)

class ChatWithSeller extends Component{

	state={
		chat:{},
		get_messages:{},
		isopen:false
	}

 
  sendMessage(e){
  	const {user_information, userDetails} = this.props
    e.preventDefault();
    var seller_id = userDetails?userDetails.id :''
    var name = user_information?user_information.name:''
    var user_id = user_information?user_information.id:''
    var email = user_information?user_information.email:''
    var message = e.target.message.value
    var result = socket.emit('message',{name,email,message,seller_id,user_id})
    // this.setState({
    //   message: message
    // });
    this.getMessages();
    // console.log(result)

  };


  getMessages(e){
  	const {user_information, userDetails,message} = this.props
  	const {local_data} = this.state
    var token = localStorage.getItem('token')

    var seller_id = userDetails?userDetails.id:''
    var email = user_information?user_information.email:''
    var user_id = user_information?user_information.id:''
    if (token) {
    var data ={
    		token:token,
    		seller_id:seller_id,
    		email:email,
    		user_id:user_id
    	}
	}
	// else{
	// 	var data ={
	// 		seller_id:userDetails.id,
	// 		email:local_data?local_data.email:'',
	// 		name:local_data?local_data.name:''
	// 	}
	// }
    var result =  axios.post('http://localhost:4000/get_messages',data).then((res)=>{
    	// console.log(res.data)
    	this.setState({get_messages:res.data})
    	// return res.data
    }).catch((error)=>{
    	console.log(error)
    })
  }
getAllMessages(){
    this.getMessages()
   const {user_information} = this.props

}
componentDidMount(){
	 var data = socket.on('sendtoclient', payload => {
      // setChat([...chat, payload])
      this.setState({chat:payload})
      this.getMessages()

      
      // alert()
      // setChat([...chat, payload.data])
    })
	  const {user_information} = this.props
			socket.on('connect',()=>{
			    socket.emit('user_connected',user_information.id)
			})
}
componentWillMount(){
    this.getAllMessages()
     // this.getMessages()
   const {user_information,userDetails} = this.props
			socket.on('connect',()=>{
			    socket.emit('user_connected',user_information.id)
			})
			console.log(user_information.id)
}



	
render(){
	const {popupStatus,chat,userDetails,user_information,sendMessage,sendMessageLocalUser,get_messages,name,isopen} = this.props
	socket.on('connect',()=>{
		    socket.emit('user_connected',user_information.id)
		})
	return(
		<ChatWithSellerComponet 
		{...this.state}
		{...this.props}
		sendMessage = {this.sendMessage.bind(this)}
		// sendMessageLocalUser = {this.sendMessageLocalUser.bind(this)}
		getMessages = {this.getMessages.bind(this)}
		getAllMessages = {this.getAllMessages.bind(this)}

		/>
	)
}
}
export default ChatWithSeller;
// useEffect(()=>{
//  // console.log(props)
//  // getMessages()

// })

/*import {Component} from 'react'
import ChatWithSellerComponent from './ChatWithSeller.component.js'
import axios from 'axios'
class ChatWithSeller extends Component{

SellerChat(values){
	var token = localStorage.getItem('token')
	// if (token) {
	// 	axios.post('/chat_with_selller/',{values:values,token:token}).then((res)=>{
	// 		return res.data
	// 	}).catch((error)=>{
	// 		console.log(error)
	// 	})
	// }else{
	// 	axios.post('/chat_with_selller/',{values:values}).then((res)=>{
	// 		return res.data
	// 	}).catch((error)=>{
	// 		console.log(error)
	// 	})	
	// }
}

	render(){
		const {SellerChat} = this.props
		return(
			<>
				<ChatWithSellerComponent 
				{...this.props}
				{...this.state}
                SellerChat = {this.SellerChat.bind(this)}

				/>
			</>
		)
	}
}

export default ChatWithSeller
*/