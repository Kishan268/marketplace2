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


class NavbarSection extends PureComponent {

	render(){
         const{isLogin,logOut} = this.props
         const tokenStorage = localStorage.getItem('token');
         console.log(this.props)
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
                                           {/* { <ul className="hm-dropdown">
                                                <li><a href="index.html">Home One</a></li>
                                                <li><a href="index-2.html">Home Two</a></li>
                                                <li><a href="index-3.html">Home Three</a></li>
                                            </ul>} */}
                                        </li>
                                        <li className="megamenu-holder "><a href="shop-left-sidebar.html">Shop <i className="ion-ios-arrow-down"></i></a>
                                            <ul className="hm-megamenu">
                                                <li><span className="megamenu-title">Shop Page Layout</span>
                                                    <ul>
                                                        <li><a href="shop-grid-fullwidth.html">Grid Fullwidth</a></li>
                                                        <li><a href="shop-left-sidebar.html">Left Sidebar</a></li>
                                                        <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                        <li><a href="shop-list-fullwidth.html">List Fullwidth</a></li>
                                                        <li><a href="shop-list-left-sidebar.html">List Left Sidebar</a></li>
                                                        <li><a href="shop-list-right-sidebar.html">List Right Sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><span className="megamenu-title">Single Product Style</span>
                                                    <ul>
                                                        <li><a href="single-product-gallery-left.html">Gallery Left</a></li>
                                                        <li><a href="single-product-gallery-right.html">Gallery Right</a>
                                                        </li>
                                                        <li><a href="single-product-tab-style-left.html">Tab Style Left</a>
                                                        </li>
                                                        <li><a href="single-product-tab-style-right.html">Tab Style
                                                                Right</a>
                                                        </li>
                                                        <li><a href="single-product-sticky-left.html">Sticky Left</a></li>
                                                        <li><a href="single-product-sticky-right.html">Sticky Right</a></li>
                                                    </ul>
                                                </li>
                                                <li><span className="megamenu-title">Single Product Type</span>
                                                    <ul>
                                                        <li><a href="single-product.html">Single Product</a></li>
                                                        <li><a href="single-product-sale.html">Single Product Sale</a></li>
                                                        <li><a href="single-product-group.html">Single Product Group</a>
                                                        </li>
                                                        <li><a href="single-product-variable.html">Single Product Variable</a>
                                                        </li>
                                                        <li><a href="single-product-affiliate.html">Single Product
                                                                Affiliate</a>
                                                        </li>
                                                        <li><a href="single-product-slider.html">Single Product Slider</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="javascript:void(0)">Specials</a></li>
                                        <li className=""><a href="javascript:void(0)">Pages <i className="ion-ios-arrow-down"></i></a>
                                            <ul className="hm-dropdown">
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="login-register.html">Login | Register</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="compare.html">Compare</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                                <li><a href="404.html">404 Error</a></li>
                                            </ul>
                                        </li>
                                        <li className=""><a href="about-us.html">About Us</a></li>
                                        <li className=""><a href="contact.html">Contact</a></li>
                                        <li className=""><a href="blog-left-sidebar.html">Blog <i className="ion-ios-arrow-down"></i></a>
                                            <ul className="hm-dropdown">
                                                <li><a href="blog-left-sidebar.html">Grid View</a>
                                                    <ul className="hm-dropdown hm-sub_dropdown">
                                                        <li><a href="blog-2-column.html">Column Two</a></li>
                                                        <li><a href="blog-3-column.html">Column Three</a></li>
                                                        <li><a href="blog-left-sidebar.html">Left Sidebar</a></li>
                                                        <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="blog-list-left-sidebar.html">List View</a>
                                                    <ul className="hm-dropdown hm-sub_dropdown">
                                                        <li><a href="blog-list-fullwidth.html">List Fullwidth</a></li>
                                                        <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a></li>
                                                        <li><a href="blog-list-right-sidebar.html">List Right Sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="blog-details-left-sidebar.html">Blog Details</a>
                                                    <ul className="hm-dropdown hm-sub_dropdown">
                                                        <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                                                        <li><a href="blog-details-right-sidebar.html">Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="blog-gallery-format.html">Blog Format</a>
                                                    <ul className="hm-dropdown hm-sub_dropdown">
                                                        <li><a href="blog-gallery-format.html">Gallery Format</a></li>
                                                        <li><a href="blog-audio-format.html">Audio Format</a></li>
                                                        <li><a href="blog-video-format.html">Video Format</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4">
                            <div className="ht-right_area">
                                <div className="ht-menu">
                                
                                    <ul>
                                    {
                                    isLogin ?
                                     <div class="top-login3" >
                                         <Nav>
                                            <NavDropdown title={'Admin'} style={{textColor:'white'}}>
                                                <NavDropdown.Item onClick={(()=>logOut())}>Logout</NavDropdown.Item>
                                                <NavDropdown.Item onClick={(()=>this.myAccount())}>Profile</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>

                                    </div> :
                                        <li>
                                        <a>My Account<i className="fa fa-chevron-down"></i></a>
                                            <ul className="ht-dropdown ht-my_account">
                                                <li>
                                                     <Link to='/register'>Sing Up</Link>
                                                </li>
                                                <li className="active">
                                                    <Link to='/login'>Sing In</Link>

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

                  </>
			)
	}
}
export default withRouter (NavbarSection);