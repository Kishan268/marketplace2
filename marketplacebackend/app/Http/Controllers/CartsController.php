<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Repositories\CartsRepository;
use App\Http\Resources\CartResource;
use Auth;
use Response;


class CartsController extends Controller
{
    private $postCartsRepo;
    private $getCartDataRepo;
    private $postOrderDataRepo;

        
    public function __construct(CartsRepository $postCartsRepo ,CartsRepository $getCartDataRepo,CartsRepository $postOrderDataRepo)
    {
        $this->postCartsRepo = $postCartsRepo;
        $this->getCartDataRepo = $getCartDataRepo;
        $this->postOrderDataRepo = $postOrderDataRepo;
    }
    public function cartDataStore(Request $request)
    { 
        // return url('/');
        $cartData = $this->postCartsRepo->cartDataStore($request);
        if($cartData === 'false'){
             return Response::json([
                'data' => 'Item already in cart...'
            ], 401);   
        }
        return Response::json([
                'data' => $cartData
            ], 200);
    }
    public function getCartData(){
        // return '$token';
        // return ($this->getCartDataRepo->getCartData());
        $cartData = $this->postCartsRepo->getCartData();

        return Response::json([
            'data' => $cartData
        ], 200);
         

    }
    public function postOrder(Request $request){
        // return ($this->getCartDataRepo->getCartData());
        $ordertData = $this->postOrderDataRepo->postOrder($request);
        return response($ordertData, 200);

    }
}
