import {PureComponent} from 'react'

class AddressForm extends PureComponent{
	render(){
		return(
				<>
					<div className="checkbox-form">
                        <h3>Billing Details</h3>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="checkout-form-list">
                                    <label>Country <span className="required">*</span></label>
                                     <div className="checkout-form-list">
                                        <input type="text" 
                                        name="country"
                                        required
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label>First Name <span className="required">*</span></label>
                                    <input placeholder="" 
                                    type="text"
                                    name="f_name"
                                    required
                                    checkout-form-list/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label>Last Name <span className="required">*</span></label>
                                    <input placeholder=""
                                     type="text" 
                                     name="l_name"
                                     required
                                     />
                                </div>
                            </div>
                            
                            <div className="col-md-12">
                                <div className="checkout-form-list">
                                    <label>Address <span className="required">*</span></label>
                                    <input placeholder="Street address" 
                                    type="text"
                                    name="address"
                                    required

                                    />
                                </div>
                            </div>
                        {
                           /* <div className="col-md-12">
                                <div className="checkout-form-list">
                                    <input placeholder="Apartment, suite, unit etc. (optional)" type="text"/>
                                </div>
                            </div>*/
                        }
                            <div className="col-md-12">
                                <div className="checkout-form-list">
                                    <label> City <span className="required" >*</span></label>
                                    <input type="text" 
                                    name="city"
                                    required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label>State  <span className="required">*</span></label>
                                    <input placeholder=""
                                    type="text" 
                                    name="state"
                                    required

                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label>Postcode / Zip <span className="required">*</span></label>
                                    <input placeholder="" 
                                    type="text"
                                    name="zip_code"
                                    required

                                     />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label>Email Address <span className="required">*</span></label>
                                    <input placeholder="" 
                                    type="email"
                                    name="email"
                                    required

                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label>Phone <span className="required">*</span></label>
                                    <input type="text" 
                                    name="phone_no"
                                    required

                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label>Alternative Phone <span className="required">*</span></label>
                                    <input type="text" 
                                    name="alternative_phone_no"

                                    />
                                </div>
                            </div>
                        </div>
                        <div className="different-address">
                            <div className="order-notes">
                                <div className="checkout-form-list checkout-form-list-2">
                                    <label>Order Notes</label>
                                    <textarea 
                                    id="checkout-mess"
                                    name="notes"

                                     cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
				</>
			)
	}
}

export default AddressForm;