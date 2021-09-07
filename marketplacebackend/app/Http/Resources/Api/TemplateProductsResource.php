<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Resources\Json\JsonResource;

class TemplateProductsResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'product_id'=>$this->get_product?$this->get_product->pro_id :'',
            'name'=>$this->get_product?$this->get_product->name :'',
            'bid_option'=>$this->get_product?$this->get_product->bid_option :'',
            'type'=>$this->get_product?$this->get_product->type :'',
            'discount'=>$this->get_product?$this->get_product->discount :'',
            'discounted_price'=>$this->get_product?$this->get_product->discounted_price :'',
            'price'=>$this->get_product?$this->get_product->price :'',
            'shipping_option'=>$this->get_product?$this->get_product->shipping_option :'',
            'user_id'=>$this->get_product?$this->get_product->user_id :'',
            'pro_images'=> $this->get_product ? GetProductImgResource::collection( $this->get_product->pro_images)  : ''            


            


        ];
    }
}
