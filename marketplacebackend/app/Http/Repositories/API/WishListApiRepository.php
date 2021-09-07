<?php 

namespace App\Http\Repositories\API;
use Illuminate\Http\Request;
use App\Http\Repositories\EloquentRepository;
use App\Models\WishList;
use Auth;
use App\Models\User;
use App\Models\Category;
use DB;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\Api\WishListResource;


class WishListApiRepository extends EloquentRepository{

	public function storeWishListPlace(Request $request){
		$getWishList = WishList::where('product_id',$request->product_id)->first();

		if (!empty($getWishList)) {
			if ($getWishList->product_id != $request->product_id) {

				WishList::create($request->all());
				return 'Successfully added in WishList...';

			}else{
				return 'Item already added in WishList...';
			}
		}else{
				WishList::create($request->all());
				return 'Successfully added in WishList...';

		}

	}

	public function getWishList(){
		$userId = Auth::guard('api')->user()->id;
		return $data =  WishList::where('user_id',$userId)->with('get_products.pro_images')->get();
		// return $data;
		 return $res = WishListResource::collection($data);

	}
	public function deleteWishlistItem($id){
		return WishList::find($id)->delete();
	}
	public function getAllCategories(){
		$data = Category::get();
		$res = CategoryResource::collection($data);
		return $res;
	}
	public function getCategories(){
		$data = Category::whereNull('parent_id')->with('subcategories')->get();
		$res = CategoryResource::collection($data);
		return $res;
	}

	
}

?>