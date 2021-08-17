@extends('admin.layouts.main')
@section('content')
<div class="content-wrapper">
    <div class="container">
		<section class="content">
		<div class="row mt-3 ">
			<div class="col-12">
				<div class="box">
					<div class="box-header">						
						<h4 class="box-title mt-2">Products</h4>
						@if($message = Session::get('success'))
			            <div class="alert alert-success btn-sm">
			                {{$message}}
			            </div>
			        	@endif
						<a href="{{route('products.create')}}"class="btn btn-primary pull-right  btn-sm">Add</a>
					</div>
						<div class="table-responsive">
							<table id="complex_header" class="table table-striped table-bordered display" style="width:100%">
								<thead>
									<tr>
										<th>#</th>
										<th>Product Name</th>
										<th>Price</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<?php $count = 1; ?>
									@foreach($products as $product )
									<tr>
										<td>{{$count++}}</td>
										<td>{{$product->name}}</td>
										<td>{{$product->price}}</td>
										
										<td>
											@role('super_admin')
											 <a href="javascript:void(0)"  class="{{$product->status == 'P' ? 'bg-secondary' : 'bg-success'}} text-white p-2 ml-2 rounded-circle approval" data-id="{{$product->pro_id}}"><i class="fa fa-key" title="{{$product->status == 'P' ? 'Unapprove' : 'Approve'}}" ></i></a> 
											 @endrole
											<a href="{{route('products.edit',$product->pro_id)}}" class="bg-info text-white p-2 ml-2 rounded-circle" title="Edit"><i class="fa fa-edit"></i></a>            
								            <a href="{{route('products.show',$product->pro_id)}}" class="bg-warning text-white p-2 ml-2 rounded-circle" title="View"><i class="fa fa-eye"></i></a>            
								            <a href="{{route('product_destroy',$product->pro_id)}}" class="bg-danger text-white p-2 ml-2 rounded-circle" title="Delete" onclick="return confirm('Are you sure you want to delete user?');"><i class="fa fa-trash"></i></a> 
											
										</td>
									</tr>
									@endforeach
									
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div> 
		</section>
	</div>
</div>
<script>
    $(document).ready(function(){
        $(document).on('click','.approval',function(e){
            e.preventDefault();
            var product_id = $(this).data('id');
             $.ajax({
		        type:'GET',
		        url:"/product_approve/"+product_id,
		        success:function(res){
		            if(res.status == 'success'){
		                alert(res.message)
		                window.location.reload();
		            }
		        }
		    });


        });
    });
</script>
@endsection
