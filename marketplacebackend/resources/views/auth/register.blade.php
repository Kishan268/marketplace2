@extends('frontend.layouts.main')


@section('content')


  <div class="row">
        <div class="col-md-12 register-inner-body" >
            <div class="col-md-11 m-auto register-body">
                <div class="card">
                    <div class="card-body bg-white">
                        <form autocomplete="off" action="{{url('register')}}" method="post" id="example-form">
                            @csrf
                            <input type="hidden" name="user_role"  placeholder="Enter Your Email Address"   value="seller">

                            <div class="row">
                                <div class="col-md-12 form-group error-div">
                                    <hr>
                                    <h6 class="font-weight-bold f-14">Account Details</h6>
                                </div>
                                <div class="col-md-6 form-group error-div">
                                    <label for="email">Email:</label>
                                    <input type="email" name="email"  placeholder="Enter Your Email Address" class="form-control required" id="email" value="{{old('email')}}">
                                    @error('email')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-6 form-group error-div">
                                    <label>Password:</label>
                                    <input type="password" name="password" class="form-control required" placeholder="Password" id="password">
                                    @error('password')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-6 form-group error-div">
                                    <label>Confirm Password: </label>
                                    <input type="password" name="password_confirmation" class="form-control required" placeholder="Re-Type Password" >
                                    @error('password_confirmation')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                              
                           
                            </div
