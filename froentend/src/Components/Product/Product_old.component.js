import {useState,useEffect ,Component} from 'react'
import { Button } from 'react-bootstrap';
import {useHistory , useParams,Link} from "react-router-dom";

import  axios from 'axios';
import {connect} from 'react-redux'
import {addToCart} from '../../store/addToCart/addToCart.action.js'

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})


 function Product(props){
 	const API_URL = "http://localhost:8000/storage/";
	const [products, setproducts] = useState();
	const [productsImg, setproductsImg] = useState();

	useEffect(()=>{
		loadProducts();
	},[]);

	const loadProducts = async () =>{
	const result = await axios.get('http://localhost:8000/api/all_products');
	console.log("http://localhost:8000/"+result.data.reverse()[0].pro_images[0].doc_path)
	setproducts(result.data.reverse())
	setproductsImg(result.data.pro_images)
	console.log(result.data.reverse().pro_images)

}
return (
	<>
	<div className="elementor-widget-container">
		<div className="slider responsive slick-initialized slick-slider slick-dotted">
			<div className="slick-list draggable">
				
				<div className="slick-track" Style={{opacity: '1', width: '4165px', transform: 'translate3d(-1225px,0px,0px)'}}>
					<div className="card">
						<div className="card-body">
						{ products != null ? products.map((product,index) => (
							<div className="item item-countdown product product-images slick-slide slick-cloned" id="" data-slick-index="-4" aria-hidden="true" style={{width: '300px'}} tabindex="-1">
								<div className="item-wrap">
									<div className="item-detail">
										<div className="item-img products-thumb">
											<Link to={`/product-details/${product.pro_id}`}> 
											<img  src={API_URL+product.pro_images[0].doc_path}  
												  className="attachment-shop_catalog size-shop_catalog wp-post-image" 
												  alt="Metallic Rose Swan Bag Orbi Vehicula Sagittis" 
												  loading="lazy" 
												  sizes="(max-width: 300px) 100vw, 300px" 
												  width="300" 
												  height="300" /> </Link>
												<div className="sale-off2">50%<span> off</span></div>
											
										</div>
										<div className="item-content">
											<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/eu-ultrices-ex-tortor-quis-veli/" title={product.name} tabindex="-1">{product.name}</a></h4>
											
											<div className="reviews-content">
										<div className="star"></div> 
											<a href="#reviews" className="woocommerce-review-link" rel="nofollow" tabindex="-1">(0)</a> 
										</div>
										<div className="item-price"> 
											<span>
												<del>
													<div className="item-price"> <span><del><span className="woocommerce-Price-amount amount" data-original="<bdi><span className=&quot;woocommerce-Price-currencySymbol&quot;>$</span>{product.price}/bdi>" data-price={product.price} title="Original price:65">$65.00</span>
													</del> 
													<ins>
													<span className="woocommerce-Price-amount amount" data-original="<bdi><span className=&quot;woocommerce-Price-currencySymbol&quot;>$</span>52.00</bdi>" data-price={product.price} title="Original price:52">${product.price}</span></ins></span>
													</div>
												</del> 
												<ins>
											<span className="Price-amount amount" data-original="<bdi>
												<span className=&quot;woocommerce-Price-currencySymbol&quot;>$</span>33.00</bdi>" data-price="33" title="Original price:33">${products.price}</span></ins></span>
										</div>
											<div className="item-bottom">
												<button onClick={()=>{props.addToCartHandler({pro_id:products.pro_id,name:products.name,price:products.price})}}  className="button product_type_simple add_to_cart_button ajax_add_to_cart" title="Add To Cart" tabindex="-1">Add to cart</button>
												<a href="javascript:void(0)" data-product_id="4085" className="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
												<div className="yith-wcwl-add-to-wishlist add-to-wishlist-4085  wishlist-fragment on-first-load" data-fragment-ref="4085" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:4085,&quot;parent_product_id&quot;:4085,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
													
													<div className="yith-wcwl-add-button">
														<a href="indexd6e1.html?add_to_wishlist=4085" rel="nofollow" data-product-id="4085" data-product-type="simple" data-original-product-id="4085" className="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1"> <span>Add to Wishlist</span> </a>
													</div>
													
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							)) : <h1>dsfsdf</h1>
					   }

					<div className="item item-countdown product product-images slick-slide slick-cloned" id="" data-slick-index="-5" aria-hidden="true" style={{width: '300px'}} tabindex="-1">
						<div className="item-wrap">
							<div className="item-detail">
								<div className="item-img products-thumb">
									<a href="#" title="Multicolor Shoulder Bag" tabindex="-1"> 
									<img src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag-300x300.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="Multicolor Shoulder Bag" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Multicolor-Shoulder-Bag.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" width="300" height="300" /> </a>
									<div className="sale-off2">20%<span> off</span></div>

								</div>
								<div className="item-content">
									<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/eu-ultrices-ex-tortor-quis-veli/" title="Multicolor Shoulder Bag" tabindex="-1">Multicolor Shoulder Bag</a></h4>
									<div className="reviews-content">
										<div className="star"></div> 
											<a href="#reviews" className="woocommerce-review-link" rel="nofollow" tabindex="-1">(0)</a> 
										</div>
									
									<div className="item-price"> <span>
										<del>
										<span className="woocommerce-Price-amount amount" data-original="<bdi><span className=&quot;woocommerce-Price-currencySymbol&quot;>$</span>65.00</bdi>" data-price="65" title="Original price:65">$65.00</span>
										</del> <ins><span className="woocommerce-Price-amount amount" data-original="<bdi><span className=&quot;woocommerce-Price-currencySymbol&quot;>$</span>52.00</bdi>" data-price="52" title="Original price:52">$52.00</span></ins></span>
									</div>
									<div className="item-bottom">
										<button onClick={()=>{props.addToCartHandler({pro_id:products.pro_id,name:products.name,price:products.price})}}  className="button product_type_simple add_to_cart_button ajax_add_to_cart" title="Add To Cart" tabindex="-1">Add to cart</button>
										
										<div className="yith-wcwl-add-to-wishlist add-to-wishlist-4081  wishlist-fragment on-first-load" data-fragment-ref="4081" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:4081,&quot;parent_product_id&quot;:4081,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
											
											<div className="yith-wcwl-add-button">
												<a href="index1cef.html?add_to_wishlist=4081" rel="nofollow" data-product-id="4081" data-product-type="simple" data-original-product-id="4081" className="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1"> <span>Add to Wishlist</span> </a>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="item item-countdown product product-images slick-slide slick-cloned" id="" data-slick-index="-3" aria-hidden="true" style={{width: '300px'}} tabindex="-1">
						<div className="item-wrap">
							<div className="item-detail">
								<div className="item-img products-thumb">
									<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/si-non-gravida-tortor-veli-quis/" title="Polaroid Snap Touch Instant Digital Camera Red." tabindex="-1"> 
									<img src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-300x300.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="Polaroid Snap Touch Instant Digital Camera Red." loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Polaroid-Snap-Touch-Instant-Digital-Camera-Red.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" width="300" height="300" /> </a>
									<div className="sale-off2">46%<span> off</span></div>
									<div className="product-countdown" data-date="1652572799" data-price="$185" data-starttime="1607126400" data-cdtime="1652572799" data-id="product_49564956"><span className="countdown-row countdown-show4"><span className="countdown-section days"><span className="countdown-amount">312</span><span className="countdown-period">days</span></span><span className="countdown-section hours"><span className="countdown-amount">17</span><span className="countdown-period">hours</span></span><span className="countdown-section mins"><span className="countdown-amount">45</span><span className="countdown-period">mins</span></span><span className="countdown-section secs"><span className="countdown-amount">14</span><span className="countdown-period">secs</span></span>
										</span>
									</div>
								</div>
								<div className="item-content">
									<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/si-non-gravida-tortor-veli-quis/" title="Polaroid Snap Touch Instant Digital Camera Red." tabindex="-1">Polaroid Snap Touch Instant Digital Camera Red.</a></h4>
									<div className="reviews-content">
										<div className="star"></div> <a href="#reviews" className="woocommerce-review-link" rel="nofollow" tabindex="-1">(0)</a> </div>
									
									<div className="item-price"> <span><del><span className="woocommerce-Price-amount amount" data-original="<bdi><span className=&quot;woocommerce-Price-currencySymbol&quot;>$</span>185.00</bdi>" data-price="185" title="Original price:185">$185.00</span>
										</del> <ins><span className="woocommerce-Price-amount amount" data-original="<bdi><span className=&quot;woocommerce-Price-currencySymbol&quot;>$</span>99.00</bdi>" data-price="99" title="Original price:99">$99.00</span></ins></span>
									</div>
									<div className="item-bottom"><a href="indexc39a.html?add-to-cart=4956" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="4956" data-product_sku="KHU84-1-1" aria-label="Add “Polaroid Snap Touch Instant Digital Camera Red.” to your cart" rel="nofollow" title="Add To Cart" tabindex="-1">Add to cart</a><a href="javascript:void(0)" data-product_id="4956" className="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
										<div className="yith-wcwl-add-to-wishlist add-to-wishlist-4956  wishlist-fragment on-first-load" data-fragment-ref="4956" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:4956,&quot;parent_product_id&quot;:4956,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
											
											<div className="yith-wcwl-add-button">
												<a href="indexfca4.html?add_to_wishlist=4956" rel="nofollow" data-product-id="4956" data-product-type="simple" data-original-product-id="4956" className="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1"> <span>Add to Wishlist</span> </a>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item item-countdown product product-images slick-slide slick-cloned" id="" data-slick-index="-2" aria-hidden="true" style={{width: '300px'}} tabindex="-1">
						<div className="item-wrap">
							<div className="item-detail">
								<div className="item-img products-thumb">
									<a href="https://demo.wpthemego.com/themes/sw_flashmart/product/pardon-my-french-box-2/" title="Serpenti Forever crossbody bag" tabindex="-1"> <img src="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag-300x300.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image" alt="Serpenti Forever crossbody bag" loading="lazy" srcset="https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag-300x300.jpg 300w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag-150x150.jpg 150w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag-100x100.jpg 100w, https://demo.wpthemego.com/themes/sw_flashmart/wp-content/uploads/2016/10/Serpenti-Forever-crossbody-bag.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" width="300" height="300" /> </a>
									<div className="sale-off2">9%<span> off</span></div>
									<div className="product-countdown" data-date="1652572799" data-price="$75" data-starttime="1608249600" data-cdtime="1652572799" data-id="product_51635163"><span className="countdown-row countdown-show4"><span className="countdown-section days"><span className="countdown-amount">312</span><span className="countdown-period">days</span></span><span className="countdown-section hours"><span className="countdown-amount">17</span><span className="countdown-period">hours</span></span><span className="countdown-section mins"><span className="countdown-amount">45</span><span className="countdown-period">mins</span></span><span className="countdown-section secs"><span className="countdown-amount">14</span><span className="countdown-period">secs</span></span>
										</span>
									</div>
								</div>
								<div className="item-content">
									<h4><a href="https://demo.wpthemego.com/themes/sw_flashmart/product/pardon-my-french-box-2/" title="Serpenti Forever crossbody bag" tabindex="-1">Serpenti Forever crossbody bag</a></h4>
									<div className="reviews-content">
										<div className="star"></div> <a href="#reviews" className="woocommerce-review-link" rel="nofollow" tabindex="-1">(0)</a> </div>
									
									<div className="item-price"> <span><del><span className="woocommerce-Price-amount amount" data-original="<bdi><span className=&quot;woocommerce-Price-currencySymbol&quot;>$</span>75.00</bdi>" data-price="75" title="Original price:75">$75.00</span>
										</del> <ins><span className="woocommerce-Price-amount amount" data-original="<bdi><span className=&quot;woocommerce-Price-currencySymbol&quot;>$</span>68.00</bdi>" data-price="68" title="Original price:68">$68.00</span></ins></span>
									</div>
									<div className="item-bottom"><a href="indexddcf.html?add-to-cart=5163" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="5163" data-product_sku="" aria-label="Add “Serpenti Forever crossbody bag” to your cart" rel="nofollow" title="Add To Cart" tabindex="-1">Add to cart</a><a href="javascript:void(0)" data-product_id="5163" className="sw-quickview group fancybox" data-type="quickview" data-ajax_url="/themes/sw_flashmart/?wc-ajax=%%endpoint%%" title="QuickView" tabindex="-1">Quick View </a>
										<div className="yith-wcwl-add-to-wishlist add-to-wishlist-5163  wishlist-fragment on-first-load" data-fragment-ref="5163" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:5163,&quot;parent_product_id&quot;:5163,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse Wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in the wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:false,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
											
											<div className="yith-wcwl-add-button">
												<a href="index999a.html?add_to_wishlist=5163" rel="nofollow" data-product-id="5163" data-product-type="simple" data-original-product-id="5163" className="add_to_wishlist single_add_to_wishlist" data-title="Add to Wishlist" title="Add To WishList" tabindex="-1"> <span>Add to Wishlist</span> </a>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					</div>
				</div>





					
				</div>
			</div>
			<ul className="slick-dots" Style="" role="tablist">
				<li className="slick-active" role="presentation">
					<button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 2" tabindex="0" aria-selected="true">1</button>
				</li>
				<li role="presentation">
					<button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 2" tabindex="-1">2</button>
				</li>
				<li role="presentation">
					<button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 2" tabindex="-1">3</button>
				</li>
				<li role="presentation">
					<button type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide03" aria-label="4 of 2" tabindex="-1">4</button>
				</li>
				<li role="presentation">
					<button type="button" role="tab" id="slick-slide-control04" aria-controls="slick-slide04" aria-label="5 of 2" tabindex="-1">5</button>
				</li>
				<li role="presentation">
					<button type="button" role="tab" id="slick-slide-control05" aria-controls="slick-slide05" aria-label="6 of 2" tabindex="-1">6</button>
				</li>
			</ul>
		</div>
	</div>
	</>
)
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);