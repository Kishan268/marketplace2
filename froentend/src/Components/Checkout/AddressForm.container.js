import {PureComponent} from 'react'
import AddressComponent from './AddressForm.component.js';
import axios from '../../Utils/axios.config.js'
import { ToastContainer, toast } from 'react-toastify';


class AddressFormContainer extends PureComponent{

	addressFormData(values){
		const {closeBideModel} = this.props
		var token = localStorage.getItem('token');
		var data = {
			f_name:values.full_name,
			state:values.state,
			address:values.address,
			city:values.city,
			zip_code:values.zip,
			email:values.email,
			phone_no:values.phone_no,
			alternative_phone_no:values.alternative_phone_no,
			notes:values.notes,
			token:token
		}
		axios.post('/shipping_address/',data).then((result)=>{
			this.setState({isopen:false})	
			toast("Address added successfully!");
			closeBideModel()
			console.log(result.data)
			return result.data;
		}).catch((error)=>{
			toast.error("Something went wrong!");
			console.log(error)
		})
	}

	render(){
		return(
				<>
				<AddressComponent
				{...this.props}
				{...this.state}
				addressFormData={this.addressFormData.bind(this)}
				/>
				<ToastContainer />
				</>
			)
	}
}

export default AddressFormContainer;