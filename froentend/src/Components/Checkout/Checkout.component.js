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


const { Panel } = Collapse;

class Checkout extends Component {
    
renderAddress(user_information,cartDatas){
    return(
            <>
            <Radio name="cart_id"  value={cartDatas.id}/>
               {user_information.f_name} {user_information.l_name}
                {user_information.billing_address}
                {user_information.city}
                {user_information.district_town}
                {user_information.country}
            </>    
                   
        )
}

    render(){
    const userInfo = this.props
    const {checkOut,isopen,orderDetails,continueShoping,user_information,billingAddress} = this.props
    const cartDatas =userInfo.cardData

        return(
            <>
                <div className="container-fluid">
                    <form  onSubmit={((event)=>billingAddress(event))}>
                        <input type="hidden" name="order_type" value="check_out" />
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <Collapse defaultActiveKey={['1']} >
                                     <Panel header="Default Address" key="1">
                                      {this.renderAddress(user_information,cartDatas)}
                                    </Panel> 
                                    <Panel header="Add a new address" key="2">
                                    {
                                        /*<AddressForm/>*/
                                    }
                                    <input type="hidden" name="address_type" value="custome_address" />
                                    
                                    </Panel>
                                </Collapse>       
                            </div>
                            <div className="col-lg-6 col-12">   
                                <OrderDetails cardDatas={cartDatas}/>
                            </div>    
                        </div>
                    </form>
                </div>
                {/*{isopen ? <SweetAlert
                   success
                   title="Woot!"
                   onConfirm={continueShoping}
                 >
                  We have recived the order!
                 </SweetAlert>
         :''}   */}     
            </>
        )
    }
}

export default Checkout;