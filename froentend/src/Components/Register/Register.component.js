import {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { Modal, Button } from 'antd';
import RegisterComponent from '../Register/UserRegister/UserRegister.container.js'

class Rgister  extends Component {
    state = {
        isopen : false
    }

    handleClickOpen(){ 
        this.setState({isopen:!this.state.isopen})
    } 
   
	render(){
	const {closeBideModel} = this.props
	return (
			<>
				<div className="container">
					<div className="col-md-12 ">
						<div className="row">
			                <div className="col-md-6 ">
			                  <img className="login-image" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
			                </div>
			                <div className="col-md-6 ">
			                  <span>What's the main purpose for the account you're creating?</span>
			                    <div class="top-form top-form-minicart flashmart-minicart2 mt-3">
			                      <div class="top-minicart-icon ">
			                       	{/*<a onClick={(()=>this.handleClickOpen())} className="btn btn-primary btn-lg btn-block"  size="lg">Personal use</a>*/}
			                 		<a href="http://localhost:8000/login"  className="btn btn-primary btn-lg btn-block"  size="lg" target="_blank"> Sing In</a>
			                 		<a href="http://localhost:8000/register"  className="btn btn-secondary btn-lg btn-block"  size="lg" target="_blank"> Sing Up</a>
			                       </div>
			                       <div className="row mt-2">
									 <span>Already have an account? </span>
									 <Link to="/login">Sing In</Link>
								 </div>
			                    </div>
			                </div>
						</div>
					</div>
				</div>
			
			 <Modal  
              okText="Submit"
              footer={null}                       
              visible={this.state.isopen} onCancel={this.handleClickOpen}
            >
            <RegisterComponent />
          </Modal>
		</>
		)
	}
}


export default Rgister;
