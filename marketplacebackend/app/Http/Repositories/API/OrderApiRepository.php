<?php 

namespace App\Http\Repositories\API;
use Illuminate\Http\Request;
use App\Http\Repositories\EloquentRepository;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Cart;
use App\Models\CartItem;
use Auth;
use App\Models\User;
use DB;


class OrderApiRepository extends EloquentRepository{

	public function getOrder(){
		$userId = Auth::guard('api')->user()->id;
	}

	public function createOrder(Request $request){
		
			$cartId = $request->cart_id;
			$address = $request->address;
			$shipping_charges = $request->shipping_charges;
			$cart = Cart::find($cartId);
			$cartItem = CartItem::where('cart_id',$cart->id)->get();
			$marchentIds = [];
			$orderId = 0;

			foreach($cartItem as $item){
				if(!in_array($item->products_detail->user_details->id,$marchentIds)){
					$marchentIds[] = $item->products_detail->user_details->id;
					$order['invoice_number'] = '#'.(string)$cart->id.(string)rand();
					$order['user_id'] = $item->products_detail->user_details->id;
					$order['total_price'] = $cart->total_price;
					$order['discounted_price'] = $cart->discounted_price;
					$order['amount'] = $cart->amount;
					$order['shiping_charges'] = $shipping_charges;
					$order['total_item'] = $cart->total_item;
					$order['item_qty'] = $cart->item_qty;
					$order['address_id'] = (int)$address;
					$orderId = Order::create($order)->id;
				}

				$orderItem = new OrderItem;
				$orderItem->order_id = $orderId; 
				$orderItem->product_id = $item->product_id; 
				$orderItem->quantity = $item->quantity; 
				$orderItem->unit_price = $item->unit_price; 
				$orderItem->tax_percentage = $item->tax_percentage; 
				$orderItem->discount_percentage = $item->discount_percentage; 
				$orderItem->discount_amount = $item->discount_amount; 
				$orderItem->tax_amount = $item->tax_amount; 
				$orderItem->amount = $item->amount; 
				$orderItem->save();
			}
			$cart->delete();
			return 'Order successfully created...';
	}
	
}

?>