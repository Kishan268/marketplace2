import {PureComponent} from 'react'

class OrderDetails extends PureComponent{
	render(){
		const{cardDatas,errors,Field,shippingAddress} = this.props
        var address = shippingAddress ? shippingAddress.length :''
		return(
                <div className="your-order">
                    <h3>Your order</h3>
                    <div className="your-order-table table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="cart-product-name">Product</th>
                                    <th className="cart-product-total">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            { cardDatas != null ? cardDatas.cart_items.map((cartData,index) => (
                    
                            <tr className="cart_item">
                                <td className="cart-product-name">{cartData.products_detail.name}<strong className="product-quantity">
                                &nbsp;&nbsp;&nbsp;× {cartData.quantity}</strong></td>
                                <td className="cart-product-total"><span className="amount">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                ${cartData.total_price}</span></td>
                           
                            </tr>
                            )
                            
                            ) : ''
                            }
                            </tbody>
                            <tfoot>
                                <tr className="cart-subtotal">
                                    <th>Cart Subtotal</th>
                                    <td><span className="amount">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${cardDatas.amount}</span></td>
                                </tr>
                                <tr className="order-total">
                                    <th>Order Total</th>
                                    <td><strong><span className="amount">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${cardDatas.amount}</span></strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                   <div className="payment-method">
                        <div className="payment-accordion">
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header" id="#payment-1">
                                    <h4>Payment Methode </h4>
                                        <h5 className="panel-title">
                                        {/* <a href="javascript:void(0)" className="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                           Direct Bank Transfer.
                                       </a>*/}
                                            <label> Case on Delivery</label>
                                            <Field type="radio" name="type_of_shiping" value="case_on_delivery" />

                                        </h5>
                                    </div>
                                    <p style={{color:"red",fontSize:"14px"}}>{errors.type_of_shiping}</p>
                                   
                                </div>
                            </div>
                            <div className="order-button-payment">
                                <button type="submit" className="btn btn-warning">{address !=0 ? "Place order" :'Please add new address first'}</button>
                            </div>
                        </div>
                    </div>
                </div>
			)
	}
}
export default OrderDetails;