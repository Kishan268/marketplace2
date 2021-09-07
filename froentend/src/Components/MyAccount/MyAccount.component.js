import {Component} from 'react'
import { Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import {ProfileSchema} from '../../Utils/ValidationSchema/index.js'
import AddressForm from '../Checkout/AddressForm.container.js';
import Popup from '../Popup/Popup.container.js'

class MyAccount extends Component{

	render(){
        const {closeBideModel,userInfo,Logout,get_shipping_address,updateProfile,deleteAddress,AddShippingAddress,isopen,handleChange} = this.props;
        const ordersDetails = userInfo.order_details
        var shippingAddresses = get_shipping_address?get_shipping_address.data:''
		return (
				<>
			<main class="page-content">
            <div class="account-page-area">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3">
                            <ul class="nav myaccount-tab-trigger" id="account-page-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active show" id="account-dashboard-tab" data-toggle="tab" href="#account-dashboard" role="tab" aria-controls="account-dashboard" aria-selected="true">Dashboard</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="account-orders-tab" data-toggle="tab" href="#account-orders" role="tab" aria-controls="account-orders" aria-selected="false">Orders</a>
                                </li>
                                {/*<li class="nav-item">
                                    <a class="nav-link" id="account-address-tab" data-toggle="tab" href="#account-address" role="tab" aria-controls="account-address" aria-selected="false">Addresses</a>
                                </li>*/}
                                <li class="nav-item">
                                    <a class="nav-link" id="account-details-tab" data-toggle="tab" href="#account-details" role="tab" aria-controls="account-details" aria-selected="false">Account Details</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="account-details-tab" data-toggle="tab" href="#account-details" role="tab" aria-controls="account-details" aria-selected="false">Bid Details</a>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" id="account-logout-tab" onClick={()=>{Logout()}} role="tab" aria-selected="false">Logout</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-9">
                            <div class="tab-content myaccount-tab-content" id="account-page-tab-content">
                                <div class="tab-pane fade active show" id="account-dashboard" role="tabpanel" aria-labelledby="account-dashboard-tab">
                                    <div class="myaccount-dashboard">
                                        <p>Hello <b>{userInfo.name}</b> (not {userInfo.f_name}{userInfo.l_name}? <a href="#" onClick={()=>{Logout()}}>Sign
                                                out</a>)</p>
                                        <p>From your account dashboard you can view your recent orders, manage your shipping and
                                            billing addresses and <a href="javascript:void(0)">edit your password and account details</a>.</p>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="account-orders" role="tabpanel" aria-labelledby="account-orders-tab">
                                    <div class="myaccount-orders">
                                        <h4 class="small-title">MY ORDERS</h4>
                                        <div class="table-responsive">
                                            <table class="table table-bordered table-hover">
                                                <tbody>
                                                    <tr>
                                                        <th>S.No</th>
                                                        <th>ORDER ID</th>
                                                        <th>DATE</th>
                                                        <th>STATUS</th>
                                                        <th>TOTAL</th>
                                                        <th></th>
                                                    </tr>
                                                    {ordersDetails ? ordersDetails.map((ordersDetail,index)=>(

                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td><a class="account-order-id" href="javascript:void(0)">{ordersDetail.invoice_number}</a></td>
                                                        <td>{ordersDetail.created_at}</td>
                                                        <td>On Hold</td>
                                                        <td>{ordersDetail.total_price} for {ordersDetail.total_item} items</td>
                                                        <td>
                                                        <Link to={`/order-details/${ordersDetail.id}`}  class="uren-btn uren-btn_dark uren-btn_sm"><span>View</span></Link >
                                                        </td>
                                                    </tr>
                                                    )) : ''}
                                                   
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                              {/*  <div class="tab-pane fade" id="account-address" role="tabpanel" aria-labelledby="account-address-tab">
                                                                 
                                                              </div>*/}
                                <div class="tab-pane fade" id="account-details" role="tabpanel" aria-labelledby="account-details-tab">
                                     
                                    <div class="myaccount-details">
                                     <Formik
                                         initialValues={{...userInfo}}
                                         validationSchema={ProfileSchema}
                                         onSubmit={values => {
                                          updateProfile(values)
                                         }}
                                    >
                                      {({ errors, touched }) => (
                                        <Form className="uren-form">
                                            <div class="uren-form-inner">
                                                <div class="single-input single-input-half">
                                                    <label for="account-details-firstname">First Name*</label>
                                                    <Field type="text" 
                                                    name="f_name"
                                                />
                                                <p style={{color:"red",fontSize:"14px"}}>{errors.f_name}</p>

                                                </div>
                                                <div class="single-input single-input-half">
                                                    <label for="account-details-lastname">Last Name*</label>
                                                    <Field type="text" 
                                                    id="account-details-lastname" 
                                                    name="l_name"
                                                    />

                                                <p style={{color:"red",fontSize:"14px"}}>{errors.l_name}</p>

                                                </div>
                                                <div class="single-input">
                                                    <label for="account-details-email">Email*</label>
                                                    <Field type="email" 
                                                    id="account-details-email"
                                                    name="email"
                                                    />
                                                <p style={{color:"red",fontSize:"14px"}}>{errors.email}</p>

                                                </div>
                                                <div class="single-input">
                                                    <label for="account-details-oldpass">Current Password(leave blank to leave
                                                        unchanged)</label>
                                                    <Field type="current_password" 
                                                    name="current_password"

                                                    id="account-details-oldpass"/>
                                                <p style={{color:"red",fontSize:"14px"}}>{errors.current_password}</p>

                                                </div>
                                                <div class="single-input">
                                                    <label for="account-details-newpass">New Password (leave blank to leave
                                                        unchanged)</label>
                                                    <Field type="password" 
                                                    name="new_password"
                                                    id="account-details-newpass"/>
                                                <p style={{color:"red",fontSize:"14px"}}>{errors.new_password}</p>

                                                </div>
                                                <div class="single-input">
                                                    <label for="account-details-confpass">Confirm New Password</label>
                                                    <Field type="password" 
                                                    name="confirm_password"
                                                    id="account-details-confpass"/>
                                                <p style={{color:"red",fontSize:"14px"}}>{errors.confirm_password}</p>

                                                </div>
                                                <div class="single-input">
                                                    <button class="uren-btn uren-btn_dark" type="submit"><span>SAVE
                                                    CHANGES</span></button>
                                                </div>
                                            </div>
                                        </Form>  
                                      )}
                                    </Formik>
                                    </div>
                                    <hr />
                                    <div class="myaccount-address">
                                        <p>The following addresses will be used on the checkout page by default.</p>
                                        <div class="row">
                                            <div class="col">
                                                <h4 class="small-title">PERSONAL ADDRESS</h4>
                                                <address>
                                                    {userInfo.name}&nbsp;
                                                    {userInfo.billing_address}&nbsp;
                                                    {userInfo.l_name}&nbsp;
                                                    {userInfo.l_name}&nbsp;
                                                    {userInfo.city}&nbsp;
                                                    {userInfo.state}&nbsp;
                                                    {userInfo.zip_code}&nbsp;
                                                    {userInfo.email}&nbsp;
                                                    {userInfo.phone_no}&nbsp;
                                                </address>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="myaccount-address">
                                    <h4 class="small-title">SHIPPING ADDRESS</h4>
                                    <button className="btn btn-primary" onClick={()=>{AddShippingAddress()}}>Add New Address</button>
                                        <p>The following addresses will be used on the checkout page by default.</p>
                                        <div class="row">
                                        {shippingAddresses ? shippingAddresses.map((shippingAddresses,index)=>(
                                            <div class="col-md-6">
                                                <div className="card">
                                                    <a onClick={()=>{deleteAddress(shippingAddresses)}}><i className="fa fa-trash text-danger"></i></a>
                                                    <a onClick={()=>{AddShippingAddress()}}><i className="fa fa-edit text-warning"></i></a>
                                                    <address>
                                                        {shippingAddresses.f_name}&nbsp;
                                                        {shippingAddresses.city}&nbsp;
                                                        {shippingAddresses.state}&nbsp;
                                                        {shippingAddresses.zip_code}&nbsp;
                                                        {shippingAddresses.email}&nbsp;
                                                        {shippingAddresses.phone_no}&nbsp;
                                                        {shippingAddresses.alternative_phone_no}
                                                    </address>
                                                </div>
                                           </div>
                                            
                                        )):''
                                    }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
       <Popup
        width="800px"
        margin-left="-100px"
        isopen= {isopen}
        title= {'New Address'}
        content = {  <AddressForm {...this.props}/> } 
      />
    	</>
    )
	}
}

export default MyAccount;