</div>
                            <div class="row">
                                <div class="col-md-12 form-group error-div">
                                    <hr>
                                    <h6 class="font-weight-bold f-14">Business details</h6>
                                </div>
                                <div class="col-md-6 form-group error-div">
                                    <label for="ebusiness_namemail">Business name:</label>
                                    <input type="text" name="business_name"  placeholder="Enter Your Business name" class="form-control required" value="{{old('business_name')}}">
                                    @error('business_name')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                
                                <div class="col-md-6 form-group error-div">
                                    <label>Street address:</label><br>
                                    <input type="radio" name="address"  value="{{old('address')}}">New Zealand
                                    <input type="radio" name="address"  value="{{old('address')}}" >Australia
                                    @error('address')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                
                                <div class="col-md-6 form-group error-div">
                                    <label>Address finder: </label>
                                    <input type="text" name="address_finder" value="{{old('address_finder')}}" class="form-control required" placeholder="Address finder" >
                                    @error('address_finder')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-6 form-group error-div">
                                    <label>Billing address (if different): </label><br>
                                    <input type="radio" name="billing_address"  value="{{old('billing_address')}}">New Zealand
                                    <input type="radio" name="billing_address"   value="{{old('billing_address')}}" >Australia
                                    @error('billing_address')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-6 form-group error-div">
                                    <label>Billing Address finder: </label>
                                    <input type="text" name="billing_address_finder" value="{{old('billing_address_finder')}}" class="form-control required" placeholder="Enter Address finder" >
                                    @error('billing_address_finder')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-6 form-group error-div">
                                    <label>Closest district: </label>
                                    <h6>Membership is limited to residents of New Zealand and Australia.</h6>
                                    <select class="form-control" name="district_town">
                                        <option value="">Select district</option>
                                        <option name="district_town" value="{{old('Northland - Dargaville')}}">Northland - Dargaville</option>
                                        <option name="district_town" value="{{old('Northland - Kaikohe')}}">Northland - Kaikohe</option>
                                    </select>
                                    @error('district_town')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                               
                                <div class="col-md-6 form-group error-div">
                                    <label>New Zealand Business Number (optional): </label>
                                    <input type="text" name="nz_business_no" class="form-control"  value="{{old('nz_business_no')}}" >
                                    @error('nz_business_no')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-6 form-group error-div">
                                    <label>NZ GST number (optional): </label>
                                    <input type="text" name="nz_gst_no" class="form-control required"  value="{{old('nz_gst_no')}}" >
                                    @error('nz_gst_no')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row" >
                                <div class="col-md-12 form-group">
                                <hr>
                                    <h6 class="font-weight-bold f-14">Primary contact person</h6>
                                </div>
                              {{--    <div class="col-md-4 error-div form-group d-none" id="service" >
                                    <label>Service Provider Type: </label>
                                    <select class="form-control" name="service_type">
                                        <option value="">Select Service Provider</option>
                                        @foreach($services as $service)
                                            <option value="{{$service->service_id}}" {{old('service_type') == $service->service_id ? 'selected=selected' : ''}}>{{$service->service_name}}</option>
                                        @endforeach
                                    </select>
                                    @error('service_type')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div> --}}

                                <div class="col-md-6 form-group error-div">
                                    <label>First Name:</label>
                                   <input type="text" name="f_name"  placeholder="Enter Your First Name" class="form-control required" value="{{old('f_name')}}">
                                   @error('f_name')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-6 form-group error-div">
                                    <label>Last Name:</label>
                                   <input type="text" name="l_name"  placeholder="Enter Your Last Name" class="form-control required" value="{{old('l_name')}}">
                                   @error('l_name')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-6 form-group error-div">
                                    <label>Gender: </label><br>
                                    <input type="radio" name="gender"   value="{{old('gender')}}">Male
                                    <input type="radio" name="gender"   value="{{old('gender')}}">Female
                                    <input type="radio" name="gender"   value="{{old('gender')}}">Gender Diverse

                                    @error('gender')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-6 form-group error-div d-none" id="comp_name">
                                    <label>Company Name:</label>
                                    <input type="date" name="dob"  value="{{old('dob')}}"  placeholder="Enter Company Name" class="form-control required" value="{{old('comp_name')}}">
                                    @error('dob')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-6 form-group error-div">
                                    <label>Mobile Number:</label>
                                    <input type="text" name="phone_no"  placeholder="Enter Your Mobile Number" class="form-control required" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');" value="{{old('phone_no')}}">
                                    @error('phone_no')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                
                                                                             
                            </div>
                            {{-- <div class="row">
                                <div class="col-md-12 form-group error-div">
                                    <hr>
                                    <h6 class="font-weight-bold f-14">Address Information</h6>
                                </div>
                                <div class="col-md-4 form-group error-div">
                                    <label>Country: </label>
                                    <select class="form-control required" name="country_code" id="country">
                                        <option value="">Select Country</option>
                                        @foreach($countries as $country)
                                            <option value="{{$country->country_code}}" {{old('country_code') == $country->country_code ? 'selected=selected' : ''}}>{{$country->country_name}}</option>
                                        @endforeach
                                    </select>
                                    @error('country_code')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-4 form-group error-div">
                                    <label>State:</label>
                                    <select class="form-control required" name="state_code" id="state">
                                        <option value="">Please Select State</option>
                                    </select>
                                    @error('state_code')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-4 form-group error-div">
                                    <label>City:</label>
                                    <select class="form-control required" name="city_code"  id="city">
                                        <option value="">Please Select City</option>
                                    </select>
                                    @error('city_code')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div> --}}
                            <!--  <div class="col-md-6 form-group error-div">
                                   <label>Verification Code: </label>
                                    <input type="text" name="captcha" class="form-control required" placeholder="Enter Verification Code" required="required">
                                    @error('captcha')
                                        <span class="help-block text-danger font-size-12">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror

                                </div>
                           <div class="col-md-12 form-group error-div">
                                    
                                    <span id="captcha">{!! captcha_img('math') !!}</span>

                                    <a href="javascript:void(0)" class="btn btn-sm btn-theme ml-3" id="btn-refresh"><i class="fa fa-refresh"></i></a>
                                </div>
                                <div class="col-md-12  form-group error-div">
                                    <input type="checkbox" name="is_terms"  {{old('is_terms') == 'on' ? 'checked="checked"' : ''}} > I have Accpeted All <a href="" class="theme-color">Terms & Condition</a> & <a href="" class="theme-color">Privacy Policy</a>
                                </div> -->
                                
                                <div class="col-md-12 mt-4 form-group">
                                    <button class="btn btn-sm btn-success">Submit</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
    
       