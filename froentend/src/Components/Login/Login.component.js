import {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Popup from '../Popup/Popup.container.js'

 class Login extends Component{

    loginForm(){
      const{UserLogin} = this.props
      return (
        <>
          <div className="row">
             <div className="col-md-12 col-lg-12 " style={{fontSize:'135%'}}>
                <form onSubmit={((event)=>UserLogin(event))}>
                   <div className="row">
                     
                          <div className="col-md-12 form-group error-div">
                            <label for="email">Email:</label>
                             <input 
                              type="text" 
                              name="email"
                              className="form-control form-control-lg" 
                              placeholder="Enter Email" />
                              </div>
                         <div className="col-md-12 form-group error-div">
                            <label>Password:</label>
                            <input 
                            type="text" 
                            name="password"
                            className="form-control form-control-lg" 
                            placeholder="Enter Password" />
                          </div>
                         
                         <div className="col-md-12 mt-4 form-group">
                    <input type="checkbox" />Remember Me
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Login" className="btn float-left btn-success login_btn" />
                         </div>
                         
                      </div>
                  </form>                      
             </div>
        </div>
          
      </>
      )
    }

	render(){
    const {handleClickOpen,isopen} = this.props
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
                            <a onClick={(()=>handleClickOpen())}  className="btn btn-primary btn-lg btn-block"  size="lg">Personal use</a>
                        <a  href="http://localhost:8000/login" className="btn btn-secondary btn-lg btn-block"  size="lg">Business membership</a>
                      </div>
                    </div>
								</div>
							</div>
						</div>
					</div>
				  <Popup
            isopen= {isopen}
            content = {this.loginForm()}  
          />
                  
			</>
			)
	}
}


export default Login;
