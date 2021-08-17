<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $guarded =[];
    public function get_order_items(){
        return $this->hasMany(OrderItem::class,'order_id','id');
    }
    public function get_user(){
        return $this->belongsTo(User::class,'user_id','id');
    }
}
