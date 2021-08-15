<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WishList extends Model
{
    use HasFactory;
    protected $table = 'wish_lists';
    protected $guarded = [];

    public function get_products(){
        return $this->belongsTo('App\Models\Product','product_id','pro_id');
    }
}
