<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// Route::group(['middleware' => 'auth:sanctum'], function(){
//     //All secure URL's

// });

Route::post("login",[UserController::class,'userLogin']);
Route::post("register",[UserController::class,'userRegister']);

Route::get("all_products",[App\Http\Controllers\ProductsController::class,'allProducts'])->name('all_products');
Route::get("product_details/{id}",[App\Http\Controllers\ProductsController::class,'productDetails'])->name('product_details');

Route::group(['middleware' => 'auth:api'], function(){

    Route::get("get_user_info/{id}",[UserController::class,'getUserInfo'])->name('get_user_info');

    Route::get('/email/verify', function () {
        return view('auth.verify-email');
    })->middleware('auth')->name('verification.notice');

    Route::post("cart_data",[App\Http\Controllers\CartsController::class,'cartDataStore']);

    Route::get("get_cart_data/",[App\Http\Controllers\CartsController::class,'getCartData'])->name('get_cart_data');

    Route::post("update_cart_item/",[App\Http\Controllers\CartsController::class,'updateCartItem'])->name('update_cart_item');

    Route::get("delete_cart_item/{id?}",[App\Http\Controllers\CartsController::class,'deleteCart'])->name('deleteCart');

    Route::post("post_order",[App\Http\Controllers\OrdersController::class,'postOrder']);
    Route::post("createOrder",[App\Http\Controllers\API\OrdersApiController::class,'createOrder']);

    Route::get("verify/{token}",[App\Http\Controllers\VerifyController::class,'verifyUser']);
});