@extends('admin.layouts.main')
@section('content')
<div class="content-wrapper">
    <div class="container">
		<div class="row mt-3 ">
			<div class="col-12 ">
				<div class="box">
					<div class="box-header">						
						<h4 class="box-title mt-2">Orders</h4>
						@if($message = Session::get('success'))
			            <div class="alert alert-success btn-sm">
			                {{$message}}
			            </div>
			        	@endif
						{{-- <a href="{{route('products.create')}}"class="btn btn-primary pull-right  btn-sm">Add</a> --}}
					</div>
						<div class="table-responsive">
							<table id="complex_header" class="table table-striped table-bordered display" style="width:100%">
								<thead>
									<tr>
										<th>#</th>
										<th>Product Name</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<?php $count = 1; ?>
									@foreach($oredrs as $oredr )
									<tr>
										<td>{{$count++}}</td>
										<td>{{$oredr->name}}</td>
										<td>{{$oredr->price}}</td>
										<td>{{$oredr->price}}</td>
										
										<td>
											{{-- <a href="javascript:void(0)"  class="{{$oredr->status == 'P' ? 'bg-secondary' : 'bg-success'}} text-white p-2 ml-2 rounded-circle approval" data-id="{{$oredr->pro_id}}"><i class="fa fa-key" title="{{$oredr->status == 'P' ? 'Unapprove' : 'Approve'}}" ></i></a>   
											<a href="{{route('products.edit',$oredr->pro_id)}}" class="bg-info text-white p-2 ml-2 rounded-circle" title="Edit"><i class="fa fa-edit"></i></a>            
								            <a href="{{route('products.show',$oredr->pro_id)}}" class="bg-warning text-white p-2 ml-2 rounded-circle" title="View"><i class="fa fa-eye"></i></a>            
								            <a href="{{route('oredr_destroy',$oredr->pro_id)}}" class="bg-danger text-white p-2 ml-2 rounded-circle" title="Delete" onclick="return confirm('Are you sure you want to delete user?');"><i class="fa fa-trash"></i></a>  --}}
											
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
