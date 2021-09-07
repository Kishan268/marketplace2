<?php 

namespace App\Http\Repositories\API;
use Illuminate\Http\Request;
use App\Http\Repositories\EloquentRepository;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use App\Models\ShipingAddress;
use App\Models\PlaceBid;
use App\Models\User;
use Auth;
use DB;


class OrderApiRepository extends EloquentRepository{

	public function getOrder(){
		$userId = Auth::guard('api')->user()->id;
	}

	public function createOrder(Request $request){

		// return $request->all();
		$userId = Auth::guard('api')->user()->id;

		if ($request->order_type == 'buy_now') {
			// if ($request->address_type == 'custome_address') {
			// $shipingAddress = $this->shippingAddress($request);
			// $shippingAdrId = ShipingAddress::create($shipingAddress)->id;
			$products = Product::where('pro_id',$request->product_id)->first();
			$total_discounted_price = $products->discounted_price*1;
			$totalAmount = $products->price*1;

			$order['user_id'] = $userId;
			$order['seller_id'] = $products->user_id;
			$order['invoice_number'] = '#'.(string)$userId.(string)rand();
			$order['amount'] = $totalAmount;

			$order['total_price'] =$total_discounted_price;
			$order['discounted_price'] = $totalAmount - $total_discounted_price;
			$order['shiping_charges'] = 0;
			$order['total_item'] = 1;
			$order['item_qty'] = 1;
			$order['address_id'] = $request->address_id;
			$order['type_of_shiping'] = $request->type_of_shiping;
			$orderId = Order::create($order)->id;
			$orderItem = [
				'order_id' => $orderId,
				'product_id' => $request->product_id,
				'quantity' => $request->quantity,
				'unit_price' => $products->price,
				'total_price' => 0,
				'tax_percentage' =>0,
				'discount_percentage' => $products->discount,
				'discount_amount' =>  $totalAmount - $total_discounted_price,
				'tax_amount' => 0,
				'amount' =>  $totalAmount
			];

			OrderItem::create($orderItem);
			// }

			return 'Order successfully Placed...';

		}else{

			$cart = Cart::where('user_id',$userId)->first();
			// $shipingAddress = $this->shippingAddress($request);
			// $shippingAdrId = ShipingAddress::create($shipingAddress)->id;

			$cartId = $cart->id;
			// $address = $request->address;
			// $shipping_charges = $request->type_of_shiping;
			// $cart = Cart::find($cartId);
			// return $cart;

			$cartItem = CartItem::where('cart_id',$cartId)->with('products_detail.user_details')->get();
			$marchentIds = [];
			$orderId = 0;
			foreach($cartItem as $item){
				if(!in_array($item->products_detail->user_id,$marchentIds)){
					$marchentIds[] = $item->products_detail->user_id;
					$order['user_id'] = $userId;
					$order['invoice_number'] = '#'.(string)$cart->id.(string)rand();
					$order['seller_id'] = $item->products_detail->user_id;
					$order['total_price'] = $cart->total_price;
					$order['discounted_price'] = $cart->discounted_price;
					$order['amount'] = $cart->amount;
					// $order['shiping_charges'] = $shipping_charges;
					$order['total_item'] = $cart->total_item;
					$order['item_qty'] = $cart->item_qty;
					$order['address_id'] = $request->address_id;
					$order['type_of_shiping'] = $request->type_of_shiping;
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

	public function storeBidePlace(Request $request){
		$data = [
			'user_id'=>$request->user_id,
			'product_id'=>$request->product_id,
			'your_bid_price'=>$request->your_bid_price,
			'shipping_option'=>$request->shipping_option,
			'payment_methode'=>$request->payment_methode,
			'reminder_email'=>$request->reminder_email
		];
		PlaceBid::create($data);
			return 'Bid Placed successfully...';
	}
	public function storeShippingAddress(Request $request){

		// return $request->all();
		// return ShipingAddress::all()->delete();
		$shipingAddress = $this->shippingAddress($request);
		$shippingAdrId = ShipingAddress::create($shipingAddress);
		return $shippingAdrId;


	}
	public function getShippingAddress(){
		$userId = Auth::guard('api')->user()->id;
		$shippingAddress = ShipingAddress::where('user_id',$userId)->get();
		return $shippingAddress;
	}
	public function getOrderDetails($id){
		$userId = Auth::guard('api')->user()->id;
		return Order::where('user_id',$userId)
					->where('id',$id)
					->with('get_order_items.get_product.pro_images','get_user')
					->first();
	}
	public function shippingAddress($request,$id=null){

		// return $request;
		$userId = Auth::guard('api')->user()->id;

		$shipingAddress = [
				'user_id'=> $userId,
				'state'=> $request->state,
				'address'=> $request->address,
				'city'=> $request->city,
				'f_name'=> $request->f_name,
				'zip_code'=> $request->zip,
				'email'=> $request->email,
				'phone_no'=> $request->phone_no,
				'alternative_phone_no'=> $request->alternative_phone_no,
				'notes'=>$request->notes
			];

			return $shipingAddress;
	}
	
}

?>