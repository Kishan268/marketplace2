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


const { Panel } = Collapse;

class Checkout extends Component {
    
    renderAddress(){
        return(
                <>
                    <Radio name="address" value="2">
                        Shubham Singh
                        105 Hendon Avenue
                        Mount Albert
                        Auckland 1025
                        New Zealand
                    </Radio>
                </>    
            )
    }

    render(){
    const userInfo = this.props
    const {checkOut,isopen,orderDetails,continueShoping} = this.props
    const cartDatas =userInfo.cardData

        return(
            <>
                <div className="container mt-5 mb-4">
                    <div className="container-fluid">
                        
                        <form  onSubmit={((event)=>checkOut(event,cartDatas.id))}>
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <Collapse defaultActiveKey={['1']} >
                                        <Panel header="Select the address" key="1">
                                          {this.renderAddress()}
                                        </Panel> 
                                        <Panel header="Add a new address" key="2">
                                            <AddressForm/>
                                        </Panel>
                                    </Collapse>       
                                </div>
                                <div className="col-lg-6 col-12">   
                                    <OrderDetails cardDatas={cartDatas}/>
                                </div>    
                            </div>
                        </form>

                    </div>
                </div>
                {isopen ? <SweetAlert
                          success
                          title="Woot!"
                          onConfirm={continueShoping}
                        >
                         We have recived the order!
                        </SweetAlert>
                :''}        
            </>
        )
    }
}

export default Checkout;