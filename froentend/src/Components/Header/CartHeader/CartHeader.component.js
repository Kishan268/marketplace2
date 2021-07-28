import {Component} from 'react'
import MiniCartSection from '../../MiniCart/MiniCart.container'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
class CartHeader extends Component {
    
    render(){
         const productPrices = this.props.data.cardData
        //  console.log(this.props.data.length)
        return(
            <>
               <div className="custom-cart_col col-12">
                    <div className="header-right_area">
                        
                        <ul>
                            <li className="mobile-menu_wrap d-flex d-lg-none">
                                <a href="#mobileMenu" className="mobile-menu_btn toolbar-btn color--white">
                                    <i className="ion-navicon"></i>
                                </a>
                            </li>
                            <li class="minicart-wrap">
                                <Link to="cart" class="minicart-btn toolbar-btn">
                                    <div class="minicart-count_area">
                                        <span class="item-count">{productPrices?productPrices.length:''}</span>
                                        <i class="ion-bag"></i>
                                    </div>
                                    <div class="minicart-front_text" >
                                        <span>Cart:</span>
                                        { productPrices != null ? productPrices.map((productPrice,index) => (

                                        <span class="total-price">
                                            (
                                            {productPrice.price + productPrice.price}

                                            )

                                        </span>
                                        )) : <h1>0</h1>
                                }
                                    </div>
                                </Link>
                            </li>
                           <MiniCartSection />
                            <li className="contact-us_wrap">
                                <a href="tel://+123123321345">
                                <i className="ion-android-call"></i>+123 321 345</a>
                            </li>
                        </ul>
                    </div>
                </div>
                 <MiniCartSection />
            </>
        )
    }
}

export default CartHeader;