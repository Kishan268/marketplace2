import {PureComponent} from 'react'
import Slider from "react-slick";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };


class ProductImage extends PureComponent{
	
	render(){
		const API_URL = 'http://3.20.234.60/storage/'
		const{products,productsImg} = this.props

		const images = [];

		productsImg.map((value,key)=>{
			var slideObj = {
				original:API_URL+value.doc_path,
				thumbnail:API_URL+value.doc_path
			}
			images.push(slideObj)
		})

		
		return(
			<>
			
			<ImageGallery items={images} />
			
			{
				/*<div class="row product-gallery mx-1">
					<div class="col-12 mb-0 mask view zoom overlay z-depth-2 rounded">
					{ products ? 
						<figure class="view overlay  rounded z-depth-1 main-img ">
							<a href={API_URL+products.pro_images[0].doc_path} data-size="710x823">
								<img src={API_URL+products.pro_images[0].doc_path} class="img-fluid z-depth-1" style={{marginTop: "-90px",transformOrigin: "center center" ,transform: "scale(1)"}} />
							</a>
						</figure>
	
						: <img src="https://demofree.sirv.com/nope-not-here.jpg" class="img-fluid z-depth-1"/>
	
						
					}
					
					</div>
	
					<div class="col-12">
					 <Slider {...settings}>
							{  productsImg != null ? productsImg.map((productsImgs,index) => (
						<div class="row">
							<div class="col-12 mb-0 mask view zoom overlay z-depth-2 rounded">
								<div class="view overlay rounded z-depth-1 gallery-item hoverable" style={{maxHeight: '0%'}}>
									<img src={API_URL+productsImgs.doc_path} class="img-fluid" />
									<div class="mask rgba-white-slight"></div>
								</div>
								
							</div>
						
						</div>
							)) : <img src="https://demofree.sirv.com/nope-not-here.jpg" class="img-fluid z-depth-1"/>
						}
							
	                    </Slider>
					</div>
	
				</div>*/
			}
			</>

			)
	}
}

export default ProductImage;