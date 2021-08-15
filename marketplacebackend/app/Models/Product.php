<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
    protected $primaryKey = 'pro_id';
    protected $guarded = []; 

    public function pro_images(){
    	 return $this->hasMany('App\Models\Document', 'product_id','pro_id')->where('doc_type','product');
    }

    public function categories(){
        return $this->hasMany(Category::class,'catg_id','catg_id')->select('catg_id','parent_id','catg_name');
    }
    public function brand(){
        return $this->belongsTo('App\Models\Brand','brand','brand_id')->select('name');
    }
    public function user_details(){
        return $this->belongsTo('App\Models\User','user_id','id');
    }
    public function subcategories(){
        return $this->hasMany(Category::class,'parent_id','catg_id');
    }
}
