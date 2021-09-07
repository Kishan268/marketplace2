import {Component} from 'react'
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Collapse ,Radio } from 'antd';
import SweetAlert from 'react-bootstrap-sweetalert'; 
    
import AddressForm from './AddressForm.container.js';
import OrderDetails from './OrderDetails.container.js';
import Popup from '../Popup/Popup.container.js'
import SuccessPage from '../SuccessPage/SuccessPage.container.js';
import { Formik, Form, Field } from 'formik';
import {CheckOutSchema} from '../../Utils/ValidationSchema/index.js'
import { ToastContainer, toast } from 'react-toastify';

const { Panel } = Collapse;

class Checkout extends Component {
    
renderAddress(user_information,cartDatas,shippingAddress,errors,Field){
        
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
                {shippingAddress ? shippingAddress.map((shippingAddr,index)=>(
                <>
                    <br/>
                    <div className="card">
                    <span >
                    <a onClick={()=>{deleteAddress(shippingAddr.id)}} ><i className="fa fa-trash text-danger shipping-address" style={{float: "right;"}} title="Delete"></i></a>
                    </span>
                        <Field type="radio" name="address_id"  value={shippingAddr.id} title="Select Address"/>
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
    const userInfo = this.props
    const {
        checkOut,
        isopen,
        orderDetails,
        continueShoping,
        user_information,
        billingAddress,
        addressModelOpen,
        popupStatus,
        closeBideModel,
        get_shipping_address
    } = this.props
    const cartDatas = userInfo.cardData
    const shippingAddress = get_shipping_address.data
        return(
            <>
             <Formik
                initialValues={{
                   address_id:[],
                   type_of_shiping: '',
                   cart_id: '',
                }}
                validationSchema={CheckOutSchema}
                onSubmit={values => {
                  billingAddress(values)
               }}
            >
            {({ errors, touched }) => (
                <div className="container-fluid">
                    <Form>
                    {/*<form  onSubmit={((event)=>billingAddress(event))}>*/}
                        <input type="hidden" name="order_type" value="check_out" />
                        <input type="hidden" name="cart_id"  value={cartDatas.id}/>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <Collapse defaultActiveKey={['1']} >
                                    <Panel header="Shipping Addresses" key="1">
                                      {this.renderAddress(user_information,cartDatas,shippingAddress,errors,Field)}
                                    </Panel>  
                                    <span><a onClick={()=>{addressModelOpen()}}><i className="fa fa-plus">Add New Address</i></a></span> 
                                </Collapse>       
                            </div>
                            <div className="col-lg-6 col-12">   
                                <OrderDetails 
                                    cardDatas={cartDatas}
                                    errors={errors}
                                    Field={Field}
                                    shippingAddress={shippingAddress}
                                />
                            </div>    
                        </div>
                   </Form>  
                </div>
            )}
            </Formik>
                {/*{isopen ? <SweetAlert
                   success
                   title="Woot!"
                   onConfirm={continueShoping}
                 >
                  We have recived the order!
                 </SweetAlert>
         :''}   */}
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
        <ToastContainer/>
        </>
    )
    }
}

export default Checkout;