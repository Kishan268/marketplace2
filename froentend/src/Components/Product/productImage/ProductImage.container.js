import {PureComponent} from 'react'
import {connect} from 'react-redux';
import ProductImageComponent from './ProductImage.component.js'

class ProductImageContainer extends PureComponent{
	
	render(){
		return(
				<ProductImageComponent
					{...this.props}
				 />
					
			)
	}
}

export default ProductImageContainer;