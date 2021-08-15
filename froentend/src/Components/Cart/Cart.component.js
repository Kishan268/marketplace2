import {Component} from 'react'
import { BrowserRouter as Router,Link} from "react-router-dom";
import EmptyCart from '../../image/emptyCart.svg'
import { ToastContainer, toast } from 'react-toastify';
import Popup from '../Popup/Popup.container.js'
import BuyNowComponent from '../BuyNow/BuyNow.container.js';
import CheckOutComponent from '../Checkout/Checkout.container.js';
class Car extends Component {
    
    renderEmptyCart(){
        return(
                <div class="uren-cart-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 text-center">
                                <img src={EmptyCart}/>
                            </div>
                            <div class="col-12 text-center emptyCart">
                                Cart is empty
                            </div>
                        </div>
                    </div>
                </div>            
            )
    }

    render(){
        const{
            isLoading,
            cardData,
            updateCart,
            isRemove,
            deleteCartItem,
            isopen,
            closeBideModel,
            getCartData,
            handleClickOpenCheckOut
        } = this.props
        
        if(!cardData || cardData.length===0 || isLoading){
            return this.renderEmptyCart()
        }

        return(
            <>
               <div class="uren-cart-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <form action="javascript:void(0)">
                            <div class="table-content table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="uren-product-remove">remove</th>
                                            <th class="uren-product-thumbnail">images</th>
                                            <th class="cart-product-name">Product</th>
                                            <th class="uren-product-price">Unit Price</th>
                                            <th class="uren-product-quantity">Quantity</th>
                                            <th class="uren-product-subtotal">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    { cardData != null ? cardData.cart_items.map((value,index) => (

                                        <tr>

                                            <td class="uren-product-remove">
                                                <button onClick={(()=>deleteCartItem(value.id))} href="javascript:void(0)"><i class="fa fa-trash text-danger" title="Remove"></i></button>
                                            </td>
                                            <td class="uren-product-thumbnail">
                                                <a href="javascript:void(0)">
                                                    <img src={value.image_path} alt="Uren's Cart Thumbnail" width="50px" height ="50px"/>
                                                </a>
                                            </td>
                                            <td class="uren-product-name">
                                                <a href="javascript:void(0)">{value.name}</a></td>
                                            <td class="uren-product-price"><span class="amount">${value.unit_price}</span></td>
                                            <td class="quantity">
                                                <div class="input-group btn-block" style={{maxWidth: '200px'}}>
                                                    <span class="input-group-btn">
                                                        <button disabled={value.isRemove ? false : true} onClick={(()=>updateCart('minus',value.id,value.unit_price,value.discount_amount))} data-toggle="tooltip" title="" class="cart-btn  btn btn-primary" data-original-title="Update">
                                                            <i class="fa fa-minus"></i>
                                                        </button>
                                                    </span>
                                                    <input type="text" name="quantity" disabled="true" value={value.quantity} size="1"  class="cart-input form-control"/>
                                                    <span class="input-group-btn">
                                                        <button onClick={(()=>updateCart('plus',value.id,value.unit_price,value.discount_amount))}  data-toggle="tooltip" title="" class="cart-btn btn btn-primary" data-original-title="Update">
                                                            <i class="fa fa-plus"></i>
                                                        </button>
                                                    </span>  
                                                </div>
                                            </td>
                                            <td class="product-subtotal"><span class="amount">${value.total_price}</span></td>
                                        </tr>
                                        )) : <h1>0</h1>
                                    }
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="coupon-all">
                                        <div class="coupon">
                                            <input id="coupon_code" class="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text"/>
                                            <input class="button" name="apply_coupon" value="Apply coupon" type="submit"/>
                                        </div>
                                        <div class="coupon2">
                                            <input class="button" name="update_cart" value="Update cart" type="submit"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5 ml-auto">
                                    <div class="cart-page-total">
                                        <h2>Cart totals</h2>
                                        <ul>
                                            <li>Subtotal <span>${cardData.total_price}</span></li>
                                            <li>Total <span>${cardData.amount }</span></li>
                                        </ul>
                                        <a onClick={()=>{handleClickOpenCheckOut()}}>Proceed to checkout</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
         <Popup
                width="800px"
                margin-left="-100px"
                isopen= {isopen}
                title= {'Buy Now'}
                content = {<CheckOutComponent {...this.props}/> } 
              />
                <ToastContainer />
        
            </>
        )
    }
}

export default Car;