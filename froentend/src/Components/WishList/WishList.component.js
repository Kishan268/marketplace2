import {Component} from  'react'
import { ToastContainer, toast } from 'react-toastify';

class WishList extends Component {
	
    render(){
    		const {wish_list,addToCartHandler,deleteWishlistItem} = this.props;
    		const wishListDatas = wish_list.data
    		// console.log(wishListData)
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
		                                        {wishListDatas !=null ? wishListDatas.map((wishListData,index)=>(
		                                        <tr >
		                                            <td class="uren-product_remove">
		                                            	<button onClick={(()=>deleteWishlistItem(wishListData.id))} href="javascript:void(0)"><i class="fa fa-trash" title="Remove"></i></button >
		                                            </td>
		                                            <td class="uren-product-thumbnail">
		                                            	<a href="javascript:void(0)">
		                                            		<img src="assets/images/product/small-size/1.jpg" alt="Uren's Wishlist Thumbnail"/>
		                                            	</a>
		                                            </td>
		                                            <td class="uren-product-name">
		                                            	<a href="javascript:void(0)">{wishListData.get_products.name}</a></td>
		                                            <td class="uren-product-price"><span class="amount">${wishListData.get_products.price}</span></td>
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