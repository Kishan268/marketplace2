import {Component} from 'react'
import { BrowserRouter as Router,Link} from "react-router-dom";
import AddressForm from '../Checkout/AddressForm.container.js';
import { Formik, Form, Field } from 'formik';
import {CheckOutSchema} from '../../Utils/ValidationSchema/index.js'
import { ToastContainer, toast } from 'react-toastify';
import Popup from '../Popup/Popup.container.js'

import { Collapse ,Radio } from 'antd';
const { Panel } = Collapse;

class BuyNow extends Component {
    
   renderAddress(user_information,get_shipping_address,errors,Field){
        
    const {deleteAddress} = this.props
    return(
            <>
           { 
            /*<div className="card">
               <Radio name="cart_id"  value={cartDatas.id}/>
                  {user_information.full_name}&nbsp;
                   {user_information.billing_address}&nbsp;
                   {user_information.city}&nbsp;
                   {user_information.district_town}&nbsp;
                   {user_information.phone_no}&nbsp;
                   {user_information.country}

               </div>*/
            }
               {
                get_shipping_address ? get_shipping_address.data.map((shippingAddr,index)=>(
                    <>
                    <br/>
                    <div className="card">
                    <span >
                    <a onClick={()=>{deleteAddress(shippingAddr.id)}} ><i className="fa fa-trash text-danger shipping-address" style={{float: "right;"}} title="Delete"></i></a>
                        
                    </span>
                        <Field type="radio" name="address_id"  value={shippingAddr.id} title="Select"/>
                        <p style={{color:"red",fontSize:"14px"}}>{errors.address_id}</p>
                        {shippingAddr.f_name}&nbsp;
                        {shippingAddr.city}&nbsp;
                        {shippingAddr.state}&nbsp;
                        {shippingAddr.zip_code}&nbsp;
                        {shippingAddr.phone_no}&nbsp;
                        {shippingAddr.alternative_phone_no}&nbsp;
                        {shippingAddr.email}&nbsp;
                        {shippingAddr.country}&nbsp;
                    </div>
                    </>
                )) : 'asdsadas'
            }
            </>    
                   
        )
}

   
    render(){

        const {cardData,
            products,
            user_information,
            billingAddress,
            handleClickOpen,
            isopen,
            get_shipping_address,
            popupStatus,
            closeBideModel,
            addressModelOpen,
            OrderDetails
        } = this.props

        const shippingAddress = get_shipping_address.data

        return(
            <>
            <Formik
                 initialValues={{
                   address_id: '',
                   type_of_shiping: '',
                   product_id: '',
                 }}

                 validationSchema={CheckOutSchema}
                 onSubmit={values => {
                  billingAddress(values)
                 }}
            >
              {({ errors, touched,setFieldValue  }) => (
               <div className="row">
                  <div className="col-md-12 col-lg-12 " style={{fontSize:'135%'}}>
                    <Form>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <Collapse defaultActiveKey={['1']} >
                                     <Panel header="Shipping Addresses" key="1">
                                      {this.renderAddress(user_information,get_shipping_address,errors,Field)}
                                    </Panel>  
                                    <span><a onClick={()=>{addressModelOpen()}}><i className="fa fa-plus">Add New Address</i></a></span> 
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
                                                            <Field type="radio" name="type_of_shiping" value="case_on_delivery" />
                                                        </h5>
                                                    </div>
                                                    <p style={{color:"red",fontSize:"14px"}}>{errors.type_of_shiping}</p>
                                                </div>
                                            </div>
                                            <div className="order-button-payment">
                                                <button type="submit" className="btn btn-warning">{shippingAddress !=0 ? "Place order" :'Please add new address first'}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>    
                            </div>
                           </Form>  
                        </div>
                    </div>
                  )}
                </Formik>
                {popupStatus=="address" ?     
               <Popup
                    width="800px"
                    margin-left="-100px"
                    isopen= {isopen}
                    title= {'New Address'}
                    content = {  <AddressForm {...this.props}/> } 
                  />
                : ''
            }
            </>
        )
    }
}

export default BuyNow;