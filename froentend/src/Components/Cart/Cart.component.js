import {Component} from 'react'
import { BrowserRouter as Router,Link} from "react-router-dom";
class Car extends Component {
    
    render(){
    const cartDatas = this.props.data.cardData
// console.log(cartDatas)
        return(
            <>
               <div class="uren-cart-area">
            <div class="container-fluid">
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
                                    { cartDatas != null ? cartDatas.map((cartData,index) => (

                                        <tr>

                                            <td class="uren-product-remove">
                                                <button href="javascript:void(0)"><i class="fa fa-trash" title="Remove"></i></button>
                                            </td>
                                            <td class="uren-product-thumbnail">
                                                <a href="javascript:void(0)">
                                                <img src={cartData.image_path} alt="Uren's Cart Thumbnail" width="50px" height ="50px"/></a>
                                            </td>
                                            <td class="uren-product-name"><a href="javascript:void(0)">{cartData.name}</a></td>
                                            <td class="uren-product-price"><span class="amount">${cartData.price}</span></td>
                                            <td class="quantity">
                                                <div class="input-group btn-block" style={{maxWidth: '200px'}}>
                                                    <input type="text" name="quantity[234]" value="1" size="1" class="form-control"/>
                                                    <span class="input-group-btn">
                                                        <button type="submit" data-toggle="tooltip" title="" class="btn btn-primary" data-original-title="Update">
                                                            <i class="fa fa-refresh"></i>
                                                        </button>
                                                        <button type="button" data-toggle="tooltip" title="" class="btn btn-danger" data-original-title="Remove">
                                                            <i class="fa fa-times-circle"></i>
                                                        </button>
                                                    </span>  
                                                </div>
                                            </td>
                                            <td class="product-subtotal"><span class="amount">${cartData.price * cartData.qty}</span></td>
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
                                            <li>Subtotal <span>${cartDatas.price * cartDatas.qty}</span></li>
                                            <li>Total <span>${cartDatas.price * cartDatas.qty}</span></li>
                                        </ul>
                                        <Link to="/checkout">Proceed to checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            </>
        )
    }
}

export default Car;