<?php 

namespace App\Http\Repositories\Admin;
use Illuminate\Http\Request;

use App\Http\Repositories\EloquentRepository;
use App\Models\Category;

class CategoryRepository extends EloquentRepository{

	public function all(){
		return Category::whereNull('parent_id')->with('subcategories')->get();
	}
	public function catgStore($request){
		// dd($request);
		$data['catg_name']=$request->catg_name;
		$data['parent_id']=$request->parent_id;
		return Category::create($data);
		
	}
	public function editCategory($id){
		// dd($id);
		return Category::where('catg_id',$id)->with('subcategories')->first();
	}
	public function updateCategory($request,$id){
		// dd($request);
		$data['catg_name']=$request->catg_name;
		$data['parent_id']=$request->parent_id;
		return Category::where('catg_id',$id)->update($data);
	}
	public function trash($id){
		return Category::where('catg_id',$id)->delete();
	}

	

}

?>