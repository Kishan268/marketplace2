import {Component} from 'react'
import {useHistory , useParams,Link} from "react-router-dom";
import Popup from '../Popup/Popup.container.js'
import LoginComponent from '../Login/UserLogin/UserLogin.container.js';

class SearchByCategories extends Component{

	render(){
		const API_URL = "http://localhost:8000/storage/"
		const {Items,addToCart,addWishList,user_information,LoginModelOpen,isopen,closeBideModel} = this.props
		const ItemsDatas = Items.data
		const subcategoryData = ItemsDatas?ItemsDatas[0]:ItemsDatas
		// console.log(subcategoryData)
		return(
			<>
		{/*<div class="breadcrumb-area">
	            <div class="container">
	                <div class="breadcrumb-content">
	                    <h2>Shop</h2>
	                    <ul>
	                        <li><a href="index.html">Home</a></li>
	                        <li class="active">Shop Left Sidebar</li>
	                    </ul>
	                </div>
	            </div>
	        </div>*/}

        <div class="shop-content_wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-5 order-2 order-lg-1 order-md-1">
                        <div class="uren-sidebar-catagories_area">
                            <div class="category-module uren-sidebar_categories">
                                <div class="category-module_heading">
                                    <h5>Categories ({subcategoryData ? subcategoryData.categories[0].catg_name : ''})</h5>
                                    <Link to={`/Items/all-products`}>Get all product list</Link>
                                </div>
                                <div class="module-body">
                                    <ul class="module-list_item">

                       			 	{subcategoryData ? subcategoryData.subcategories.map((subcategory,index)=>(

                                        <li>
                                            <a href="javascript:void(0)">{subcategory.catg_name} <span>(0)</span></a>
                                            
                                          {/*  <ul class="module-sub-list_item">

                                              <li>
                                                  <a href="javascript:void(0)"> -<span>(0)</span></a>
                                                  
                                              </li>
                                              
                                          </ul>*/}
                                        </li>
                                        )):''}
                                       {/* <li>
                                           <a href="javascript:void(0)">Smartwatch <span>(9)</span></a>
                                           <a href="javascript:void(0)">Suspension Systems <span>(15)</span></a>
                                           <a href="javascript:void(0)">Tools & Accessories <span>(0)</span></a>
                                           <a href="javascript:void(0)">Turbo System <span>(18)</span></a>
                                           <a href="javascript:void(0)">TV & Audio <span>(0)</span></a>
                                           <a href="javascript:void(0)">Exterior <span>(0)</span></a>
                                           <a href="javascript:void(0)">Oils & Fluids <span>(18)</span></a>
                                           <a href="javascript:void(0)">Accessories <span>(12)</span></a>
                                           <a href="javascript:void(0)">Breakfast <span>(0)</span></a>
                                       </li>*/}
                                    </ul>
                                </div>
                            </div>
                            {/*<div class="uren-sidebar_categories">
                                <div class="uren-categories_title">
                                    <h5>Price</h5>
                                </div>
                                <div class="price-filter">
                                    <div id="slider-range"></div>
                                    <div class="price-slider-amount">
                                        <div class="label-input">
                                            <label>price : </label>
                                            <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                                        </div>
                                        <button type="button">Filter</button> 
                                    </div>
                                </div>
                            </div>*/}
{/*                            <div class="uren-sidebar_categories">
                                <div class="uren-categories_title">
                                    <h5>Color</h5>
                                </div>
                                <ul class="sidebar-checkbox_list">
                                    <li>
                                        <a href="javascript:void(0)">Black <span>(6)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Blue <span>(2)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Red <span>(3)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Yellow <span>(0)</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="uren-sidebar_categories">
                                <div class="uren-categories_title">
                                    <h5>Manufacturers</h5>
                                </div>
                                <ul class="sidebar-checkbox_list">
                                    <li>
                                        <a href="javascript:void(0)">Sanai <span>(10)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Xail <span>(2)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Chamcham <span>(1)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Meito <span>(3)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Walton <span>(0)</span></a>
                                    </li>
                                </ul>
                            </div>*/}
                        </div>
                        {/*<div class="sidebar-banner_area">
                            <div class="banner-item img-hover_effect">
                                <a href="javascript:void(0)">
                                    <img src="assets/images/shop/1.jpg" alt="Uren's Shop Banner Image" />
                                </a>
                            </div>
                        </div>*/}
                    </div>
                    <div class="col-lg-9 col-md-7 order-1 order-lg-2 order-md-2">
                       {/* <div class="shop-toolbar">
                           <div class="product-view-mode">
                               <a class="grid-1" data-target="gridview-1" data-toggle="tooltip" data-placement="top" title="1">1</a>
                               <a class="grid-2" data-target="gridview-2" data-toggle="tooltip" data-placement="top" title="2">2</a>
                               <a class="active grid-3" data-target="gridview-3" data-toggle="tooltip" data-placement="top" title="3">3</a>
                               <a class="grid-4" data-target="gridview-4" data-toggle="tooltip" data-placement="top" title="4">4</a>
                               <a class="grid-5" data-target="gridview-5" data-toggle="tooltip" data-placement="top" title="5">5</a>
                               <a class="list" data-target="listview" data-toggle="tooltip" data-placement="top" title="List"><i class="fa fa-th-list"></i></a>
                           </div>
                           <div class="product-item-selection_area">
                               <div class="product-short">
                                   <label class="select-label">Short By:</label>
                                   <select class="myniceselect nice-select">
                                       <option value="1">Default</option>
                                       <option value="2">Name, A to Z</option>
                                       <option value="3">Name, Z to A</option>
                                       <option value="4">Price, low to high</option>
                                       <option value="5">Price, high to low</option>
                                       <option value="5">Rating (Highest)</option>
                                       <option value="5">Rating (Lowest)</option>
                                       <option value="5">Model (A - Z)</option>
                                       <option value="5">Model (Z - A)</option>
                                   </select>
                               </div>
                               <div class="product-showing">
                                   <label class="select-label">Show:</label>
                                   <select class="myniceselect short-select nice-select">
                                       <option value="1">15</option>
                                       <option value="1">1</option>
                                       <option value="1">2</option>
                                       <option value="1">3</option>
                                       <option value="1">4</option>
                                   </select>
                               </div>
                           </div>
                       </div>*/}
                        <div class="shop-product-wrap grid gridview-3 img-hover-effect_area row">
                        {ItemsDatas ? ItemsDatas.map((ItemsData,index)=>(

                            <div class="col-lg-4">
                            	<div class="product-slide_item">
                                    <div class="inner-slide">
                                        <div class="single-product">
                                            <div class="product-img">
                                                 <Link to={`/product-details/${ItemsData.pro_id}`} tabindex="0">
                                                    <img class="primary-img" src={API_URL+ItemsData.pro_images[0].doc_path} alt="Uren's Product Image" />
                                                    <img class="secondary-img" src={API_URL+ItemsData.pro_images[1].doc_path} alt="Uren's Product Image" />
                                                </Link>
                                                <div class="sticker-area-2">
                                                    <span class="sticker-2">-{ItemsData.discount}%</span>
                                                   {ItemsData.type ?  <span class="sticker">{ItemsData.type}</span> : '' }
                                                </div>
                                                <div class="add-actions">
                                                    <ul>
                                                    <li><Link class="uren-add_cart"  onClick={()=>{addToCart({product_id:ItemsData.pro_id,quantity:1,price:ItemsData.price,discount:ItemsData.discount})}} data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="ion-bag"></i></Link>
                                                        </li>
                                                        <li> <Link class="uren-wishlist" onClick={()=>{addWishList({product_id:ItemsData.pro_id,user_id:user_information.id})}} data-toggle="tooltip" data-placement="top" title="Wishlist" tabindex="0" data-original-title="Add To Wishlist" >
                                                        <i class="ion-android-favorite-outline"></i></Link>
                                                        </li>
                                                        <li><a class="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                            class="ion-android-options"></i></a>
                                                        </li>
                                                        <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                            class="ion-android-open"></i></a></li>
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
                                                    <h6><a class="product-name" href="single-product.html">{ItemsData.name}</a></h6>
                                                    <div class="price-box">
                                                        <span class="new-price new-price-2">${ItemsData.discounted_price}</span>
                                                        <span class="old-price">${ItemsData.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-slide_item">
                                    <div class="single-product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img" src={API_URL+ItemsData.pro_images[0].doc_path} alt="Uren's Product Image" />
                                                <img class="secondary-img" src={API_URL+ItemsData.pro_images[1].doc_path} alt="Uren's Product Image" />
                                            </a>
                                            <div class="sticker-area-2">
                                                <span class="sticker-2">-{ItemsData.discount}%</span>
                                                <span class="sticker">{ItemsData.type}</span>
                                            </div>
                                        </div>
                                        <div class="product-content">
                                            <div class="product-desc_info">
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="ion-android-star"></i></li>
                                                        <li><i class="ion-android-star"></i></li>
                                                        <li class="silver-color"><i class="ion-android-star"></i></li>
                                                        <li class="silver-color"><i class="ion-android-star"></i></li>
                                                        <li class="silver-color"><i class="ion-android-star"></i></li>
                                                    </ul>
                                                </div>
                                                <h6><a class="product-name" href="single-product.html">Rerum perspiciatis
                                                        qui</a></h6>
                                                <div class="price-box">
                                                    <span class="new-price new-price-2">${ItemsData.discounted_price}</span>
                                                    <span class="old-price">${ItemsData.price}</span>
                                                </div>
                                                <div class="product-short_desc">
                                                    <p>The invention relates to an electromechanical brake booster with an
                                                        electric motor and a helical gearing. The brake booster is used for
                                                        coupling an auxiliary force via a driver into a piston rod. The
                                                        invention proposes connecting a spindle of the helical gearing
                                                        elastically via a spring element to the piston rod such that, in the
                                                        event of rapid actuation of the brake, the helical gearing and a rotor
                                                        of the electric motor do not have to be accelerated entirely muscle
                                                        power. The muscle power required for actuating a brake is reduced as a
                                                        result in the event of a rapid actuation of the brake.</p>
                                                </div>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><Link class="uren-add_cart"  onClick={()=>{addToCart({product_id:ItemsData.pro_id,quantity:1,price:ItemsData.price,discount:ItemsData.discount})}} data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="ion-bag"></i></Link>
                                                    </li>
                                                    <li><a class="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                        class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                    <li><a class="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-android-options"></i></a>
                                                    </li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-android-open"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           )):''
						}
                           
                          
                       {/* <div class="row">
                           <div class="col-lg-12">
                               <div class="uren-paginatoin-area">
                                   <div class="row">
                                       <div class="col-lg-12">
                                           <ul class="uren-pagination-box primary-color">
                                               <li class="active"><a href="javascript:void(0)">1</a></li>
                                               <li><a href="javascript:void(0)">2</a></li>
                                               <li><a href="javascript:void(0)">3</a></li>
                                               <li><a href="javascript:void(0)">4</a></li>
                                               <li><a href="javascript:void(0)">5</a></li>
                                               <li><a class="Next" href="javascript:void(0)">Next</a></li>
                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>*/}
                    </div>
                </div>
            </div>
        </div>

             
        </div>
         <Popup
                width="400px"
                margin-left="-100px"
                isopen= {isopen}
                title= {'Login'}
                content = { <LoginComponent {...this.props}/>} 
          />
			</>
		)
	}
}
export default SearchByCategories