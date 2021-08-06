import {PureComponent} from 'react'

class AddressForm extends PureComponent{
	render(){
		return(
				<>
					<div className="checkbox-form">
                        <h3>Billing Details</h3>
                        <div className="row">
                            <div className="col-md-12">
                            <div className="col-md-12">
                                <div className="checkout-form-list">
                                    <label>Country <span className="required">*</span></label>
                                    <input placeholder=""
                                     type="text"/>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label>First Name <span className="required">*</span></label>
                                    <input placeholder="" type="text"checkout-form-list/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label>Last Name <span className="required">*</span></label>
                                    <input placeholder="" type="text" />
                                </div>
                            </div>
                            
                            <div className="col-md-12">
                                <div className="checkout-form-list">
                                    <label>Address <span className="required">*</span></label>
                                    <input placeholder="Street address" type="text" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="checkout-form-list">
                                    <input placeholder="Apartment, suite, unit etc. (optional)" type="text"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="checkout-form-list">
                                    <label>Town / City <span className="required" >*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label>State / County <span className="required">*</span></label>
                                    <input placeholder="" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label>Postcode / Zip <span className="required">*</span></label>
                                    <input placeholder="" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label>Email Address <span className="required">*</span></label>
                                    <input placeholder="" type="email" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label>Phone <span className="required">*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="different-address">
                            <div className="order-notes">
                                <div className="checkout-form-list checkout-form-list-2">
                                    <label>Order Notes</label>
                                    <textarea id="checkout-mess" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
				</>
			)
	}
}

export default AddressForm;