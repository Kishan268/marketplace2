<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $table = 'order_item';
    protected $guarded = [];

     public function get_product(){
        return $this->belongsTo(Product::class,'product_id');
    }

}
