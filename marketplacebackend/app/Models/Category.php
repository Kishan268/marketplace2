<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    protected $table = 'catg_mast';
    protected $guarded =[];
    public $timestamps = false;

     public function subcategories(){
    	return $this->hasMany('App\Models\Category','parent_id','catg_id');
    }

}