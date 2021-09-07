<div class="row">
	<hr class="my-15">
	<div class="col-md-6 form-group">
		<label>Category/SubCategory Name</label>
		<input type="text" name="catg_name" class="form-control" placeholder="Enter Category/SubCategory Name" value="{{isset($category1->catg_id) ? $category1->catg_name : old('catg_name')}}">
		@error('catg_name')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Select Category</label>
		<select class="form-control" name="parent_id">
			<option value="">{{__('Main Category')}}</option>
			@foreach($categories as $category)
			<option class="root" value="{{$category->catg_id }}" {{isset($category1->parent_id) == $category->catg_id ? 'selected' : ''}} >{{$category->catg_name}}</option>
				@if($category->subcategories !=null)
					@include('admin.master.category.subCategoryList',['subcategorie' => $category->subcategories, 'dataSpace' => 2,'oldCatgId' => null])
				@endif
			@endforeach

		</select>	
		@error('parent_id')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
</div>

