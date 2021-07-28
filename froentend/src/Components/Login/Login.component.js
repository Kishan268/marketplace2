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
import LoginComponent from '../Login/UserLogin/UserLogin.container.js'


 class Login extends Component{
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
									<h3>Sign In</h3>
                  <span>What's the main purpose for the account you're creating?</span>

                    <div class="top-form top-form-minicart flashmart-minicart2 mt-3">
                      <div class="top-minicart-icon ">
                            <a onClick={(()=>this.handleClickOpen())}  className="btn btn-primary btn-lg btn-block"  size="lg">Personal use</a>
                        <a  href="http://localhost:8000/login" className="btn btn-secondary btn-lg btn-block"  size="lg">Business membership</a>
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
          <LoginComponent />
        </Modal>
			</>
			)
	}
}


export default Login;
