import {Component} from 'react'
import { BrowserRouter as Router,Link} from "react-router-dom";
import AddressForm from '../Checkout/AddressForm.container.js';
import { Collapse ,Radio } from 'antd';
const { Panel } = Collapse;
class BuyNow extends Component {
    
    renderAddress(user_information){
        return(
                <>
                    <Radio type="radio" name="address_type"  value="default_address"/>

                       {user_information.f_name} {user_information.l_name}
                        {user_information.billing_address}
                        {user_information.city}
                        {user_information.district_town}
                        {user_information.country}
                        105 Hendon Avenue
                        Mount Albert
                        Auckland 1025
                </>    
            )
    }

   
    render(){

        const {cardData,products,user_information,billingAddress,handleClickOpen,isopen} = this.props
        console.log(cardData)

        return(
            <>
               <div className="row">
                    <div className="col-md-12 col-lg-12 " style={{fontSize:'135%'}}>
                        <form onSubmit={((event)=>billingAddress(event))}>
                            <input type="hidden" name="order_type" value="buy_now" />
                            <input type="hidden" name="product_id" value={products.pro_id} />
                            <input type="hidden" name="quantity" value={products.buyQty} />
                            <input type="hidden" name="user_id" value={user_information.id} />


                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <Collapse defaultActiveKey={['1']} >
                                        <Panel header="Select the address" key="1">
                                          {this.renderAddress(user_information)}
                                        </Panel> 
                                        <Panel header="Add a new address" key="2">
                                        <AddressForm/>
                                        <input type="hidden" name="address_type" value="custome_address" />
                                        
                                        </Panel>
                                    </Collapse>       
                                </div>
                                <div className="col-lg-6 col-12">   
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
                                                    
                                        
                                                <tr className="cart_item">
                                                    <td className="cart-product-name">{products.name}<strong className="product-quantity">
                                                    &nbsp; × {products?products.buyQty:1}</strong></td>
                                                    <td className="cart-product-total"><span className="amount">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    ${products?products.discounted_price:'' *  products?products.buyQty:0}</span></td>
                                               
                                                </tr>
                                                
                                               
                                                </tbody>
                                                <tfoot>
                                                    <tr className="cart-subtotal">
                                                        <th>Cart Subtotal</th>
                                                        <td><span className="amount">${products.price* products.buyQty}</span></td>
                                                    </tr>
                                                    <tr className="order-total">
                                                        <th>Order Total</th>
                                                        <td><strong><span className="amount">${products ? products.discounted_price:0 * products?products.buyQty:0}</span></strong></td>
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
                                                                <input type="radio" name="type_of_shiping" value="case_on_delivery" />
                                                            </h5>
                                                        </div>
                                                       
                                                    </div>
                                                   
                                                    
                                                </div>
                                                <div className="order-button-payment">

                                                    <input value="Place order" type="submit"  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </form>

                    </div>
                </div>
          
            </>
        )
    }
}

export default BuyNow;