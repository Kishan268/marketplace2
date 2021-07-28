<?php 

namespace App\Http\Repositories;
use Illuminate\Http\Request;
use App\Http\Repositories\EloquentRepository;
use App\Models\Orders;
use App\Models\Cart;
class OrdersRepository extends EloquentRepository{


	public function postOrder($request){

		// return $request->id;
		return $getOrderDetails = Cart::where('id',$request->id)->first();
		return Orders::create([
			'cart_id'=>$request->id
		]);
	}

	public function getOrder(){
		return Orders::get();
	}
	public function getCarts(){
		return Cart::where('user_id',Auth::user()->id)->get();
	}
	
}

?>