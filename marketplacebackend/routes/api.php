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


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function(){
    //All secure URL's

});
Route::get("all_products",[App\Http\Controllers\ProductsController::class,'allProducts'])->name('all_products');
Route::get("product_details/{id}",[App\Http\Controllers\ProductsController::class,'productDetails'])->name('product_details');

Route::get("get_user_info/{id}",[UserController::class,'getUserInfo'])->name('get_user_info');
Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');

// Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
//     $request->fulfill();

//     return redirect('/home');
// })->middleware(['auth', 'signed'])->name('verification.verify');

// Route::post('/email/verification-notification', function (Request $request) {
//     $request->user()->sendEmailVerificationNotification();

//     return back()->with('message', 'Verification link sent!');
// })->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::post("login",[UserController::class,'userLogin']);
Route::post("register",[UserController::class,'userRegister']);
Route::post("cart_data",[App\Http\Controllers\CartsController::class,'cartDataStore']);
Route::get("get_cart_data/",[App\Http\Controllers\CartsController::class,'getCartData'])->name('get_cart_data');
Route::post("post_order",[App\Http\Controllers\OrdersController::class,'postOrder']);


Route::get("verify/{token}",[App\Http\Controllers\VerifyController::class,'verifyUser']);