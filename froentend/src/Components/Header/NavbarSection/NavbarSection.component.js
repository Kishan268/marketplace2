import {PureComponent} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
  useHistory
} from "react-router-dom";
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import LoginComponent from '../../Login/Login.container.js' 
import UserRegisterComponent from '../../Register/Register.container.js' 
import Popup from '../../Popup/Popup.container.js'


class NavbarSection extends PureComponent {

    
	render(){
        
         const{isLogin,isopen,logOut,myAccount,handleClickOpen,LoginModelOpen,popupStatus,SignUpModelOpen,closeBideModel} = this.props
         const tokenStorage = localStorage.getItem('token');
		return(
            <>

				<div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8">
                            <div className="main-menu_area position-relative">
                                <nav className="main-nav">
                                    <ul>
                                        <li className="dropdown-holder active">
                                        <Link to="/">Home </Link>
                                          
                                        </li>
                                  
                                        <li className=""><a href="#">About Us</a></li>
                                        <li className=""><a href="#">Contact</a></li>
                                        <Link to="/wish-list" class="uren-wishlist"  
                                              data-toggle="tooltip" 
                                              data-placement="top" 
                                              title="Wishlist" 
                                              tabindex="0" 
                                              data-original-title="Add To Wishlist" >Wishlist<i class="ion-android-favorite-outline"></i>
                                        </Link>
                                     
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4">
                            <div className="ht-right_area">
                           
                                <div className="ht-menu"  id="cate-toggle">
                                     {/*<div class="btn-group dropleft">
                                       <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        MyAccount
                                       </button>
                                       <div class="dropdown-menu" id="cate-toggle">
                                          <li>
                                             <a>User<i className="fa fa-chevron-down"></i></a>
                                                 <ul className="ht-dropdown ht-my_account">
                                                     <li>
                                                         <Link to='/register'>Sing Up</Link>
                                                     </li>
                                                     <li className="active">
                                                         <a href="#" onClick={(()=>handleClickOpen())}>Sing In</a>
                                                     </li>
                                                 </ul>
                                             </li>
                                            <li>
                                             <a>Merchant<i className="fa fa-chevron-down"></i></a>
                                                 <ul className="ht-dropdown ht-my_account">
                                                     <li>
                                                         <Link to='/register'>Sing Up</Link>
                                                     </li>
                                                     <li className="active">
                                                         <Link to='/login'>Sing In</Link>
                                                     </li>
                                                 </ul>
                                             </li>
                                         </div>
                                     </div>*/}
                                    <ul>
                                    {
                                    isLogin ?
                                     <div class="top-login3" >
                                         <Nav>
                                            <NavDropdown title={'Admin'} style={{textColor:'white'}}>
                                                <NavDropdown.Item onClick={(()=>logOut())}>Logout</NavDropdown.Item>
                                                <NavDropdown.Item onClick={()=>{myAccount()}} >Profile</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>

                                    </div> :
                                        <li>

                                        <a>Login/SingUp<i className="fa fa-chevron-down"></i></a>
                                            <ul className="ht-dropdown ht-my_account dropleft">
                                                <li className="active">
                                                    <a  onClick={()=>{LoginModelOpen()}}>User</a>
                                                 {/*   <Link to='/login'>Sing In</Link>*/}

                                                </li>
                                                <li>
                                                    <a  onClick={()=>{SignUpModelOpen()}}>Merchant</a>
                                                     {/*<Link to='/register'>Merchant</Link>*/}

                                                </li>
                                               
                                            </ul>
                                        </li>
                                }
                                    </ul>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                </div>
                <Popup
                    width="500px"
                    margin-left="-100px"
                    isopen= {isopen}
                    title= {popupStatus == 'loginModel' ? 'Login' : 'SignUp'}
                    content = { popupStatus == 'loginModel' ? <LoginComponent {...this.props}/> : <UserRegisterComponent />} 
                />
             
              </>
                
			)
	}
}
export default withRouter (NavbarSection);