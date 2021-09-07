<?php 

namespace App\Http\Repositories\API;
use Illuminate\Http\Request;
use App\Http\Repositories\EloquentRepository;
use App\Models\Template;
use Auth;
use DB;
use App\Http\Resources\Api\TemplateResource;


class TemplateRepository extends EloquentRepository{

	public function getTemplateProduct($slug){
		// $userId = Auth::guard('api')->user()->id;
		$data = Template::with('get_assign_products.get_product.pro_images')->where('slug',$slug)->get();
		// return $data;
		$res = TemplateResource::collection($data);
		return $res;

	}
	public function getTemplate(){
		$userId = Auth::guard('api')->user()->id;
		$data = Template::with('get_assign_products.get_product.pro_images')->get();
		// return $data;
		$res = TemplateResource::collection($data);
		return $res;

	}
	
	
}

?>