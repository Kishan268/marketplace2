<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\ServiceType;
use Illuminate\Auth\Events\Registered;
use Mail;
use App\Mail\VerifyMail;
use Illuminate\Support\Str;
class UserController extends Controller
{
    // 
public function __construct()
{
    // $this->middleware('guest');
    // $this->middleware('VerifyTemplate');

}
   public function userLogin(Request $request)
    {

        $user= User::where('email', $request->email)->first();
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response([
                    'message' => ['These credentials do not match our records.']
                ], 404);
            }
        	if ($user->email_verified_at !=null) {
	            // $token = $user->createToken('my-app-token')->plainTextToken;
                $token = $user->createToken('my-app-token')->accessToken;
	            $response = [
	                'user' => $user,
	                'token' => $token
	            ];
            User::where('id',$user->id)->update(['api_token'=>$token]);
             return response($response, 200);
        	}else{
        		return response('Your account is not active. We already sent activation link, Check your email and click on the link to verify your email',201);
        	}
           
    }

    public function userRegister(Request $request){
        $role_id =  '3' ;
    	//  $request->validate([
        //     'email' 	=> 'required', 'string', 'email', 'max:255', 'unique:users',
        //     'password'  => 'required', 'string', 'min:8', 'confirmed',
        //     'country' 	=> 'required',
        //     'f_name' 	=> 'required',
        //     'l_name' 	=> 'required',
        //     'dob' 		=> 'required',
        //     'phone_no' 	=> 'required',
        //     'gender' 	=> 'required',
        //     'address' 	=> 'required',
        //     'district_town' => 'required'
        // ]);
        $data = [
            'name' 		=> $request['country'] .' '.$request['l_name'],
            'email' 	=> $request['email'],
            'password' 	=> Hash::make($request['password']),
            'country' 	=> $request['country'],
            'f_name'	=> $request['f_name'],
            'l_name' 	=> $request['l_name'],
            'dob'		=> $request['dob'],
            'phone_no' 	=> $request['phone_no'],
            'gender' 	=> $request['gender'],
            'address' 	=> $request['address'],
            'district_town' => $request['district_town'],
            'remember_token'=> Str::random(40),
            'user_role' 	=> $role_id,
            'city' => $request['city'],
    		'state' => $request['state'],
    		'zip'=> $request['zip']

        ];
// return($data);
       
        $user = User::create($data);
         $token = $user->createToken('my-app-token')->plainTextToken;
            $response = [
                'user' => $user,
                'token' => $token
            ];

        // $user->update($response); 
        // $user->attachRole($role_id);
// return $user;
        Mail::to($user->email)->send(new VerifyMail($user));
        return response($response, 200);

    }
    // public function register(Request $request)
    // {
    //     $this->validator($request->all())->validate();
    //     event(new Registered($user = $this->create($request->all())));
    //     return $this->registered($request, $user)
    //                     ?: redirect('/login')->with('success','We sent activation link, Check your email and click on the link to verify your email');


    // }
    public function getUserInfo($token){
        $userInfo = User::where('token',$token)->first();
        return response($userInfo, 200);

    }

}
