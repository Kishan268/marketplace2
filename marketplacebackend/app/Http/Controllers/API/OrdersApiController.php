<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Repositories\API\OrderApiRepository;
use Response;

class OrdersApiController extends Controller
{
    private $order;

    public function __construct(OrderApiRepository $order)
    {
        $this->order = $order;
    }

    public function createOrder(Request $request){

        // return  $request;
        $data = $this->order->createOrder($request);
        return Response::json([
                'data' => $data
            ], 200);
    }
}
