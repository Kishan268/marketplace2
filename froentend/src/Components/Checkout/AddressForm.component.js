import {PureComponent} from 'react'
import { Formik, Form, Field } from 'formik';
import {billingAddressForm} from '../../Utils/ValidationSchema/index.js'
class AddressForm extends PureComponent{
	render(){
        const{addressFormData,user_information,cardData,closeBideModel} = this.props
        // console.log(this.props)

		return(
				<>
             <div className="row">
                <div className="col-md-12 col-lg-12 " style={{fontSize:'135%'}}>
    				    <Formik
                     initialValues={{
                       full_name: '',
                       address: '',
                       city: '',
                       state: '',
                       phone_no: '',
                       zip: '',
                       email: '',
                     }}
                     validationSchema={billingAddressForm}
                     onSubmit={values => {
                      addressFormData(values)
                        // console.log(events)
                     }}
                    >
                {({ errors, touched }) => (
                    <Form className="form-group">
                        <div className="checkbox-form">
                        <h3>Shipping Details</h3>
                        <div className="row">
                          
                           <div className="col-md-6 form-group error-div">
                              <label>Full Name:</label>
                              <Field 
                                type="text" 
                                name="full_name"
                                className="form-control" 
                                placeholder="Enter Full name" / >
                            <p style={{color:"red",fontSize:"14px"}}>{errors.full_name}</p>

                           </div> 
                            <div className="col-md-6 form-group error-div">
                              <label>Phone number</label>
                               <Field 
                                type="number" 
                                name="phone_no"
                                className="form-control " 
                                placeholder="Enter Phone number" />
                            <p style={{color:"red",fontSize:"14px"}}>{errors.phone_no}</p>
                           </div> 
                            <div className="col-md-6 form-group error-div">
                              <label>Alternative number</label>
                               <Field 
                                type="number" 
                                name="alternative_phone_no"
                                className="form-control " 
                                placeholder="Enter Alternative number" />
                            <p style={{color:"red",fontSize:"14px"}}>{errors.phone_no}</p>
                           </div> 
                            
                            
                            <div className="col-md-6 form-group error-div">
                              <label> Select City: </label>
                              <Field as="select" name="city" className="form-control">
                                <option value="">Select City</option>
                                <option value="Kaikohe">Kaikohe</option>
                                </Field>
                                 <p style={{color:"red",fontSize:"14px"}}>{errors.city}</p>
                           </div>
                          
                            <div className="col-md-6 form-group error-div">
                              <label> State: </label>
                              <Field as="select" name="state" className="form-control">
                              <option value="">Select State</option>
                              <option value="Auckland">Auckland</option>
                                        
                              </Field>
                              <p style={{color:"red",fontSize:"14px"}}>{errors.state}</p>
                           </div>
                             <div className="col-md-6 form-group error-div">
                               <label>Address:</label>
                               <Field 
                                type="text" 
                                name="address"
                                className="form-control" 
                                placeholder="Enter Address" />
                                <p style={{color:"red",fontSize:"14px"}}>{errors.address}</p>
                            </div> 
                           <div className="col-md-6 form-group error-div">
                            <label for="zip">Zip Code:</label>
                            <Field 
                                type="text" 
                                name="zip"
                                className="form-control" 
                                placeholder="Enter zip code" />
                            <p style={{color:"red",fontSize:"14px"}}>{errors.zip}</p>
                             </div>
                           <div className="col-md-6 form-group error-div">
                            <label for="email">Email:</label>
                             <Field 
                                type="text" 
                                name="email"
                                className="form-control " 
                                placeholder="Enter Email" />
                            <p style={{color:"red",fontSize:"14px"}}>{errors.email}</p>

                         </div>
                        </div>
                        <div className="different-address">
                            <div className="order-notes">
                                <div className="checkout-form-list checkout-form-list-2">
                                    <label>Order Notes</label>
                                    <Field as="textarea"  
                                    id="checkout-mess"
                                    name="notes"
                                     cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery."></Field>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className="order-button-payment">
                    <div className="form-group">
                      <button className="btn float-left btn-warning" >Save Address</button>
                    </div>
                  </div>
                </Form>  
                )}
              </Formik> 
            </div>
          </div>   
				</>
			)
	}
}

export default AddressForm;