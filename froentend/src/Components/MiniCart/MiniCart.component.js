import {Component} from 'react'

class MiniCart extends Component{
	render(){
		return (
				<>
                
			 <div className="offcanvas-minicart_wrapper" id="miniCart">
                <div className="offcanvas-menu-inner">
                    <a href="#" className="btn-close"><i className="ion-android-close"></i></a>
                    <div className="minicart-content">
                        <div className="minicart-heading">
                            <h4>Shopping Cart</h4>
                        </div>
                        <ul className="minicart-list">
                            <li className="minicart-product">
                                <a className="product-item_remove" href="javascript:void(0)"><i
                                    className="ion-android-close"></i></a>
                                <div className="product-item_img">
                                    <img src="assets/images/product/small-size/1.jpg" alt="Uren's Product Image"/>
                                </div>
                                <div className="product-item_content">
                                    <a className="product-item_title" href="shop-left-sidebar.html">Autem ipsa ad</a>
                                    <span className="product-item_quantity">1 x $145.80</span>
                                </div>
                            </li>
                            <li className="minicart-product">
                                <a className="product-item_remove" href="javascript:void(0)"><i
                                    className="ion-android-close"></i></a>
                                <div className="product-item_img">
                                    <img src="assets/images/product/small-size/2.jpg" alt="Uren's Product Image"/>
                                </div>
                                <div className="product-item_content">
                                    <a className="product-item_title" href="shop-left-sidebar.html">Tenetur illum amet</a>
                                    <span className="product-item_quantity">1 x $150.80</span>
                                </div>
                            </li>
                            <li className="minicart-product">
                                <a className="product-item_remove" href="javascript:void(0)"><i
                                    className="ion-android-close"></i></a>
                                <div className="product-item_img">
                                    <img src="assets/images/product/small-size/3.jpg" alt="Uren's Product Image"/>
                                </div>
                                <div className="product-item_content">
                                    <a className="product-item_title" href="shop-left-sidebar.html">Non doloremque placeat</a>
                                    <span className="product-item_quantity">1 x $165.80</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="minicart-item_total">
                        <span>Subtotal</span>
                        <span className="ammount">$462.4‬0</span>
                    </div>
                    <div className="minicart-btn_area">
                        <a href="cart.html" className="uren-btn uren-btn_dark uren-btn_fullwidth">Minicart</a>
                    </div>
                    <div className="minicart-btn_area">
                        <a href="checkout.html" className="uren-btn uren-btn_dark uren-btn_fullwidth">Checkout</a>
                    </div>
                </div>
            </div>

            
            <div className="mobile-menu_wrapper" id="mobileMenu">
                <div className="offcanvas-menu-inner">
                    <div className="container">
                        <a href="#" className="btn-close"><i className="ion-android-close"></i></a>
                        <div className="offcanvas-inner_search">
                            <form action="#" className="inner-searchbox">
                                <input type="text" placeholder="Search for item..."/>
                                <button className="search_btn" type="submit"><i className="ion-ios-search-strong"></i></button>
                            </form>
                        </div>
                        <nav className="offcanvas-navigation">
                            <ul className="mobile-menu">
                                <li className="menu-item-has-children active"><a href="index.html"><span
                                        className="mm-text">Home</span></a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="index.html">
                                                <span className="mm-text">Home One</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-2.html">
                                                <span className="mm-text">Home Two</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-3.html">
                                                <span className="mm-text">Home Three</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="shop-left-sidebar.html">
                                        <span className="mm-text">Shop</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li className="menu-item-has-children">
                                            <a href="shop-left-sidebar.html">
                                                <span className="mm-text">Grid View</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="shop-grid-fullwidth.html">
                                                        <span className="mm-text">Column Three</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-4-column.html">
                                                        <span className="mm-text">Column Four</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-left-sidebar.html">
                                                        <span className="mm-text">Left Sidebar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-right-sidebar.html">
                                                        <span className="mm-text">Right Sidebar</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="shop-list-left-sidebar.html">
                                                <span className="mm-text">Shop List</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="shop-list-fullwidth.html">
                                                        <span className="mm-text">Full Width</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-list-left-sidebar.html">
                                                        <span className="mm-text">Left Sidebar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-list-right-sidebar.html">
                                                        <span className="mm-text">Right Sidebar</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="single-product-gallery-left.html">
                                                <span className="mm-text">Single Product Style</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="single-product-gallery-left.html">
                                                        <span className="mm-text">Gallery Left</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-gallery-right.html">
                                                        <span className="mm-text">Gallery Right</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-tab-style-left.html">
                                                        <span className="mm-text">Tab Style Left</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-tab-style-right.html">
                                                        <span className="mm-text">Tab Style Right</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-sticky-left.html">
                                                        <span className="mm-text">Sticky Left</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-sticky-right.html">
                                                        <span className="mm-text">Sticky Right</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="single-product.html">
                                                <span className="mm-text">Single Product Type</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="single-product.html">
                                                        <span className="mm-text">Single Product</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-sale.html">
                                                        <span className="mm-text">Single Product Sale</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-group.html">
                                                        <span className="mm-text">Single Product Group</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-variable.html">
                                                        <span className="mm-text">Single Product Variable</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-affiliate.html">
                                                        <span className="mm-text">Single Product Affiliate</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product-slider.html">
                                                        <span className="mm-text">Single Product Slider</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="blog-left-sidebar.html">
                                        <span className="mm-text">Blog</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li className="menu-item-has-children has-children">
                                            <a href="blog-left-sidebar.html">
                                                <span className="mm-text">Grid View</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-2-column.html">
                                                        <span className="mm-text">Column Two</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-3-column.html">
                                                        <span className="mm-text">Column Three</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-left-sidebar.html">
                                                        <span className="mm-text">Left Sidebar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-right-sidebar.html">
                                                        <span className="mm-text">Right Sidebar</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children has-children">
                                            <a href="blog-list-left-sidebar.html">
                                                <span className="mm-text">List View</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-list-fullwidth.html">
                                                        <span className="mm-text">List Fullwidth</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-list-left-sidebar.html">
                                                        <span className="mm-text">List Left Sidebar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-list-right-sidebar.html">
                                                        <span className="mm-text">List Right Sidebar</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children has-children">
                                            <a href="blog-details-left-sidebar.html">
                                                <span className="mm-text">Blog Details</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-details-left-sidebar.html">
                                                        <span className="mm-text">Left Sidebar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-details-right-sidebar.html">
                                                        <span className="mm-text">Right Sidebar</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children has-children">
                                            <a href="blog-gallery-format.html">
                                                <span className="mm-text">Blog Format</span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-gallery-format.html">
                                                        <span className="mm-text">Gallery Format</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-audio-format.html">
                                                        <span className="mm-text">Audio Format</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-video-format.html">
                                                        <span className="mm-text">Video Format</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="index.html">
                                        <span className="mm-text">Pages</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="my-account.html">
                                                <span className="mm-text">My Account</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="login-register.html">
                                                <span className="mm-text">Login | Register</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="wishlist.html">
                                                <span className="mm-text">Wishlist</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="cart.html">
                                                <span className="mm-text">Cart</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="checkout.html">
                                                <span className="mm-text">Checkout</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="compare.html">
                                                <span className="mm-text">Compare</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="faq.html">
                                                <span className="mm-text">FAQ</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="404.html">
                                                <span className="mm-text">Error 404</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <nav className="offcanvas-navigation user-setting_area">
                            <ul className="mobile-menu">
                                <li className="menu-item-has-children active"><a href="javascript:void(0)"><span
                                        className="mm-text">User
                                        Setting</span></a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="my-account.html">
                                                <span className="mm-text">My Account</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="login-register.html">
                                                <span className="mm-text">Login | Register</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="javascript:void(0)"><span
                                        className="mm-text">Currency</span></a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="javascript:void(0)">
                                                <span className="mm-text">EUR €</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <span className="mm-text">USD $</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="javascript:void(0)"><span
                                        className="mm-text">Language</span></a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="javascript:void(0)">
                                                <span className="mm-text">English</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <span className="mm-text">Français</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <span className="mm-text">Romanian</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <span className="mm-text">Japanese</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

				</>
			)
	}
}

export default MiniCart;