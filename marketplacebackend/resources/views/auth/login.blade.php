@extends('frontend.layouts.main')

@section('content')
<div class="container-fluid" style="background-image: url('{{asset('slider/city_vector.png')}}');height: 500px">
    <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-5 mt-5">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Login</h5>
                </div>
                <div class="card-body">
                    <form action="{{route('login')}}" method="post">
                        @csrf
                        
                        <div class="row">
                            <div class="col-md-12">
                                @if($message = Session::get('success'))
                                    <div class="alert alert-success">
                                        {{$message}}
                                    </div>
                                @endif
                                @if($message = Session::get('warning'))
                                    <div class="alert alert-warning">
                                        {{$message}}
                                    </div>

                                @endif 
                            </div>                    
                            <div class="col-md-12 form-group">
                                <label for="email" class="font-weight-bold">Email Address</label>
                                <input type="email" name="email" class="form-control" placeholder="Email address" id="email">
                                @error('email')
                                    <span class="help-block text-danger font-size-12">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                             <div class="col-md-12 form-group">
                                <label for="password" class="font-weight-bold">Password</label>
                                <input type="password" name="password" class="form-control" placeholder="Password" id="password">
                            </div>
                            <div class="col-md-12">
                                <button type="submit" class="btn btn-sm btn-theme">Sign In</button>
                                <button class="btn btn-sm btn-primary ml-2">Forgot Password</button>
                                {{-- @if($message = Session::get('warning'))
                                    <a href="" class="btn btn-sm btn-success ml-2">Resend Verify Mail</a>
                                @endif --}}
                                <br>
                                <br>
                                <a href="{{route('register')}}">Not Registered?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
