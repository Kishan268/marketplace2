import {Component} from 'react';
import {useHistory , useParams,Link} from "react-router-dom";
import LoginComponent from '../Login/UserLogin/UserLogin.container.js';
import Popup from '../Popup/Popup.container.js'
class TemplateProducts extends Component{

	render(){
		const{isopen} = this.props

        const API_URL ='http://localhost:8000/storage/';
        const{products,addToCart,addWishList,user_information,closeBideModel,get_template_products} = this.props
        var templates = get_template_products.data ? get_template_products.data[0] :''
        // console.log(templates)
		return(
	<>
	   <div class="uren-product_area">
            <div class="container mb-4">
                <div class="row">
                <div class="mt-4">
                  <h4>{templates?templates.name:''}&nbsp;
                     <span class="pull-right">Showing &nbsp;{templates.get_assign_products?templates.get_assign_products.length:''}&nbsp;Results</span></h4>
                  </div>
                    <div class="col-lg-12 mt-2">
		                <div class="product-slider uren-slick-slider slider-navigation_style-1 img-hover-effect_area slick-carousel-1 slick-initialized slick-slider" >
		                <div className="col-lg-12">
		                   <div className="row">
		                      { templates  ? templates.get_assign_products.map((product,index) => (
		                        <div className="col-lg-3 mb-2" key={index} style={{border: "solid", borderColor: "#ffc400"}}>
		                            <div className="row">
		                            <div class="  product-slide_item" style={{width: '100%', display: 'inlineBlock'}}>
		                            <div class="inner-slide">

		                            <div class="single-product">
		                                <div class="product-img" >
		                                    <Link to={`/product-details/${product ? product.product_id:''}`} tabindex="0">
		                                      <img class="primary-img" src={product.pro_images ? product.pro_images[0].doc_path : ''} alt="Uren's Product Image" hieght="200px"/>
		                                       <img class="secondary-img" src={product.pro_images ? product.pro_images[1].doc_path : ''} alt="Uren's Product Image"/>
		                                    	
		                                    </Link>
		                                    <div class="sticker-area-2">
		                                        {product.discount ? <span class="sticker-2">-{product.discount}%</span> : '' }

		                                       {product.type ? <span class="sticker">{product.type}</span> :'' }
		                                    </div>
		                                    <div class="add-actions">
		                                        <ul>
		                                            <li>
		                                                <a class="uren-add_cart" 
		                                                onClick={()=>{addToCart({product_id:product.product_id,quantity:1,price:product.price,discount:product.discount})}}
		                                                 data-toggle="tooltip" data-placement="top" title="Add To Cart" tabindex="0" data-original-title="Add To Cart"><i class="ion-bag"></i></a>
		                                            </li>
		                                          

		                                            <li>
		                                                <Link class="uren-wishlist" onClick={()=>{addWishList({product_id:product.pro_id,user_id:user_information.id})}} data-toggle="tooltip" data-placement="top" title="Wishlist" tabindex="0" data-original-title="Add To Wishlist" >
		                                                <i class="ion-android-favorite-outline"></i></Link>
		                                            </li>
		                                            <li>
		                                                <a class="uren-add_compare" href="#" data-toggle="tooltip" data-placement="top" title="Compare" tabindex="0" data-original-title="Compare This Product"><i class="ion-android-options"></i></a>
		                                            </li>
		                                            <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick" tabindex="0" data-original-title="Quick View"><i class="ion-android-open"></i></a></li>
		                                        </ul>
		                                    </div>
		                                </div>
		                                <div class="product-content">
		                                    <div class="product-desc_info">
		                                        <div class="rating-box">
		                                            <ul>
		                                                <li class="silver-color"><i class="ion-android-star"></i></li>
		                                                <li class="silver-color"><i class="ion-android-star"></i></li>
		                                                <li class="silver-color"><i class="ion-android-star"></i></li>
		                                                <li class="silver-color"><i class="ion-android-star"></i></li>
		                                                <li class="silver-color"><i class="ion-android-star"></i></li>
		                                            </ul>
		                                        </div>
		                                        <h6><a class="product-name" href="single-product.html" tabindex="0">{product.name}</a></h6>
		                                        <div class="price-box">
		                                            <span class="new-price new-price-2">${product.discounted_price}</span>
		                                            <span class="old-price">{product.price}</span>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                       </div>
		                    </div>
		                </div>
		                )) :   <img src="https://demofree.sirv.com/nope-not-here.jpg" class="img-fluid z-depth-1"/>
		            }
		               </div>
		            </div>       
		        </div>
		    </div>
		 </div>
        </div>    
    </div>
     <Popup
        width="800px"
        margin-left="-100px"
        isopen= {isopen}
        title= {'Login'}
        content = { <LoginComponent {...this.props}/>} 
    />
	</>
		)
	}
}
export default TemplateProducts