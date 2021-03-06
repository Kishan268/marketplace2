import {Component} from 'react'
import MiniCartSection from '../../MiniCart/MiniCart.container'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
class CartHeader extends Component {
    
    render(){
        var item_qty = 0;
         const {
                cardData,
                isLogin,
                } = this.props
        if(cardData){        
            item_qty = cardData.item_qty
        }
        else{
            var item_qty = 0
        }
        return(
            <>
               <div className="custom-cart_col col-12">
                    <div className="header-right_area1">
                        
                        <ul className="cartUl">
                            <li className="mobile-menu_wrap d-flex d-lg-none">
                                <a href="#mobileMenu" className="mobile-menu_btn toolbar-btn color--white">
                                    <i className="ion-navicon"></i>
                                </a>
                            </li>
                            <li class="minicart-wrap">
                                <Link to="/cart" class="minicart-btn toolbar-btn">
                                    <div class="minicart-count_area">
                                        <span class="item-count1">{isLogin ? item_qty:0}</span>
                                        <i class="ion-bag"></i>
                                    </div>
                                    
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default CartHeader;