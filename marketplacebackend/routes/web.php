<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return view('backend.home');
	
    return view('auth.login');
});
Route::get('/welcome', function () {
    // return view('backend.home');
    
    return view('welcome');
});
Route::post("register",[UserController::class,'userRegister']);
Route::get("verify/{token}",[App\Http\Controllers\VerifyController::class,'verifyUser']);

Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect('/home');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::get('/refresh_captcha', [App\Http\Controllers\VerifyController::class, 'refreshCaptcha']);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::resource('category',App\Http\Controllers\Admin\master\CategoriesConroller::class);
Route::resource('brands',App\Http\Controllers\Admin\master\BrandsController::class);
Route::resource('template',App\Http\Controllers\Admin\master\TemplateController::class);
Route::get('assign-products/{id}',[App\Http\Controllers\Admin\master\TemplateController::class,'assignProducts'])->name('assign_product');
Route::post('assign-products',[App\Http\Controllers\Admin\master\TemplateController::class,'storeAssignProducts'])->name('store_assign_product');
Route::delete('delete_assign_product/{id}',[App\Http\Controllers\Admin\master\TemplateController::class,'deleteAssignProduct'])->name('delete_assign_product');
Route::resource('products',App\Http\Controllers\Admin\buyerseller\ProductController::class);
Route::get('/product-status/{id}',[App\Http\Controllers\Admin\buyerseller\ProductController::class,'productStatus'])->name('product_status');
Route::get('/product_approve/{id}',[App\Http\Controllers\Admin\buyerseller\ProductController::class,'productApprove'])->name('product_approve');
Route::get('/product_destroy/{id}',[App\Http\Controllers\Admin\buyerseller\ProductController::class,'productDestroy'])->name('product_destroy');
Route::resource('/buyerseller',App\Http\Controllers\Admin\buyerseller\BuyerSellerController::class);
Route::get('/buyerseller_approve/{id}',[App\Http\Controllers\Admin\buyerseller\BuyerSellerController::class,'buyersellerAprove'])->name('buyerseller_approve');
Route::get('/buyerseller_destroy/{id}',[App\Http\Controllers\Admin\buyerseller\BuyerSellerController::class,'buyerseller_destroy'])->name('buyerseller_destroy');
Route::get('/orders',[App\Http\Controllers\OrdersController::class,'getOrder'])->name('orders');
Route::get('/chat-with-user',[App\Http\Controllers\Admin\chatwithUser\ChatWithUserController::class,'chatWithUser'])->name('chat_with_user');
Route::post('/user_messages',[App\Http\Controllers\Admin\chatwithUser\ChatWithUserController::class,'userMessages'])->name('user_messages');
