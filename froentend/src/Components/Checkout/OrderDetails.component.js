import {PureComponent} from 'react'

class OrderDetails extends PureComponent{
	render(){
		const{cardDatas} = this.props
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
                                <td className="cart-product-name">{cartData.name}<strong className="product-quantity">
                                × {cartData.quantity}</strong></td>
                                <td className="cart-product-total"><span className="amount">${cartData.total_price}</span></td>
                           
                            </tr>
                            )
                            
                            ) : ''
                            }
                            </tbody>
                            <tfoot>
                                <tr className="cart-subtotal">
                                    <th>Cart Subtotal</th>
                                    <td><span className="amount">${cardDatas.amount}</span></td>
                                </tr>
                                <tr className="order-total">
                                    <th>Order Total</th>
                                    <td><strong><span className="amount">${cardDatas.amount}</span></strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="payment-method">
                        <div className="payment-accordion">
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header" id="#payment-1">
                                        <h5 className="panel-title">
                                            <a href="javascript:void(0)" className="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Direct Bank Transfer.
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Make your payment directly into our bank account. Please use your Order
                                                ID as the payment
                                                reference. Your order won’t be shipped until the funds have cleared in
                                                our account.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card actives">
                                    <div className="card-header" id="#payment-2">
                                        <h5 className="panel-title">
                                            <a href="javascript:void(0)" className="" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                Cheque Payment
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse show" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Make your payment directly into our bank account. Please use your Order
                                                ID as the payment
                                                reference. Your order won’t be shipped until the funds have cleared in
                                                our account.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="#payment-3">
                                        <h5 className="panel-title">
                                            <a href="javascript:void(0)" className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                PayPal
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Make your payment directly into our bank account. Please use your Order
                                                ID as the payment
                                                reference. Your order won’t be shipped until the funds have cleared in
                                                our account.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-button-payment">
                                <input value="Place order" type="submit"  />
                            </div>
                        </div>
                    </div>
                </div>
			)
	}
}
export default OrderDetails;