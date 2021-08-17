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
							<table id="complex_header" class="table table-striped table-bordered display" style="width:100%" role="grid" aria-describedby="example1_info">
								<thead>
									<tr>
										<th>#</th>
										<th>Invoice Number</th>
										<th>Date</th>
										<th>Customer Name</th>
										<th>Location</th>
										<th>Amount</th>
										<th>Total Item</th>
										<th>Status</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<?php $count = 1; ?>
									@foreach($orders as $order )
									<tr>
										<td>{{$count++}}</td>
										<td>{{$order->invoice_number}}</td>
										<td>{{$order->creatd_at}}</td>
										<td>{{$order->get_user ? $order->get_user->f_name:''}}-{{$order->get_user ? $order->get_user->l_name:''}}</td>
										<td>{{$order->get_user ? $order->get_user->city:''}},{{$order->get_user ? $order->get_user->state:''}},{{$order->get_user ? $order->get_user->zip:''}},{{$order->get_user ? $order->get_user->country:''}}</td>
										<td>${{$order->amount}}</td>
										<td>{{$order->total_item}}</td>
										<td><span class="badge badge-pill badge-primary-light">New Order</span></td>
										
										<td>
											{{-- <a href="javascript:void(0)"  class="{{$order->status == 'P' ? 'bg-secondary' : 'bg-success'}} text-white p-2 ml-2 rounded-circle approval" data-id="{{$order->pro_id}}"><i class="fa fa-key" title="{{$order->status == 'P' ? 'Unapprove' : 'Approve'}}" ></i></a>   
											<a href="{{route('products.edit',$order->pro_id)}}" class="bg-info text-white p-2 ml-2 rounded-circle" title="Edit"><i class="fa fa-edit"></i></a>   --}}          
												<div class="btn-group">
												  <a class="hover-primary dropdown-toggle no-caret" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-h"></i></a>
												  <div class="dropdown-menu" style="">
													<a class="dropdown-item" href="#">Accept Order</a>
													<a class="dropdown-item" href="#">Reject Order</a>
												  </div>
											    </div>
								           {{--  <a href="{{route('order_destroy',$order->pro_id)}}" class="bg-danger text-white p-2 ml-2 rounded-circle" title="Delete" onclick="return confirm('Are you sure you want to delete user?');"><i class="fa fa-trash"></i></a>  --}}
											
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
