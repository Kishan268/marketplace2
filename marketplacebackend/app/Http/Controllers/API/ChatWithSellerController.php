<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Repositories\API\ChatWithSellerRepository;
use Response;
class ChatWithSellerController extends Controller
{
    private $chatWithSeller;

    public function __construct(ChatWithSellerRepository $chatWithSeller)
    {
        $this->chatWithSeller = $chatWithSeller;
    }
    

   
    public function storeMessage(Request $request)
    {
        $data = $this->chatWithSeller->storeMessage($request);
         return Response::json([
                'data' => $data
            ], 200);
    }
    public function getMessage(Request $request)
    {
        $data = $this->chatWithSeller->getMessage($request);
         return Response::json([
                'data' => $data
            ], 200);
    }
    public function chatWithUser(Request $request)
    {
        $data = $this->chatWithSeller->chatWithUser($request);
         return Response::json([
                'data' => $data
            ], 200);
    }

    
   
}
