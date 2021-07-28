<?php 

namespace App\Http\Repositories;
use Illuminate\Http\Request;
use App\Http\Repositories\EloquentRepository;
use DB;
use App\Models\CartItem;
use App\Models\Cart;
use App\Models\Orders;
use App\Models\User;
use Auth;

class CartsRepository extends EloquentRepository{


	public function cartDataStore(Request $request){
		DB::beginTransaction();
		
		$user_id =  Auth::guard('api')->user()->id;
	
		// return $user_id;

		try{
			$getDuplicatecart = Cart::where('user_id',$user_id)->first();
			if(!empty($getDuplicatecart)){
				$cartItem = CartItem::where(['cart_id'=>$getDuplicatecart->id,'product_id'=>$request->product_id])->first();
				if(empty($cartItem)){
					 Cart::where('user_id',$getDuplicatecart->user_id)
					->update(['qty'=>$getDuplicatecart->qty+1,'total_price'=>$getDuplicatecart->total_price+$request->price]);
					$cartItemData = $this->cartItemData($request);
					$cartItemData['cart_id'] = $getDuplicatecart->id;
					CartItem::create($cartItemData);
					DB::commit();
					return response()->json('Item Added Successfully...',200);
				
				}
				else{

					return response()->json('Item already added...',200);
				}

			}else{ 
				// return 'sdssd';
				$data = $this->cartData($request);
				// return $data;
				$cartId =  Cart::create($data);
				$cartItemData =$this->cartItemData($request);
				$cartItemData['cart_id'] = $cartId->id;
				// return $cartItemData;
				 CartItem::create($cartItemData);
				 DB::commit();
				 return response()->json('Item Added Successfully...',200);

			}
		}
		catch (\Exception $e) {
            // dd('sdsds');
            DB::rollback(); 

            return response()->json('Somthing went wrong....',400);
        
		}

	}

	public function getCartData($token){
		// return $token;
		$userId = User::where('token',$token)->first();
		$data= Cart::with('cart_items')->where('user_id',$userId->id)->first();
		return $data;
	}

	public function cartData($request,$id=null){
		$user_id =  Auth::guard('api')->user()->id;
		return $data=([
			'user_id' =>$user_id,
			'total_price' =>$request->price - ( ($request->price * $request->discount)/100),
			'discounted_price' =>($request->price * $request->discount)/100,
			'amount' =>$request->price,
			'total_item' =>1,
			'item_qty' =>1
		]);
	}

	public function cartItemData($request,$id=null){
		return $data=([
			'product_id' =>$request->product_id,	
			'unit_price' =>$request->price,
			'total_price' =>$request->price* (int)$request->quantity,
			'quantity' =>$request->quantity,
			'discount_percentage' =>$request->discount,
			'discount_amount' =>($request->price * $request->discount)/100
		]);
	}

	public function postOrder($request){
		return Orders::create([
			'cart_id'=>$request->id
		]);
	}

	// public function getOrder(){
	// 	return Orders::where();
	// }
	
}

?>