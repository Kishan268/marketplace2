<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Resources\Json\JsonResource;
use URL;
class GetProductImgResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'doc_path' => URL::to('storage/'.$this->doc_path)
        ];
    }
}
