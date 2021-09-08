import {Component} from 'react'
import { BrowserRouter as Router,Link} from "react-router-dom";
import AddressForm from '../Checkout/AddressForm.container.js';
import { Collapse ,Radio } from 'antd';
const { Panel } = Collapse;

class PlaceBid extends Component {
    
    render(){

        const {products,billingAddress,handleClickOpen,isopen,placeBidFrom,user_information} = this.props
        const img_url = 'http://3.20.234.60/storage';
		console.log(products)
        return(
            <>
            <div className="row">
                <div className="col-md-12 col-lg-12 " style={{fontSize:'135%'}}>
                 <form onSubmit={((event)=>placeBidFrom(event))}>
				 <input  name="user_id" type="hidden" value="44"/>
				 <input  name="product_id" type="hidden" value={products.pro_id}/>
               <div className="row">
                    <div className="col-md-5">
                    	<div className="row ml-2">
	                    	{products.pro_images!=null ? 
	                			<img src='https://i.pinimg.com/originals/87/be/c1/87bec12ab301f78eeccbffa5154924b8.jpg' />
	                		: <img src="https://i.pinimg.com/originals/87/be/c1/87bec12ab301f78eeccbffa5154924b8.jpg" width='500px' height='200px'/>
	                		}
                    	</div>
                    </div>
                    <div className="col-md-7 card-wrapper card-body">
                    	<div className="row ml-4 mr-3">
                			<h3 className="bidTitle ">{products.name}</h3><br /><br />
                			<span>Price <strong>${products.price}</strong></span>
                			
                    	</div>
                    </div>

                    <div className="col-md-8 mt-3">
					    <div className="form-group ">
						  <h4 className="control-label " for="your-bid">Your bid</h4>
						   <div className="input-group-addon">
						   		<input className="form-control" style={{width:'65%'}}  name="your_bid_price" type="text" value={products.price+1}/>
						   </div>
						</div>
					    <div className="form-group ">
						  <h5 className="control-label " for="your-bid">Choose a shipping option</h5>
						   	<input className="chooseShiping-option"  name="shipping_option" type="radio" value={user_information.country+user_information.billing_address}/>
							   <span className="sellerLocated">Buyer must pick-up</span> <br/><span className="sellerLocated">Seller is located in {user_information.country},{user_information.billing_address} </span>
						</div>
					</div>
                
					<div className="col-md-12">
						<h5>Seller accepts payment by </h5>
						<input type="checkbox" className="chooseShiping-option" name="payment_methode" value="Case on Delivery" />
						<span className="caseOndeliveryBid">Case on Delivery</span>
						
						<div className="completePurchase">If you win, you are legally obligated to complete your purchase </div>
						  <div className="form-group mt-4">
							<h5>Reminders</h5>
							 <input className=""  name="reminder_email" type="checkbox" value="reminder_email"/><span className="caseOndeliveryBid">Email me if I'm outbid</span>
						</div>
					</div>
					<div className="col-md-4">
                      <input value="Place Bid" type="submit"  className="form-control btn btn-primary"/>
					</div>
				</div>
				</form>
	          </div>
			</div>
            </>
        )
    }
}

export default PlaceBid;