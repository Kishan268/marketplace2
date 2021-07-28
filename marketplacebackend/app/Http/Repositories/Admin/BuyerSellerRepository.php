<?php 

namespace App\Http\Repositories\Admin;
use Illuminate\Http\Request;
use App\Http\Repositories\EloquentRepository;
use App\Models\User;
use Auth;
class BuyerSellerRepository extends EloquentRepository{

	public function all(){
		
		return User::get();
	}
	
}

?>