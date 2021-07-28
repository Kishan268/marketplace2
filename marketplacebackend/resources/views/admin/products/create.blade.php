@extends('admin.layouts.main')
@section('content')
<div class="content-wrapper">
    <div class="container">
    <section class="content">
		<div class="row mt-3">			  
			<div class="col-lg-12 col-md-12">
				 <div class="box">
					<div class="box-header with-border">
					  <h4 class="box-title mt-2">Add Product</h4>
				  		<a href="{{route('products.index')}}"class="btn btn-primary pull-right mt-2 btn-sm">Back</a>

					   @if($message = Session::get('success'))
			            <div class="alert alert-success pull-right btn-sm">
			                {{$message}}
			            </div>
			        	@endif
					</div>
					<form action="{{route('products.store')}}" method="post" autocomplete="off" enctype="multipart/form-data">
						@csrf
						@include('admin.products.form')
		    		
		    		<div class="row">
		    			<div class="col-md-12 form-group">
		    				<button class="btn btn-sm btn-success">Submit</button>
		    			</div>
		    		</div>
		    	</form>
				</div>
			</div>		
		</div> 
	</section>
	</div>
</div>
@endsection
