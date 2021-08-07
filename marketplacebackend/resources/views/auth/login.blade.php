{{-- @extends('../admin.partials.footer') --}}
<!DOCTYPE html>
<html lang="en">
  
<!-- Mirrored from multipurposethemes.com/admin/riday-admin-template/bs4/main/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 27 Jun 2021 09:34:47 GMT -->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="https://multipurposethemes.com/admin/riday-admin-template/bs4/images/favicon.ico">

    <title>Riday Admin Template</title>
    
    <!-- Vendors Style-->
    <link rel="stylesheet" href="{{asset('css/vendors_css.css')}}">
      
    <!-- Style-->  
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="stylesheet" href="{{asset('css/skin_color.css')}}">
     
  </head>

    
<body class="hold-transition theme-primary bg-img fixed" style="background-image: url(https://multipurposethemes.com/admin/riday-admin-template/bs4/images/auth-bg/bg-1.jpg)">
    
    <div class="container h-p100">
        <div class="row align-items-center justify-content-md-center h-p100">   
            
            <div class="col-12">
                <div class="row justify-content-center no-gutters">
                    <div class="col-lg-5 col-md-5 col-12">
                        <div class="bg-white rounded30 shadow-lg">
                            <div class="content-top-agile p-20 pb-0">
                                <h2 class="text-primary">Let's Get Started</h2>
                                <p class="mb-0">Sign in to continue to Marketplace.</p>                         
                            </div>
                            <div class="p-40">
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
                                <form action="{{route('login')}}" method="post">
                                     @csrf
                                    <div class="form-group">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text bg-transparent"><i class="ti-user"></i></span>
                                            </div>
                                            <input type="email" name="email" class="form-control pl-15 bg-transparent" placeholder="Username">
                                        </div>  
                                              @error('email')
                                                <span class="help-block text-danger font-size-12">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text  bg-transparent"><i class="ti-lock"></i></span>
                                            </div>
                                            <input type="password" name="password" class="form-control pl-15 bg-transparent" placeholder="Password">
                                            
                                        </div>
                                          @error('password')
                                            <span class="help-block text-danger font-size-12">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                      <div class="row">
                                        <div class="col-6">
                                          <div class="checkbox">
                                            <input type="checkbox" id="basic_checkbox_1">
                                            <label for="basic_checkbox_1">Remember Me</label>
                                          </div>
                                        </div>
                                        <!-- /.col -->
                                        <div class="col-6">
                                         <div class="fog-pwd text-right">
                                            <a href="javascript:void(0)" class="hover-warning"><i class="ion ion-locked"></i> Forgot pwd?</a><br>
                                          </div>
                                        </div>
                                        <!-- /.col -->
                                        <div class="col-12 text-center">
                                          <button type="submit" class="btn btn-danger mt-10">SIGN IN</button>
                                        </div>
                                        <!-- /.col -->
                                      </div>
                                </form> 
                                @if($message = Session::get('warning'))
                                    <a href="" class="btn btn-sm btn-success ml-2">Resend Verify Mail</a>
                                @endif
                                <div class="text-center">
                                    <p class="mt-15 mb-0">Don't have an account? <a href="{{route('register')}}" class="text-warning ml-5">Sign Up</a></p>
                                </div>  
                            </div>                      
                        </div>
                        <div class="text-center">
                          <p class="mt-20 text-white">- Sign With -</p>
                          <p class="gap-items-2 mb-20">
                              <a class="btn btn-social-icon btn-round btn-facebook" href="#"><i class="fa fa-facebook"></i></a>
                              <a class="btn btn-social-icon btn-round btn-twitter" href="#"><i class="fa fa-twitter"></i></a>
                              <a class="btn btn-social-icon btn-round btn-instagram" href="#"><i class="fa fa-instagram"></i></a>
                            </p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</body>
</html>