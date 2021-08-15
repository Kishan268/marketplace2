<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    

    public function toArray($request)
    {
     
        return [
            'catg_id' => $this->catg_id,
            'catg_name' => $this->catg_name,
            'parent_id' => $this->parent_id,
            'subcategories'=>SubCategoryResource::collection($this->subcategories)              
        ];
    }
}
