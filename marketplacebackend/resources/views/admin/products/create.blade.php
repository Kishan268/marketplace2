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
        			 <div class="card-body">
						<form action="{{route('products.store')}}" method="post" autocomplete="off" enctype="multipart/form-data" id="example-form">
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
		</div> 
	</section>
	</div>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.js" ></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.19.0/jquery.validate.min.js"></script>

<script type="text/javascript">
	
     var form = $("#example-form");
        form.validate({   
            rules: {    
                'name' :{
                    required:true
                },
                 'price' :{
                    required:true
                },
                'image[]' :{
                    required: true,
                     maxfilesize : 5,
                     extension: "jpg|jpeg|png",
                     filesize: 10971520,  
                }
            },
             
     errorElement: "em",
        errorPlacement: function errorPlacement(error, element) { 
            element.after(error);
            error.addClass( "help-block" );
         },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".error-div" ).addClass( "has-error" ).removeClass( "has-success" );
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).parents( ".error-div" ).addClass( "has-success" ).removeClass( "has-error" );
        }, 
  });  
</script>
@endsection
