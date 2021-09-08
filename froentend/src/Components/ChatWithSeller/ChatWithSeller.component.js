import {Component} from "react";
// const name = 'User '+parseInt(Math.random()*10)
import LoginComponent from '../Login/UserLogin/UserLogin.container.js' 
import './ChatWithSeller.css'
import Popup from '../Popup/Popup.container.js'
import io from 'socket.io-client'
import axios from 'axios'
const socket = io('http://localhost:4000')

class ChatWithSeller extends Component{
 
state={
	chat:[],
	isopen:false
}


LoginModelOpen(){
	this.setState({isopen:true,popupStatus:"chat_system"})
}

render(){
 	const {
 		user_information,
 		getAllMessages,
 		chat,
 		sendMessage,
 		sendMessageLocalUser,
 		message,
 		userInfo,
 		payload,
 		get_messages,
 		test,
 		isopen,
 		LoginModelOpen,
 		popupStatus,
 		userDetails
 	} = this.props
 	const getMessages = get_messages ? get_messages.data : ''
 	var mgs = chat.message
 	// console.log(user_information)
  return (
  	<>
		<div class="chat-with-seller" >
			<input type="checkbox" id="check" /> 
			{
				localStorage.getItem('token') != null ? 
				<label class="chat-btn" for="check" onClick={()=>{getAllMessages()}}>
				 <i class="fa fa-commenting comment"></i>
				 <i class="fa fa-close close"></i> 
				</label>
				:
				<label class="chat-btn" for="check" >
				 <button onClick={()=>{LoginModelOpen()}} ><i class="fa fa-commenting comment"></i> </button>
				</label> 
			}
			<div class="wrapper">
		    <div class="header">
		        <h6>Let's Chat - with seller({userDetails ? userDetails.name : ''})</h6>
		    </div>
			   
			<div className="chat-form chat-container chat-content">
			    <ul class="chat-box chatContainerScroll scroll">
			    {getMessages ? getMessages.map((message, index)=>{
			   		return(
			          <li class={message.email == user_information.email ? "chat-right" :'chat-left'}>
			          <div class='chat-text'>{message.message}</div>
			          <div class='chat-avatar'>
			            <span class={ user_information.is_terms == 0 ? 'logged-in' : 'logged-out'}>{ user_information.is_terms == 0 ? '●' : ''}</span>

				          <img src='https://www.bootdey.com/img/Content/avatar/avatar3.png' alt='Retail Admin' />
				          <div class='chat-name'>{message.email == user_information.email ? "You" :message.name}</div>
			          {/* <div class="chat-hour">{message.created_at} <span class="fa fa-check-circle"></span></div>*/}	
			           <span class="fa fa-check-circle"></span>
			          </div> 
			           
			        </li>
			     )}
			     ) : ''}
			   </ul>
			    {
			    localStorage.getItem('token') != null ? 
			    <form onSubmit={sendMessage}>
			        <input type="text" 
		        	   name="message"
		        	   value={this.state.message}
		        	   placeholder='Type message'
		        	   class="form-control"
		        	   autocomplete="off"
		               required
			        ></input>
			        <button type='submit' class="pull-right btn-lg">
			        <i class="fa fa-paper-plane text-primary" title="Message send" ></i></button>
			      </form> : <Popup
				  	width="800px"
				  	margin-left="-100px"
		            isopen= {isopen}
		            title= {'Login Form'}
		            content = { <LoginComponent {...this.props}/>} 
		          />
			        
			    }

			     {/* <form onSubmit={sendMessageLocalUser}>
     			        <input type="text" 
     			        	name="name"
     			        	placeholder='Enter your name'
     			        	class="form-control"
     			        	required
     			        ></input>
     			        <input type="email" 
     			        		name="email"
     			       			placeholder='Enter your email'
     			       	 		class="form-control"
     			        		required
     			        ></input>
     			        <input type="text" 
     			        		name="message"
     			        		placeholder='Type message'
     			        		class="form-control"
     			        		required
     			        ></input>
     			        <button type='submit' class="pull-right btn-lg"><i class="fa fa-paper-plane text-primary"  ></i></button>
     			      </form>*/}
			      
			    </div>
			</div>
		</div>
		
		</>
  );
}
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