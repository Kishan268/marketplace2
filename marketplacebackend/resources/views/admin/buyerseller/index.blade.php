@extends('admin.layouts.main')
@section('content')
 	
<div class="content-wrapper">
    <div class="container">
		<section class="content">
		<div class="row mt-3 ">
			<div class="col-12">
				<div class="box">
					<div class="box-header">						
						<h4 class="box-title mt-2">Buyer /Seller </h4>
						@if($message = Session::get('success'))
			            <div class="alert alert-success pull-right btn-sm">
			                {{$message}}
			            </div>
			        	@endif
						{{-- <a href="{{route('products.create')}}"class="btn btn-primary pull-right mt-2 btn-sm">Add</a> --}}
					</div>
					
        			 <div class="card-body">
						<div class="table-responsive">
							<table id="complex_header" class="table table-striped table-bordered display" style="width:100%">
								<thead>
									<tr>
										<th>#</th>
										<th>User Name</th>
										<th>Email</th>
										<th>Type</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<?php $count = 1; ?>
									@foreach($users as $user )
									@if($user->user_role != 1)
									<tr>
										<td>{{$count++}}</td>
										<td>{{$user->f_name}}-{{$user->l_name}}</td>
										<td>{{$user->email}}<span class="{{$user->email_verified_at !=null ? 'bg-success' : 'bg-warning'}} text-white p-1 rounded f-11 pull-right">{{$user->email_verified_at !=null ? 'Verified' : 'Not Verify'}}</span></td>
										<td>@if($user->user_role == 3)
											<span class="bg-success text-white p-1 rounded f-11">{{'Seller'}} </span>
											@elseif($user->user_role == 4)
											<span class="bg-primary text-white p-1 rounded f-11">{{'Buyer'}} </span>
											@else
											{{'Other'}}
											@endif

										</td>
										<td>
											
											<a href="javascript:void(0)"  class="{{$user->status == 'P' ? 'bg-secondary' : 'bg-success'}} text-white p-2 ml-2 rounded-circle approval" data-id="{{$user->id}}"><i class="fa fa-key" title="{{$user->status == 'P' ? 'Unapprove' : 'Approve'}}" ></i></a>   
											<a href="{{route('buyerseller.edit',$user->id)}}" class="bg-info text-white p-2 ml-2 rounded-circle" title="Edit"><i class="fa fa-edit"></i></a>            
								            <a href="{{route('buyerseller.show',$user->id)}}" class="bg-warning text-white p-2 ml-2 rounded-circle" title="View"><i class="fa fa-eye"></i></a>            
								            <a href="{{route('buyerseller_destroy',$user->id)}}" class="bg-danger text-white p-2 ml-2 rounded-circle" title="Delete" onclick="return confirm('Are you sure you want to delete user?');"><i class="fa fa-trash"></i></a>   
										</td>
										
									</tr>
									@endif
									@endforeach
									
								</tbody>
							</table>
						</div>
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
            var user_id = $(this).data('id');
             $.ajax({
		        type:'GET',
		        url:"/buyerseller_approve/"+user_id,
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
