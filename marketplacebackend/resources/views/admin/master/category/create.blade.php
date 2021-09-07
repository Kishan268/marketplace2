@extends('admin.layouts.main')
@section('content')
<div class="content-wrapper">
    <div class="container">
    <section class="content">
		<div class="row mt-3">			  
			<div class="col-lg-12 col-md-12">
				 <div class="box">
					<div class="box-header with-border">
					  <h4 class="box-title mt-2">Add Category</h4>
				  		<a href="{{route('category.index')}}" class="btn btn-primary pull-right  btn-sm">Back</a>

					   @if($message = Session::get('success'))
			            <div class="alert alert-success pull-right btn-sm">
			                {{$message}}
			            </div>
			        	@endif
					</div>
        			 <div class="card-body">
					<form action="{{route('category.store')}}" method="post" autocomplete="off" enctype="multipart/form-data">
						@csrf
						@include('admin.master.category.form')
		    		
		    		<div class="row">
		    			<div class="col-md-12 form-group">
		    				<button class="btn btn-sm btn-success">Submit</button>
		    			</div>
		    		</div>
		    	</form>
				</div>
			</div>		
		</div> 
		</div> 
	</section>
	</div>
</div>
@endsection
