import {PureComponent} from 'react'

class ProductImage extends PureComponent{
	
	render(){
		const API_URL = 'http://3.20.234.60/storage/'
		const{products,productsImg} = this.props

		return(
			<div class="row product-gallery mx-1">
				<div class="col-12 mb-0 mask view zoom overlay z-depth-2 rounded">
				{ products ? 
					<figure class="view overlay rounded z-depth-1 main-img ">
						<a href={API_URL+products.pro_images[0].doc_path} data-size="710x823">
							<img src={API_URL+products.pro_images[0].doc_path} class="img-fluid z-depth-1"/>
						</a>
					</figure>
					: <img src="https://demofree.sirv.com/nope-not-here.jpg" class="img-fluid z-depth-1"/>

					
				}
				</div>
				<div class="col-12">
					<div class="row">
						{  productsImg != null ? productsImg.map((productsImg,index) => (
						<div class="col-3 mask view zoom overlay z-depth-2 rounded">
							<div class="view overlay rounded z-depth-1 gallery-item" style={{height: '100%'}}>
								<img src={API_URL+productsImg.doc_path} class="img-fluid" height="100%;"/>
								<div class="mask rgba-white-slight"></div>
							</div>
						</div>
					
						)) : <img src="https://demofree.sirv.com/nope-not-here.jpg" class="img-fluid z-depth-1"/>
					}
						
					</div>
				</div>
			</div>
			)
	}
}

export default ProductImage;