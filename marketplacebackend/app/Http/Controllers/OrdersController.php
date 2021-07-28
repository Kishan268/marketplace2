<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Repositories\OrdersRepository;
use Auth;

class OrdersController extends Controller
{
    private $postOrderDataRepo;
    private $getOrderDataRepo;
    private $getCartsDataRepo;

    public function __construct(OrdersRepository $postOrderDataRepo,OrdersRepository $getOrderDataRepo,OrdersRepository $getCartsDataRepo)
    {
        $this->postOrderDataRepo = $postOrderDataRepo;
        $this->getOrderDataRepo = $getOrderDataRepo;
        $this->getCartsDataRepo = $getCartsDataRepo;
    }
  
    public function postOrder(Request $request){
        $ordertData = $this->postOrderDataRepo->postOrder($request);
        return response($ordertData, 200);
    }
    public function getOrder(){
        $ordertData = $this->getOrderDataRepo->getOrder();
        return response($ordertData, 200);
    }
    public function getCarts(){
		dd(Auth::user()->id);

        $cartsData = $this->getCartsDataRepo->getCarts();
        return response($cartsData, 200);
    }
}
