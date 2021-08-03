import {PureComponent} from 'react'
import AddressComponent from './AddressForm.component.js';

class AddressFormContainer extends PureComponent{
	render(){
		return(
				<AddressComponent/>
			)
	}
}

export default AddressFormContainer;