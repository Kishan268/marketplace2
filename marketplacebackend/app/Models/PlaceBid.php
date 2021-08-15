<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlaceBid extends Model
{
    use HasFactory;
    protected $table = 'place_bids';
    // protected $primaryKey = 'pro_id';
    // protected $primaryKey = 'user_id';
    protected $guarded = []; 
}
