<?php 

namespace App\Http\Repositories;
use Illuminate\Http\Request;
use App\Http\Repositories\EloquentRepository;
use App\Models\Product;
class AllProductsRepository extends EloquentRepository{

	public function all(){
		return Product::where('status','A')->with('pro_images','categories','brand')->get();
	}	
	public function productDetails($id){
		return Product::where('pro_id',$id)->with('pro_images','categories','brand','user_details')->first();
	}
	public function cartData(Request $request){
		dd($request);
		return Product::create();
	}
	
}

?>