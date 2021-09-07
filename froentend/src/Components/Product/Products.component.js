import {Component} from 'react'
import { Button } from 'react-bootstrap';
import {useHistory , useParams,Link} from "react-router-dom";
import LoginComponent from '../Login/UserLogin/UserLogin.container.js';
import Popup from '../Popup/Popup.container.js'
import Slider from "react-slick";
var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
class Products extends Component{
   
   
    render(){
        const{isopen} = this.props

        const API_URL ='http://localhost:8000/storage/';
        const{products,addToCart,addWishList,user_information,closeBideModel,get_template} = this.props
        var templates = get_template.data
        // var templates = templates[1].pro

        return (
            <>
            <div class="uren-product_area">
                <div class="container">
                 {templates ? templates.map((template, index) => (

                  <div key={index}>
                  <div class="mt-4">
                   <Link to={`/search/${template ? template.slug:''}`} > <h5>{template?template.name:''}
                     <span class="pull-right">View All({template.get_assign_products?template.get_assign_products.length:''})</span></h5></Link>
                  </div>
                    <div class="product-slider uren-slick-slider slider-navigation_style-1 img-hover-effect_area slick-carousel-1 slick-initialized slick-slider" >
                    <Slider {...settings}>
                    {template ? template.get_assign_products.slice(0, 10).map((product, i) => (
                      <div>
                       <div className="col-lg-12" key={i} >
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
                                                            onClick={()=>{addToCart({product_id:product ? product.product_id:'',quantity:1,price:product?product.price:'',discount:product?product.discount:''})}}
                                                            data-toggle="tooltip" data-placement="top" title="Add To Cart" tabindex="0" data-original-title="Add To Cart"><i class="ion-bag"></i></a>
                                                        </li>
                                                        <li>
                                                            <Link class="uren-wishlist" onClick={()=>{addWishList({product_id:product ? product.product_id:'',user_id:user_information.id})}} data-toggle="tooltip" data-placement="top" title="Wishlist" tabindex="0" data-original-title="Add To Wishlist" >
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
                                                            <li class="silver-color">
                                                                <i class="ion-android-star"></i></li>
                                                            <li class="silver-color">
                                                                <i class="ion-android-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    {user_information.state}<br/>
                                                    <h6><a class="product-name" href="single-product.html" tabindex="0">{product.name}</a></h6>
                                                    <div class="price-box">
                                                        <span class="new-price new-price-2">${product?product.discounted_price :''}</span>
                                                        <span class="old-price">{product?product.price:''}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    )):''}
                  </Slider>
              </div>
            </div>
            )):''}
        </div>
      </div>
               
          {/*  <div class="uren-product_area">
                          <div class="container">
                          <h3>Deals</h3>
                           <div class="product-slider uren-slick-slider slider-navigation_style-1 img-hover-effect_area slick-carousel-1 slick-initialized slick-slider" >
                              <Slider {...settings}>
                                { products  ? products.map((product,index) => (
                                <div>
                                 <div className="col-lg-12" key={index} >
                                      <div className="row">
                                          <div class="  product-slide_item" style={{width: '100%', display: 'inlineBlock'}}>
                                              <div class="inner-slide">
                                                  <div class="single-product">
                                                      <div class="product-img" >
                                                        <Link to={`/product-details/${product.pro_id}`} tabindex="0">
                                                          <img class="primary-img" src={API_URL+product.pro_images[0].doc_path} alt="Uren's Product Image" hieght="200px"/>
                                                      </Link>
                                                      <div class="sticker-area-2">
                                                         {product.discount ? <span class="sticker-2">-{product.discount}%</span> : '' }
                                                         {product.type ? <span class="sticker">{product.type}</span> :'' }
                                                      </div>
                                                       <div class="add-actions">
                                                          <ul>
                                                              <li>
                                                                  <a class="uren-add_cart" 
                                                                  onClick={()=>{addToCart({product_id:product.pro_id,quantity:1,price:product.price,discount:product.discount})}}
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
                                                                          <li class="silver-color">
                                                                              <i class="ion-android-star"></i></li>
                                                                          <li class="silver-color">
                                                                              <i class="ion-android-star"></i></li>
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
                                  </div>
                              )) :<img src="https://demofree.sirv.com/nope-not-here.jpg" class="img-fluid z-depth-1"/>
                              }
                              </Slider>
                          </div>
                          </div>
                      </div>
                      <div class="uren-product_area">
                          <div class="container">
                          <h3>Hot listings</h3>
                           <div class="product-slider uren-slick-slider slider-navigation_style-1 img-hover-effect_area slick-carousel-1 slick-initialized slick-slider" >
                              <Slider {...settings}>
                                { products  ? products.map((product,index) => (
                                <div>
                                 <div className="col-lg-12" key={index} >
                                      <div className="row">
                                          <div class="  product-slide_item" style={{width: '100%', display: 'inlineBlock'}}>
                                              <div class="inner-slide">
                                                  <div class="single-product">
                                                      <div class="product-img" >
                                                        <Link to={`/product-details/${product.pro_id}`} tabindex="0">
                                                          <img class="primary-img" src={API_URL+product.pro_images[0].doc_path} alt="Uren's Product Image" hieght="200px"/>
                                                      </Link>
                                                      <div class="sticker-area-2">
                                                         {product.discount ? <span class="sticker-2">-{product.discount}%</span> : '' }
                                                         {product.type ? <span class="sticker">{product.type}</span> :'' }
                                                      </div>
                                                       <div class="add-actions">
                                                          <ul>
                                                              <li>
                                                                  <a class="uren-add_cart" 
                                                                  onClick={()=>{addToCart({product_id:product.pro_id,quantity:1,price:product.price,discount:product.discount})}}
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
                                                                          <li class="silver-color">
                                                                              <i class="ion-android-star"></i></li>
                                                                          <li class="silver-color">
                                                                              <i class="ion-android-star"></i></li>
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
                                  </div>
                              )) :<img src="https://demofree.sirv.com/nope-not-here.jpg" class="img-fluid z-depth-1"/>
                              }
                              </Slider>
                          </div>
                          </div>
                      </div>*/}
   

      {/*  <div class="uren-product_area">
            <div class="container">
                <div class="row">
                    <h3>Deals</h3>
                    <div class="col-lg-12 mt-2">
                <div class="product-slider uren-slick-slider slider-navigation_style-1 img-hover-effect_area slick-carousel-1 slick-initialized slick-slider" >
                <div className="col-lg-12">
                   <div className="row">
                      { products  ? products.map((product,index) => (
                        <div className="col-lg-3" key={index} style={{border: "solid", borderColor: "#ffc400"}}>
                            <div className="row">
                            <div class="  product-slide_item" style={{width: '100%', display: 'inlineBlock'}}>
                            <div class="inner-slide">

                            <div class="single-product">
                                <div class="product-img" >
                                    <Link to={`/product-details/${product.pro_id}`} tabindex="0">
                                        <img class="primary-img" src={API_URL+product.pro_images[0].doc_path} alt="Uren's Product Image" hieght="200px"/>
                                        <img class="secondary-img" src={API_URL+product.pro_images[1].doc_path} alt="Uren's Product Image"/>
                                    </Link>
                                    <div class="sticker-area-2">
                                        {product.discount ? <span class="sticker-2">-{product.discount}%</span> : '' }

                                       {product.type ? <span class="sticker">{product.type}</span> :'' }
                                    </div>
                                    <div class="add-actions">
                                        <ul>
                                            <li>
                                                <a class="uren-add_cart" 
                                                onClick={()=>{addToCart({product_id:product.pro_id,quantity:1,price:product.price,discount:product.discount})}}
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
                                                <li class="silver-color">
                                                    <i class="ion-android-star"></i></li>
                                                <li class="silver-color">
                                                    <i class="ion-android-star"></i></li>
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

    <div class="special-product_area">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title_area">
                        <span>Special Offer Limited Time</span>
                        <h3>Deal Of The Day</h3>
                    </div>
                    <div class="special-product_slider uren-slick-slider slider-navigation_style-1 img-hover-effect_area slick-carousel-2 slick-initialized slick-slider" data-slick-options="{
                    &quot;slidesToShow&quot;: 2,
                    &quot;arrows&quot; : true
                    }" data-slick-responsive="[
                                            {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1}}
                                        ]"><button class="tty-slick-text-btn tty-slick-text-prev slick-arrow slick-disabled" aria-disabled="true" style={{display: 'block'}}><i class="ion-ios-arrow-back"></i></button><div class="slick-list draggable"><div class="slick-track" style={{opacity: '1' , width: '1941px' , transform: "translate3d('0px', '0px', '0px')"}}><div class="slick-slide slick-current slick-active first-active" data-slick-index="0" aria-hidden="false" style={{width: '647px'}}><div><div class="slide-item" style={{width: '100%', display: 'inlineBlock'}}>
                        <div class="inner-slide">
                            <div class="single-product">
                                <div class="product-img">
                                    <a href="single-product.html" tabindex="0">
                                        <img class="primary-img" src="assets/images/product/medium-size/1-1.jpg" alt="Uren's Product Image"/>
                                        <img class="secondary-img" src="assets/images/product/medium-size/4-1.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <div class="sticker-area-2">
                                        <span class="sticker-2">-33%</span>
                                        <span class="sticker">New</span>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <div class="product-desc_info">
                                        <div class="uren-countdown_area">
                                            <span class="product-offer">Hurry up!  Offer ends in:</span>
                                            <div class="countdown-wrap">
                                                <div class="countdown item-4" data-countdown="2020/10/01" data-format="short">
                                                    <div class="countdown__item">
                                                        <span class="countdown__time daysLeft">0-285</span>
                                                        <span class="countdown__text daysText">day</span>
                                                    </div>
                                                    <div class="countdown__item">
                                                        <span class="countdown__time hoursLeft">05</span>
                                                        <span class="countdown__text hoursText">hrs</span>
                                                    </div>
                                                    <div class="countdown__item">
                                                        <span class="countdown__time minsLeft">34</span>
                                                        <span class="countdown__text minsText">mins</span>
                                                    </div>
                                                    <div class="countdown__item">
                                                        <span class="countdown__time secsLeft">44</span>
                                                        <span class="countdown__text secsText">secs</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rating-box">
                                            <ul>
                                                <li><i class="ion-android-star"></i></li>
                                                <li><i class="ion-android-star"></i></li>
                                                <li><i class="ion-android-star"></i></li>
                                                <li class="silver-color"><i class="ion-android-star"></i></li>
                                                <li class="silver-color"><i class="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6 class="product-name"><a href="single-product.html" tabindex="0">Veniam officiis voluptates</a></h6>
                                        <div class="price-box">
                                            <span class="new-price new-price-2">$98.00</span>
                                            <span class="old-price">$146.00</span>
                                        </div>
                                        <div class="add-actions">
                                            <ul>
                                                <li><a class="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="" tabindex="0" data-original-title="Add To Cart"><i class="ion-bag"></i>Add To Cart</a>
                                                </li>
                                                <li><a class="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="" tabindex="0" data-original-title="Add To Wishlist"><i class="ion-android-favorite-outline"></i></a>
                                                </li>
                                                <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="" tabindex="0" data-original-title="Quick View"><i class="ion-android-open"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        <div class="slick-slide slick-active last-active" data-slick-index="1" aria-hidden="false" style={{width: '647px'}}><div><div class="slide-item" style={{width: '100%', display: 'inlineBlock'}}>
                            <div class="inner-slide">
                                <div class="single-product">
                                    <div class="product-img">
                                        <a href="single-product.html" tabindex="0">
                                            <img class="primary-img" src="assets/images/product/medium-size/4-2.jpg" alt="Uren's Product Image"/>
                                            <img class="secondary-img" src="assets/images/product/medium-size/5-2.jpg" alt="Uren's Product Image"/>
                                        </a>
                                        <div class="sticker-area-2">
                                            <span class="sticker-2">-10%</span>
                                            <span class="sticker">New</span>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="product-desc_info">
                                            <div class="uren-countdown_area">
                                                <span class="product-offer">Hurry up!  Offer ends in:</span>
                                                <div class="countdown-wrap">
                                                    <div class="countdown item-4" data-countdown="2020/09/01" data-format="short">
                                                        <div class="countdown__item">
                                                            <span class="countdown__time daysLeft">0-315</span>
                                                            <span class="countdown__text daysText">day</span>
                                                        </div>
                                                        <div class="countdown__item">
                                                            <span class="countdown__time hoursLeft">05</span>
                                                            <span class="countdown__text hoursText">hrs</span>
                                                        </div>
                                                        <div class="countdown__item">
                                                            <span class="countdown__time minsLeft">34</span>
                                                            <span class="countdown__text minsText">mins</span>
                                                        </div>
                                                        <div class="countdown__item">
                                                            <span class="countdown__time secsLeft">44</span>
                                                            <span class="countdown__text secsText">secs</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="rating-box">
                                                <ul>
                                                    <li><i class="ion-android-star"></i></li>
                                                    <li><i class="ion-android-star"></i></li>
                                                    <li><i class="ion-android-star"></i></li>
                                                    <li><i class="ion-android-star"></i></li>
                                                    <li><i class="ion-android-star"></i></li>
                                                </ul>
                                            </div>
                                            <h6 class="product-name"><a href="single-product.html" tabindex="0">Accusantium corporis odio</a></h6>
                                            <div class="price-box">
                                                <span class="new-price new-price-2">$110.00</span>
                                                <span class="old-price">$122.00</span>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="" tabindex="0" data-original-title="Add To Cart"><i class="ion-bag"></i>Add To Cart</a>
                                                    </li>
                                                    <li><a class="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="" tabindex="0" data-original-title="Add To Wishlist"><i class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="" tabindex="0" data-original-title="Quick View"><i class="ion-android-open"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slick-slide" data-slick-index="2" aria-hidden="true" style={{width: '647px'}} tabindex="-1"><div><div class="slide-item" style={{width: '100%', display: 'inlineBlock'}}>
                            <div class="inner-slide">
                                <div class="single-product">
                                    <div class="product-img">
                                        <a href="single-product.html" tabindex="-1">
                                            <img class="primary-img" src="assets/images/product/medium-size/6-1.jpg" alt="Uren's Product Image"/>
                                            <img class="secondary-img" src="assets/images/product/medium-size/6-2.jpg" alt="Uren's Product Image"/>
                                        </a>
                                        <div class="sticker-area-2">
                                            <span class="sticker-2">-15%</span>
                                            <span class="sticker">New</span>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="product-desc_info">
                                            <div class="uren-countdown_area">
                                                <span class="product-offer">Hurry up!  Offer ends in:</span>
                                                <div class="countdown-wrap">
                                                    <div class="countdown item-4" data-countdown="2020/08/01" data-format="short">
                                                        <div class="countdown__item">
                                                            <span class="countdown__time daysLeft">0-346</span>
                                                            <span class="countdown__text daysText">day</span>
                                                        </div>
                                                        <div class="countdown__item">
                                                            <span class="countdown__time hoursLeft">05</span>
                                                            <span class="countdown__text hoursText">hrs</span>
                                                        </div>
                                                        <div class="countdown__item">
                                                            <span class="countdown__time minsLeft">34</span>
                                                            <span class="countdown__text minsText">mins</span>
                                                        </div>
                                                        <div class="countdown__item">
                                                            <span class="countdown__time secsLeft">44</span>
                                                            <span class="countdown__text secsText">secs</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="rating-box">
                                                <ul>
                                                    <li><i class="ion-android-star"></i></li>
                                                    <li><i class="ion-android-star"></i></li>
                                                    <li><i class="ion-android-star"></i></li>
                                                    <li><i class="ion-android-star"></i></li>
                                                    <li><i class="ion-android-star"></i></li>
                                                </ul>
                                            </div>
                                            <h6 class="product-name"><a href="single-product.html" tabindex="-1">Accusantium corporis odio</a></h6>
                                            <div class="price-box">
                                                <span class="new-price new-price-2">$95.00</span>
                                                <span class="old-price">$120.00</span>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="" tabindex="-1" data-original-title="Add To Cart"><i class="ion-bag"></i>Add To Cart</a>
                                                    </li>
                                                    <li><a class="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="" tabindex="-1" data-original-title="Add To Wishlist"><i class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="" tabindex="-1" data-original-title="Quick View"><i class="ion-android-open"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><button class="tty-slick-text-btn tty-slick-text-next slick-arrow" style={{display: 'block'}} aria-disabled="false"><i class="ion-ios-arrow-forward"></i></button></div>
    </div>
            </div>
        </div>
    </div>*/}

                <div className="uren-banner_area uren-banner_area-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-item img-hover_effect">
                                    <div className="banner-img"></div>
                                    <div className="banner-content">
                                        <span className="contact-info"><i className="ion-android-call"></i> +123 321 345</span>
                                        <h4>Anytime & Anywhere </h4>
                                        <h3>You are.</h3>
                                        <p>Est erat faucibus purus, eget viverra nulla sem vitae
                                            Quisque id sodales libero...</p>
                                        <a href="javascript:void(0)" className="read-more">Learn More</a>
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

export default Products;