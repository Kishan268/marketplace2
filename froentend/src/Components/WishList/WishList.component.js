import {Component} from  'react'
import { ToastContainer, toast } from 'react-toastify';
import {useHistory , useParams,Link} from "react-router-dom";

class WishList extends Component {
	
    render(){
	 		const API_URL = 'http://localhost:8000/storage/'

    		const {wish_list,addToCartHandler,deleteWishlistItem} = this.props;
    		const wishListDatas = wish_list.data
    		console.log(wishListDatas)
            return(
               <>
               	<div className="container">
               		<div class="uren-wishlist_area">
				            <div class="container-fluid">
				                <div class="row">
				                    <div class="col-lg-12">
				                        <form action="javascript:void(0)">
				                            <div class="table-content table-responsive">
				                                <table class="table">
				                                    <thead>
				                                        <tr>
				                                            <th class="uren-product_remove">remove</th>
				                                            <th class="uren-product-thumbnail">images</th>
				                                            <th class="cart-product-name">Product</th>
				                                            <th class="uren-product-price">Unit Price</th>
				                                            <th class="uren-product-stock-status">Stock Status</th>
				                                            <th class="uren-cart_btn">add to cart</th>
				                                        </tr>
				                                    </thead>
				                                    <tbody>
				                                        {wishListDatas ? wishListDatas.map((wishListData,index)=>(
				                                        <tr >
				                                            <td class="uren-product_remove">
				                                            	<button onClick={(()=>deleteWishlistItem(wishListData.id))} href="javascript:void(0)"><i class="fa fa-trash" title="Remove"></i></button >
				                                            </td>
				                                            <td class="uren-product-thumbnail">
                                                			<Link to={`/product-details/${wishListData.get_products ? wishListData.get_products.pro_id:''}`} tabindex="0">
				                                            		<img width="30" hieght="30" src={API_URL+wishListData.get_products.pro_images[0].doc_path} alt="Uren's Wishlist Thumbnail"/>
				                                            	</Link>
				                                            </td>
				                                            <td class="uren-product-name">
                                                			<Link to={`/product-details/${wishListData.get_products ? wishListData.get_products.pro_id:''}`} tabindex="0">

				                                            	{wishListData.get_products?wishListData.get_products.name:''}
				                                            	</Link></td>
				                                            <td class="uren-product-price"><span class="amount">${wishListData.get_products?wishListData.get_products.price:''}</span></td>
				                                            <td class="uren-product-stock-status"><span class="in-stock">in stock</span></td>
				                                            <td class="uren-cart_btn">
				                                            		<button className="btn btn-warning btn-sm" onClick={()=>{addToCartHandler({product_id:wishListData.get_products.pro_id,quantity:1,price:wishListData.get_products.price,discount:wishListData.get_products.discount})}}>add to cart</button>
				                                            	</td>
				                                        </tr>
				                                        )): ''}
				                                       
				                                    </tbody>
				                                </table>
				                            </div>
				                        </form>
				                    </div>
				                </div>
				            </div>
				        </div>
               	</div>
					<ToastContainer />

               </>

                	
            )
    }
}

export default WishList;