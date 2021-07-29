<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CartItemsResource extends JsonResource
{
    

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'product_id ' => $this->product_id  ,
            'quantity' => $this->quantity,
            'unit_price' => $this->unit_price,
            'total_price' => $this->total_price,
            'discount_percentage' => $this->discount_percentage,
            'discount_amount' => $this->discount_amount,
            'name' => $this->products_detail->name,
            
        ];
    }
}
