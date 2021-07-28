import {useState,useEffect ,Component} from 'react'
import {connect} from 'react-redux'

import { Button } from 'react-bootstrap';
import {useHistory , useParams} from "react-router-dom";
import parse from 'html-react-parser';
import  axios from 'axios';
import {addToCart} from '../../../store/addToCart/addToCart.action.js'



const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})

 function ProductDetails(props){
 	const { id } = useParams()
 	console.log(id)
 	const API_URL = "http://localhost:8000/storage/";
	const [products, setproducts] = useState();
	const [productsImg, setproductsImg] = useState();
	const [productsSize, setproductsSize] = useState();
	useEffect(()=>{
		loadProduct();
	},[]);

	const loadProduct = async () =>{
	const result = await axios.get(`http://localhost:4000/product_details/${id}`).then((result)=>{
			setproducts(result.data)
			setproductsImg(result.data.pro_images)
			setproductsSize(result.data.size)
			console.log(result.data.pro_images)
		}).catch((error)=>{
			console.log(error)
		});
	// console.log("http://localhost:8000/"+result.data.reverse()[0].pro_images[0].doc_path)
	
}
	return (
		<>
		<div class ="container" >
			<h1 class="">Product Details </h1>
			<section class="mb-5 ">
			<div class="row mt-5">
				<div class="col-md-8 mb-4 mb-md-0">
					<div id="mdb-lightbox-ui"></div>
					<div class="mdb-lightbox">
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
					</div>
				</div>
				<div class="col-md-4" style={{ fontSize: '130%'}}>
					<div class="card  mt-3" >
						<div class="card-body" >
							<h5>{products ? products.name :''}</h5>
						
						<p><span class="mr-1"><strong>${products ? products.price : ''}</strong></span>
						</p>
						</div>
					</div>
					<div class="card" >
						<div class="card-body" >
							<div data-aut-id="profileTitle" class="">Seller description</div>
									<div class="" data-aut-id="profileCard">
										<a rel="nofollow" href="/profile/512017806">
											<figure class="rui-1gV1x _186ru" style={{width: '68px', height: '68px', backgroundImage: 'url(https://statics.olx.in/external/base/img/avatar_3.png)'}}>
											</figure>
										</a>
									<a rel="nofollow" href="/profile/512017806">
										<div class="_3oOe9">Mukesh ></div>
									</a>
									<div data-aut-id="memberSince">
										<div class="">
											<span>Member since Jun 2021</span>
										</div>
									</div>
								<button type="button" data-aut-id="btnChat" class="btn btn-primary"><span>Chat with seller</span></button>
							</div>
						</div>
					</div>
					<div class="card  mt-3" >
						<span>  Product Short Description </span>
						<div class="card-body" >
							<p class="pt-1">{products ? products.short_des : ''}</p>
						</div>
					</div>
					<div class="card">
						<div class="card-body">
							<button type="button" class="btn btn-primary mb-2">Buy now</button>
							<button onClick={()=>{props.addToCartHandler({pro_id:products.pro_id,name:products.name,price:products.price})}} type="button" class="btn btn-light  mb-2"><i class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
						</div>
					</div>
					<hr/>
				</div>
			</div>
		</section>

		<section>
			<div class="card mt-3">
			<div class="card-body">
			<div class="classic-tabs border rounded px-4 pt-1 mb-5">
				<h1>Tabs with details</h1>
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
			<h1>Related products</h1>
				<div class="row">
					<div class="col-md-6 col-lg-3 mb-5">
						<div class="">
							<div class="view zoom overlay z-depth-2 rounded">
								<img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample" />
								<a href="#!">
									<div class="mask">
										<img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" />
										<div class="mask rgba-black-slight"></div>
									</div>
								</a>
							</div>
							<div class="pt-4">
								<h5>Fantasy T-shirt</h5>
								<h6>12.99 $</h6>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-lg-3 mb-5">
						<div class="">
							<div class="view zoom overlay z-depth-2 rounded">
								<img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" alt="Sample" />
								<a href="#!">
									<div class="mask">
										<img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg" />
										<div class="mask rgba-black-slight"></div>
									</div>
								</a>
							</div>
							<div class="pt-4">
								<h5>Fantasy T-shirt</h5>
								<h6>12.99 $</h6>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-lg-3 mb-5">
						<div class="">
							<div class="view zoom overlay z-depth-2 rounded">
								<img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg" alt="Sample" />
								<h4 class="mb-0"><span class="badge badge-primary badge-pill badge-news">Sale</span></h4>
								<a href="#!">
									<div class="mask">
										<img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg" />
										<div class="mask rgba-black-slight"></div>
									</div>
								</a>
							</div>
							<div class="pt-4">
								<h5>Fantasy T-shirt</h5>
								<h6>
					            <span class="text-danger mr-1">$12.99</span>
					            <span class="text-grey"><s>$36.99</s></span>
					          </h6>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-lg-3 mb-5">
						<div class="">
							<div class="view zoom overlay z-depth-2 rounded">
								<img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg" alt="Sample" />
								<h4 class="mb-0"><span class="badge badge-primary badge-pill badge-news">Sale</span></h4>
								<a href="#!">
									<div class="mask">
										<img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg" />
										<div class="mask rgba-black-slight"></div>
									</div>
								</a>
							</div>
							<div class="pt-4">
								<h5>Fantasy T-shirt</h5>
								<h6>
					            <span class="text-danger mr-1">$12.99</span>
					            <span class="text-grey"><s>$36.99</s></span>
					          </h6>
							</div>
						</div>
					</div>
				</div>
			</section>
			</div>


  

		</>
	)
	}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);