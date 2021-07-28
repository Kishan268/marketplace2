<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    

    public function toArray($request)
    {
        // return $request;
        // return parent::toArray($request);
        return [
            'pro_id' => $this->pro_id,
            'user_id' => $this->user_id,
            'price' => $this->price,
            'qty' => $this->qty,
            'name' => $this->name,
            'image_path' => $this->image_path,
            
        ];
    }
}
