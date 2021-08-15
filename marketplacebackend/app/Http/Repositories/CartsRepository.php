<?php 

namespace App\Http\Repositories;
use Illuminate\Http\Request;
use App\Http\Repositories\EloquentRepository;
use DB;
use App\Models\CartItem;
use App\Models\Cart;
use App\Models\Orders;
use App\Models\User;
use Response;
use Auth;
use App\Http\Resources\CartResource;
use App\Http\Resources\CartItemResource;


class CartsRepository extends EloquentRepository{


	public function cartDataStore(Request $request){
		DB::beginTransaction();
		

		try{
			$user_id =  Auth::guard('api')->user()->id;
			$getDuplicatecart = Cart::where('user_id',$user_id)->first();

			if(!empty($getDuplicatecart)){

				$cartItem = CartItem::where(['cart_id'=>$getDuplicatecart->id,'product_id'=>$request->product_id])->first();

				if(empty($cartItem)){
					$updateCart = $this->updateCartObject($getDuplicatecart,$request);
					 Cart::where('user_id',$getDuplicatecart->user_id)->update($updateCart);
					$cartItemData = $this->cartItemData($request);
					$cartItemData['cart_id'] = $getDuplicatecart->id;
					CartItem::create($cartItemData);
					DB::commit();
					return $this->getCartData();				
				}
				else{

					return 'false';
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
				 return $this->getCartData();

			}
		}
		catch (\Exception $e) {
            DB::rollback(); 

            return 'Somthing went wrong....';
        
		}

	}

	public function updateCartObject($getDuplicatecart,$request){
		$updateCart['discounted_price'] =$getDuplicatecart->discounted_price + ($request->price * $request->discount)/100;
		$updateCart['total_price'] = $getDuplicatecart->total_price + $request->price - ( ($request->price * $request->discount)/100);
		$updateCart['amount'] = $getDuplicatecart->amount + $request->price;
		$updateCart['item_qty'] =$getDuplicatecart->item_qty + 1;
		return $updateCart;
	}

	public function getCartData(){

		$userId = Auth::guard('api')->user()->id;
		$data= Cart::with('cart_items','cart_items.products_detail')->where('user_id',$userId)->first();
		// if()
		if($data === null){
			return false;
		}
		// return($data);
		$res =  new CartResource($data);
		return $res;
	}

	public function updateCartItem($itemId,$qty,$type){
		if($type==='plus'){
			$cartItem = CartItem::find($itemId);
			$discountAmt = $cartItem->unit_price * $cartItem->discount_percentage/100;
			$cart = Cart::find($cartItem->cart_id);
			$cart->increment('total_item',$qty);
			$cart->increment('discounted_price',$discountAmt);
			$cart->increment('amount',$cartItem->unit_price);
			$cart->increment('total_price',($cartItem->unit_price-$discountAmt));

			$cartItem->increment('quantity',$qty);
			$cartItem->increment('total_price',($cartItem->unit_price-$discountAmt));	
			$cartItem->increment('discount_amount',$discountAmt);
			$cartItem->increment('amount',$cartItem->unit_price);

		}
		else{
			$cartItem = CartItem::find($itemId);
			$discountAmt = $cartItem->unit_price * $cartItem->discount_percentage/100;
			$cart = Cart::find($cartItem->cart_id);
			$cart->decrement('total_item',$qty);
			$cart->decrement('discounted_price',$discountAmt);
			$cart->decrement('amount',$cartItem->unit_price);
			$cart->decrement('total_price',($cartItem->unit_price-$discountAmt));

			$cartItem->decrement('quantity',$qty);
			$cartItem->decrement('total_price',($cartItem->unit_price-$discountAmt));	
			$cartItem->decrement('discount_amount',$discountAmt);	
			$cartItem->decrement('amount',$cartItem->unit_price);
		}
		return true;
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
			'amount' =>$request->price,
			'total_price' =>$request->price-(($request->price * $request->discount)/100),
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

	public function deleteCartItem($itemId){
		// return $this->getCartData();
		$cartItem = CartItem::find($itemId);
		$totalItem = CartItem::where('cart_id',$cartItem->cart_id)->get();
		$cart = Cart::find($cartItem->cart_id);
		if(count($totalItem) === 1){
			$totalItem = CartItem::where('cart_id',$cartItem->cart_id)->delete();
			$cart = Cart::find($cartItem->cart_id)->delete();

			return $this->getCartData();
		}
		$cart->total_price = $cart->total_price - ($cartItem->total_price - $cartItem->discount_amount);
		$cart->discounted_price = $cart->discounted_price - $cartItem->discount_amount ;
		$cart->amount = $cartItem->amount ;
		$cart->total_item = $cart->total_item - 1 ;
		$cart->item_qty = $cart->item_qty - $cartItem->quantity ;
		$cart->save() ;
		$cartItem->delete();
		return $this->getCartData();
	}
	
}

?>