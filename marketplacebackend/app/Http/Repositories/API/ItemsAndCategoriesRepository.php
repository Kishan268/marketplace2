<?php 

namespace App\Http\Repositories\API;
use Illuminate\Http\Request;
use App\Http\Repositories\EloquentRepository;
use App\Models\WishList;
use Auth;
use App\Models\User;
use App\Models\Category;
use App\Models\Product;
use DB;
use App\Http\Resources\CategoryResource;


class ItemsAndCategoriesRepository extends EloquentRepository{

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
	public function getItemsByCategory($catg_name){

		$categoryId = Category::where('catg_name',$catg_name)->with('subcategories')->first();
		if(!empty($categoryId)){
			$data = Product::where('catg_id',$categoryId->catg_id)
					->with('subcategories','pro_images','categories')
					->get();
			return $data;
		}else{
			$data = Product::with('subcategories','pro_images','categories')
					->orWhere('name', 'like', '%' . $catg_name . '%')
					->get();
			if (empty($data)) {
				$data = Product::with('subcategories','pro_images','categories')
					->get();
			return $data;
			}
			return $data;

		}
		// $res = CategoryResource::collection($data);
	}

	
}

?>