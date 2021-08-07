import {PureComponent} from 'react'
import parse from 'html-react-parser';
import {useHistory , useParams,Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductImageComponent from '../productImage/ProductImage.container.js'


 class ProductDetails extends PureComponent{

	 	render(){

	 		const{products,productsImg,userDetails,addToCartHandler,addAndRemoveProduct,isRemove,showError} = this.props
	 		const API_URL = 'http://localhost:8000/storage/'

	 		const{bid_option} = products
			return (
				<>
				<div class ="container" >
					<h1 class="">Product Details </h1>
					<section class="mb-5 ">
					<div class="row mt-5">
						<div class="col-md-8 mb-4 mb-md-0">
							<div id="mdb-lightbox-ui"></div>
							<div class="mdb-lightbox">
								<ProductImageComponent 
									products = {products}
									productsImg = {productsImg}
								/>
							</div>
						</div>
						<div class="col-md-4" style={{ fontSize: '130%'}}>
							<div class="card  " >
								<div class="card-body" >
								<i class="favoratButtn ion-android-favorite btn-sm pr-2"></i>

									<h5 className="productDetails_proName">{products ? products.name :''}
									</h5>
								
							
								</div>
							</div>
							<div class="card mt-2">
								<div className="text-center mt-3">
									<strong className="productPrice">${products ? products.discounted_price : ''}</strong>
								</div>
								<div className="card-body">
										<div className="row mt-5">
											<div className="col-sm-6 productQty">{products ? products.qty:0} available</div>
											<div className="col-sm-6">
												<div class="input-group btn-block" style={{maxWidth: '200px'}}>
													<span class="input-group-btn">
														<button disabled={!isRemove ? true : ''}  data-toggle="tooltip" title="" onClick={(()=>addAndRemoveProduct('minus',1))} class="cart-btn  btn btn-primary" data-original-title="Update">
															<i class="fa fa-minus"></i>
														</button>
													</span>
													<input type="text" name="quantity" value={products.buyQty}  disabled="true" size="1"  class="cart-input form-control"/>
													<span class="input-group-btn">
														<button disabled={isRemove ? false : ''}  data-toggle="tooltip" title="" onClick={(()=>addAndRemoveProduct('plus',1))} class="cart-btn btn btn-primary" data-original-title="Update">
															<i class="fa fa-plus"></i>
														</button>
													</span>  
												</div>
											</div>
											<div className="row text-center text-danger">
												<div style={{fontSize:'11px'}} className="col-sm-12">
													{showError}
												</div>
											</div>
										</div>
									{ bid_option ==="Both" ?
									<>
										<div className="row">
											<div className="col-sm-6">{products ? products.qty:0}</div>
										</div>
										<div className="row" >
										<Link to="/checkout" type="button" class="btn btn-info sm mb-2 btn-sm">Buy now</Link>
										<button onClick={()=>{addToCartHandler({pro_id:products.pro_id,name:products.name,price:products.price})}} type="button" class="btn btn-warning qty-cart_btn btn-sm  mb-2">
										<i class="fa fa-shopping-cart btn-sm pr-2"></i>Add to cart</button>
										<button  type="button" class="btn btn-warning btn-sm qty-cart_btn  mb-2">
										<i class="fa fa-gavel pr-2"></i>Place bid</button>
										</div>
									</>
									:'' 
									}
									{ bid_option =="Yes" ?
									<>
										<div className="row">
											<div className="col-sm-6 productQty">{products ? products.qty:0}</div>
										</div>
										<button  type="button" class="btn btn-warning qty-cart_btn btn-sm  mb-2">
											<i class="fa fa-gavel pr-2"></i>Place bid
										</button>
									</>:
									'' 
									}
									{ bid_option =="No" ?
									<>
										
										<div className = "row mt-5" >
											<div className = "col-sm-5">
												<Link to="/checkout" type="button" class="btn btn-info sm mb-2 btn-sm">Buy now</Link>
											</div>
											<div className = "col-sm-7">
												<button onClick={()=>{addToCartHandler({pro_id:products.pro_id,name:products.name,price:products.price,qty:1})}} type="button" class="btn btn-warning qty-cart_btn btn-sm float-right mb-2">
													<i class="fa fa-shopping-cart  pr-2"></i>Add to cart
												</button>
											</div>	
										</div>
									</>
									:'' 
									}
								</div>	
							</div>
							<hr/>
						</div>
					</div>
				</section>
				<div class="card mt-3">
					<div class="card-body">
						<div data-aut-id="profileTitle" class="">Seller description</div>
							<div class="" data-aut-id="profileCard">
								<a rel="nofollow" href="/profile/512017806">
									<figure class="rui-1gV1x _186ru" style={{width: '68px', height: '68px'}}>
										<img src="https://images.app.goo.gl/yznVpKjfUXTs8QwZ8" />
									</figure>
								</a>
								<a rel="nofollow" href="/profile/512017806">
									<div class="_3oOe9">  {userDetails?userDetails.name:''}</div>
								</a>
								<div data-aut-id="memberSince">
									<div class="">
										<span>Member since {userDetails?userDetails.created_at:''} </span>
									</div>
								</div>
							<button type="button" data-aut-id="btnChat" class="btn btn-primary btn-sm"><span>Chat with seller</span></button>
						</div>
					</div>
				</div>
			</div>
				<section>
				<div class="card mt-3">
					<div class="card-body">
					<div class="classic-tabs border rounded px-4 pt-1 mb-5">
						<h1>More details</h1>
						<ul class="nav tabs-primary nav-justified" id="advancedTab" role="tablist">
							<li class="nav-item"> <a class="nav-link active show" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
							</li>
							<li class="nav-item"> <a class="nav-link" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">Information</a>
							</li>
							<li class="nav-item"> <a class="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews (1)</a>
							</li>
						</ul>
						<div class="tab-content" id="advancedTabContent">
							<div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
								<h5>Product Description</h5>
								<p class="small text-muted text-uppercase mb-2">Shirts</p>
								<ul class="rating">
									<li> <i class="fas fa-star fa-sm text-primary"></i>
									</li>
									<li> <i class="fas fa-star fa-sm text-primary"></i>
									</li>
									<li> <i class="fas fa-star fa-sm text-primary"></i>
									</li>
									<li> <i class="fas fa-star fa-sm text-primary"></i>
									</li>
									<li> <i class="far fa-star fa-sm text-primary"></i>
									</li>
								</ul>
								<h6>12.99 $</h6>
								<p class="pt-1">{products? parse(products.long_des):''}</p>
							</div>
							<div class="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
								<h5>Additional Information</h5>
								<table class="table table-striped table-bordered mt-3">
									<thead>
										<tr>
											<th scope="row" class="w-150 dark-grey-text h6">Weight</th>
											<td><em>0.3 kg</em>
											</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row" class="w-150 dark-grey-text h6">Dimensions</th>
											<td><em>50 × 60 cm</em>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
								<h5><span>1</span> review for <span>Fantasy T-shirt</span></h5>
								<div class="media mt-3 mb-4">
									<img class="d-flex mr-3 z-depth-1" src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" width="62" alt="Generic placeholder image" />
									<div class="media-body">
										<div class="d-sm-flex justify-content-between">
											<p class="mt-1 mb-2"> <strong>Marthasteward </strong>
												<span>– </span><span>January 28, 2020</span>
											</p>
											<ul class="rating mb-sm-0">
												<li> <i class="fas fa-star fa-sm text-primary"></i>
												</li>
												<li> <i class="fas fa-star fa-sm text-primary"></i>
												</li>
												<li> <i class="fas fa-star fa-sm text-primary"></i>
												</li>
												<li> <i class="fas fa-star fa-sm text-primary"></i>
												</li>
												<li> <i class="far fa-star fa-sm text-primary"></i>
												</li>
											</ul>
										</div>
										<p class="mb-0">Nice one, love it!</p>
									</div>
								</div>
								<hr/>
								<h5 class="mt-4">Add a review</h5>
								<p>Your email address will not be published.</p>
								<div class="my-3">
									<ul class="rating mb-0">
										<li>
											<a href="#!"> <i class="fas fa-star fa-sm text-primary"></i>
											</a>
										</li>
										<li>
											<a href="#!"> <i class="fas fa-star fa-sm text-primary"></i>
											</a>
										</li>
										<li>
											<a href="#!"> <i class="fas fa-star fa-sm text-primary"></i>
											</a>
										</li>
										<li>
											<a href="#!"> <i class="fas fa-star fa-sm text-primary"></i>
											</a>
										</li>
										<li>
											<a href="#!"> <i class="far fa-star fa-sm text-primary"></i>
											</a>
										</li>
									</ul>
								</div>
								<div>
									<div class="md-form md-outline">
										<textarea id="form76" class="md-textarea form-control pr-6" rows="4"></textarea>
										<label for="form76">Your review</label>
									</div>
									<div class="md-form md-outline">
										<input type="text" id="form75" class="form-control pr-6" />
										<label for="form75">Name</label>
									</div>
									<div class="md-form md-outline">
										<input type="email" id="form77" class="form-control pr-6" />
										<label for="form77">Email</label>
									</div>
									<div class="text-right pb-2">
										<button type="button" class="btn btn-primary">Add a review</button>
									</div>
								</div>
							</div>
						</div>
						</div>
					</div>
					</div>
					
				</section>
				<section  class="mb-5">
				

				</section>
					<ToastContainer />
				</>
			)
		}
	}

export default ProductDetails;