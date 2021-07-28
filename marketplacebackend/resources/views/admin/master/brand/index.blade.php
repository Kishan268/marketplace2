@extends('admin.layouts.main')
@section('content')
 	
<div class="content-wrapper">
    <div class="container">
		<section class="content">
		<div class="row mt-3 ">
			<div class="col-12">
				<div class="box">
					<div class="box-header">						
						<h4 class="box-title mt-2">Brands</h4>
						@if($message = Session::get('success'))
			            <div class="alert alert-success pull-right btn-sm">
			                {{$message}}
			            </div>
			        	@endif
						<a href="{{route('brands.create')}}" class="btn btn-primary pull-right mt-2 btn-sm">Add</a>
					</div>
						<div class="table-responsive">
							<table id="complex_header" class="table table-striped table-bordered display" style="width:100%">
								<thead>
									<tr>
										<th>#</th>
										<th>Brand Name</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									@foreach($brands as $brand )
									<tr>
										<td>{{$brand->brand_id}}</td>
										<td>{{$brand->name}}</td>
										<td>
											<a  class="fa fa-pencil" href="{{route('brands.edit',$brand->brand_id)}}"></a>
											<form method="post" action="{{route('brands.destroy',$brand->brand_id)}}">
												@csrf
												@method('DELETE')
											<button><i class="fa fa-trash" ></i></button>
											</form>
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
@endsection
