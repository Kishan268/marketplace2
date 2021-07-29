import {Component} from 'react'
import MiniCartSection from '../../MiniCart/MiniCart.container'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
class CartHeader extends Component {
    
    render(){
         const {cardData} = this.props
        
        //  console.log(this.props.data.length)
        console.log(cardData)
        if(!cardData){
            return <div>Loding...</div>
        }

         const {
            cart_items,
            item_qty
        } = cardData

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
                                        <span class="item-count">{item_qty}</span>
                                        <i class="ion-bag"></i>
                                    </div>
                                    
                                </Link>
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