import {Component} from 'react'
import { BrowserRouter as Router,Link} from "react-router-dom";
import AddressForm from '../Checkout/AddressForm.container.js';
import { Collapse ,Radio } from 'antd';
const { Panel } = Collapse;

class PlaceBid extends Component {
    
    render(){

        const {products,billingAddress,handleClickOpen,isopen,placeBidFrom,user_information} = this.props
        const img_url = 'http://localhost:8000/storage';
        return(
            <>
            <div className="row">
                <div className="col-md-12 col-lg-12 " style={{fontSize:'135%'}}>
                 <form onSubmit={((event)=>placeBidFrom(event))}>
				 <input  name="user_id" type="hidden" value="44"/>
				 <input  name="product_id" type="hidden" value={products.pro_id}/>
               <div className="row">
                    <div className="col-md-5">
                    	<div className="row">
	                    	{products.pro_images!=null ? 
	                			<img src={img_url+'/'+products.pro_images[0].doc_name} />
	                		: <img src="https://picsum.photos/200/300" width='500px' height='200px'/>
	                		}
                    	</div>
                    </div>
                    <div className="col-md-7 card-wrapper card-body">
                    	<div className="row">
                			<h3>{products.name}</h3><br /><br />
                			<span>Price </span><br />
                			<h4>${products.price}</h4>
                    	</div>
                    </div>

                    <div className="col-md-8 mt-3">
					    <div className="form-group ">
						  <h4 className="control-label " for="your-bid">Your bid</h4>
						   <div className="input-group-addon">
								<i className="fa fa-dollar"></i> 
						   		<input className="form-control"  name="your_bid_price" type="text" value={products.price+1}/>
						   </div>
						</div>
					    <div className="form-group ">
						  <h4 className="control-label " for="your-bid">Choose a shipping option</h4>
						   	<input className=""  name="shipping_option" type="radio" value={user_information.country+user_information.billing_address}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buyer must pick-up <br/>Seller is located in {user_information.country},{user_information.billing_address} 
						</div>
					</div>
                
					<div className="col-md-12">
						<h4>Seller accepts payment by </h4>
						<input type="checkbox" name="payment_methode" value="Case on Delivery" />&nbsp;&nbsp;&nbsp;Case on Delivery
						<h5> </h5>
						<span>If you win, you are legally obligated to complete your purchase </span>
						  <div className="form-group mt-4">
							<h4>Reminders</h4>
							 <input className=""  name="reminder_email" type="checkbox" value="reminder_email"/>&nbsp;&nbsp;&nbsp;&nbsp;Email me if I'm outbid
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