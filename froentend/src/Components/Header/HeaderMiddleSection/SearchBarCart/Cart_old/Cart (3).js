import {Component} from 'react'

function Cart (props) {
    console.warn(props.data.length)
        return(
            <>
                <div class="elementor-widget-container">
                    <div class="top-form top-form-minicart flashmart-minicart2 pull-right">
                        <div class="top-minicart-icon pull-right">
                            <a class="cart-contents" href="https://demo.wpthemego.com/themes/sw_flashmart/cart/" title="View your shopping cart"><span class="minicart-numbers">{props.data.length}</span>Item(s)</a>
                        </div>
                        <div class="wrapp-minicart">
                            <div class="minicart-padding">
                                <div class="number-item">There are <span class="item"> item(s)</span> in your cart</div>
                                <ul class="minicart-content"></ul>
                                <div class="cart-checkout">
                                    <div class="price-total">
                                        <span class="label-price-total">Subtotal:</span>
                                        <span class="price-total-w">
                                            <span class="price">
                                                <span class="woocommerce-Price-amount amount">
                                                    <bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>0.00</bdi>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div class="cart-links clearfix">
                                        <div class="cart-link"><a href="https://demo.wpthemego.com/themes/sw_flashmart/cart/" title="Cart">View Cart</a></div>
                                        <div class="checkout-link"><a href="https://demo.wpthemego.com/themes/sw_flashmart/checkout/" title="Check Out">Check Out</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

}

export default Cart;