<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    use HasFactory;
    protected $table = 'cart_item';
    protected $guarded =[];

    public function products_detail(){
        return $this->belongsTo('App\Models\Product','product_id','pro_id');
    }
}
