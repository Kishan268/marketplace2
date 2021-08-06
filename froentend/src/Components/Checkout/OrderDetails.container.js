import {PureComponent} from'react'
import OrderDetails from './OrderDetails.component.js';

class OrderDetailsContainer extends PureComponent{
	render(){
		return(
				<OrderDetails
					{...this.props}
				/>
			)
	}
}

export default OrderDetailsContainer;