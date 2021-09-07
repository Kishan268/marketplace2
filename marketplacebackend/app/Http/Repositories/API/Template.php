<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    use HasFactory;
    protected $table = 'tamplates';
    protected $guarded = [];

    public function get_assign_products(){
        return $this->hasMany('App\Models\ProductAssignTemplate','template_id','id');
    }
}
