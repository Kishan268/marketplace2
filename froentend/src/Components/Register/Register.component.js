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
	 constructor(props) {
        super(props);

        this.state = {
            isopen : false
        };

        this.handleClickOpen = this.handleClickOpen.bind(this);
    }

    handleClickOpen(){ 
        this.setState({isopen:!this.state.isopen})
    } 
   
	render(){
	return (
			<>
			<div className="container">
			<div className="col-md-12 seller-signup">
				<div className="row">
					<div className="" style={{marginTop: '50px',marginBottom:'100px'}}>
					<h3>Sign Up</h3>
					<span>What's the main purpose for the account you're creating?</span>

                 		<div class="top-form top-form-minicart flashmart-minicart2 mt-3">

                 			<div class="top-minicart-icon ">
                 			<a onClick={(()=>this.handleClickOpen())} className="btn btn-primary btn-lg btn-block"  size="lg">Personal use</a>
                 			<a href="http://localhost:8000/register"  className="btn btn-secondary btn-lg btn-block"  size="lg"> Business membership</a>
                 			</div>
							 <div className="row mt-2">
								 <span>Already have an account? </span>
								 <Link to="/login">Log In</Link>
							 </div>
              		 	</div>
					</div>
				</div>
			</div>
			</div>
			 <Modal  
                      title="User Sign In" 
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
