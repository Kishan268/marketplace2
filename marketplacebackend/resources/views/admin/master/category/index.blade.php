@extends('admin.layouts.main')
@section('content')
 	
<div class="content-wrapper">
    <div class="container">
		<section class="content">
		<div class="row mt-3 ">
			<div class="col-12">
				<div class="box">
					<div class="box-header">						
						<h4 class="box-title mt-2">Categories</h4>
						@if($message = Session::get('success'))
			            <div class="alert alert-success pull-right btn-sm">
			                {{$message}}
			            </div>
			        	@endif
						<a href="{{route('category.create')}}" class="btn btn-primary pull-right mt-2 btn-sm">Add</a>
					</div>
						<div class="table-responsive">
							<table id="complex_header" class="table table-striped table-bordered display" style="width:100%">
								<thead>
									<tr>
										<th>#</th>
										<th>Cateory Name</th>
										<th>Sub-Category</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<?php $count = 1; ?>
									@foreach($categories as $category )
									<tr>
										<td>{{$count++}}</td>
										<td>{{$category->catg_name}}</td>
										<td>@foreach($category->subcategories as $subcategory )
										{{$subcategory->catg_name}},
										@endforeach</td>
										<td>
											<a  class="fa fa-pencil" href="{{route('category.edit',$category->catg_id)}}"></a>
											<form method="post" action="{{route('category.destroy',$category->catg_id)}}">
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
