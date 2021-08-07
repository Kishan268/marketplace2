<?php 

namespace App\Http\Repositories;
use Illuminate\Http\Request;
use App\Http\Repositories\EloquentRepository;
use App\Models\Orders;
use App\Models\Cart;
use Auth;
use App\Models\User;

class OrdersRepository extends EloquentRepository{


	public function postOrder($request){

		// return $request->id;
		return $getOrderDetails = Cart::where('id',$request->id)->first();
		return Orders::create([
			'cart_id'=>$request->id
		]);
	}

	public function getOrder(){
         
        $user = Auth::user()->user_role;
		return Orders::where('seller_id', Auth::user()->id)->get();


	}
	public function getCarts(){
		return Cart::where('user_id',Auth::user()->id)->get();
	}
	
}

?>