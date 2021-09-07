import React, { useState, useEffect } from "react";
import io from 'socket.io-client'
import axios from 'axios'
const socket = io('http://localhost:7000')
// const name = 'User '+parseInt(Math.random()*10)

function ChatWithSeller(props){
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [user_id, setUserId] = useState('')
  const [seller_id, setSellerId] = useState('')
  const [userInfo, setUserInfo] =useState(props.user_information);
  const [userDetails, setUserDetails] =useState(props.userDetails);
  const [userMessage, setUserMessage] =useState([]);
  const token = localStorage.getItem('token')

useEffect((props) => {
    socket.on('message', payload => {
      setChat([...chat, payload])
      // setUserInfo(userInfo)
      // setChat([...chat, payload.data])
    })
 	// getMessages(props)


  })
  const sendMessage = async  (e) => {
    e.preventDefault();
    console.log(props)
    var seller_id = userDetails.id
    var user_id = props.user_information.id
    var name = props.user_information.name
    var email = props.user_information.email
    var result = socket.emit('message',{name,email,message,user_id,seller_id})
    setMessage('')
  };

   const sendMessageLocalUser = async (e) => {
    e.preventDefault();
    var seller_id = userDetails.id
    var result = socket.emit('message',{name,email,message,seller_id})
    setMessage('')
    // getMessages()
  };
   const getMessages = async () => {
    var token = localStorage.getItem('token')

    var seller_id = userDetails.id
    var email = props.user_information.email
    var user_id = props.user_information.id
    var data ={
    		token:token,
    		seller_id:seller_id,
    		email:email,
    		user_id:user_id
    };

    var result = axios.post('http://localhost:7000/get_messages',data).then((res)=>{
    	console.log(res.data)
    	setUserMessage(res.data)
    	return res.data
    }).catch((error)=>{
    	console.log(error)
    })
  };

useEffect(()=>{
 // console.log(props)
 // getMessages()

})
var userMessages = userMessage.data
console.log(userMessage)
  return (
		<div class="chat-with-seller">
			<input type="checkbox" id="check"/> <label class="chat-btn" for="check">
			 <i class="fa fa-commenting comment"></i> 
			 <i class="fa fa-close close"></i> </label>
			<div class="wrapper">
			    <div class="header">
			        <h6>Let's Chat - with seller({props.userDetails.name})</h6>
			    </div>
			    <div class="text-center p-2">
			     <span>Please fill out the form to start chat!</span> 
			    </div>
			    <div className="chat-form">
			    {chat.map((payload, index)=>{
			        return(
			          <div>
			          <span class="logged-in">●</span>
						<span class="logged-out">●</span>
			          	<span key={index}>{payload.name ? payload.name : userInfo.name}:</span> <h3>{payload.message}</h3>
			          </div>
			        )
			      })}
			    {token ? 
			      <form onSubmit={sendMessage}>
			      	
			        <input type="text" name="message"
			        placeholder='Type message'
			        class="form-control"
			        value={message}
			        onChange={(e)=>{setMessage(e.target.value)}}
			        required
			        ></input>
			        <button type='submit' class="pull-right btn-lg"><i class="fa fa-paper-plane text-primary"  ></i></button>
			      </form> :
			      <form onSubmit={sendMessageLocalUser}>

			        <input type="text" name="name"
			        placeholder='Enter your name'
			        class="form-control"
			        value={name}
			        onChange={(e)=>{setName(e.target.value)}}
			        required
			        ></input>
			        <input type="email" name="email"
			        placeholder='Enter your email'
			        class="form-control"
			        value={email}
			        onChange={(e)=>{setEmail(e.target.value)}}
			        required
			        ></input>
			        <input type="text" name="message"
			        placeholder='Type message'
			        class="form-control"
			        value={message}
			        onChange={(e)=>{setMessage(e.target.value)}}
			        required
			        ></input>
			        <button type='submit' class="pull-right btn-lg"><i class="fa fa-paper-plane text-primary"  ></i></button>
			      </form>
			      
			      }
			    </div>
			</div>
		</div>
  );
}

export default ChatWithSeller;
/*import {Component} from 'react'
import "./ChatWithSeller.css"
import { Formik, Form, Field } from 'formik';
import {SellerChatSchema} from '../../Utils/ValidationSchema/index.js'

class ChatWithSeller extends Component{

	render(){
		const {SellerChat} = this.props
		return(
			<>
				<div class="chat-with-seller">
					<input type="checkbox" id="check"/> <label class="chat-btn" for="check">
					 <i class="fa fa-commenting comment"></i> 
					 <i class="fa fa-close close"></i> </label>
					<div class="wrapper">
					    <div class="header">
					        <h6>Let's Chat - with seller</h6>
					    </div>
					    <div class="text-center p-2">
					     <span>Please fill out the form to start chat!</span> 
					    </div>
					     <Formik
			                 initialValues={{
			                   name: '',
			                   email: '',
			                   message: '',
			                 }}
			                 validationSchema={SellerChatSchema}
			                 onSubmit={values => {
			                 	console.log(values)
			                  SellerChat(values)
			                 }}
			            >
			              {({ errors, touched }) => (
						    <div class="chat-form">
						    	<Form >
						        <Field type="text" name="name" class="form-control" placeholder="Name"/> 
                              	<p style={{color:"red",fontSize:"14px"}}>{errors.name}</p>

						    	<Field type="text" name="email" class="form-control" placeholder="Email"/> 
                              	<p style={{color:"red",fontSize:"14px"}}>{errors.email}</p>

						    	<Field name="message" class="form-control" placeholder="Your Text Message"></Field>
                              	<p style={{color:"red",fontSize:"14px"}}>{errors.message}</p>

						    	<button class="btn btn-warning btn-block mt-2" type="submit">Submit</button> 
						    </Form>  
			                </div>
			              )}
			            </Formik>
					</div>
				</div>
			</>
		)
	}
}
export default ChatWithSeller*/