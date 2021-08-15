<div class="row">
	<hr class="my-15">
	<div class="col-md-6 form-group">
		<label>Full Name</label>
		<input type="text" name="name" class="form-control" placeholder="Enter Name" value="{{old('name')}}">
		@error('name')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Short Name</label>
		<input type="text" name="shrt_name" class="form-control" placeholder="Enter Name" value="{{old('shrt_name')}}">
		@error('shrt_name')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Price</label>
		<input type="number" name="price" class="form-control" placeholder="Enter Price" value="{{ old('price')}}">
		@error('price')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Select Category</label>
		<select class="form-control" name="catg_id">
			<option value="">{{__('Root')}}</option>
			@foreach($categories as $category)
			<option class="root" value="{{$category->catg_id }}" >{{$category->catg_name}}</option>
					@if($category->subcategories !=null)
						@include('admin.master.category.subCategoryList',['subcategorie' => $category->subcategories, 'dataSpace' => 2,'oldCatgId' => null])
					@endif
			@endforeach

		</select>	
		@error('catg')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Select Sub Category</label>
		<select class="form-control" name="sub_catg_id">
			<option value="">{{__('Root')}}</option>
			@foreach($categories as $category)
			<option class="root" value="{{$category->parent_id }}" >{{$category->catg_name}}</option>
					@if($category->subcategories !=null)
						@include('admin.master.category.subCategoryList',['subcategorie' => $category->subcategories, 'dataSpace' => 2,'oldCatgId' => null])
					@endif
			@endforeach

		</select>	
		@error('sub_catg_id')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Brand</label>
		{{-- <input type="text" name="brand" class="form-control" placeholder="Enter Brand" value="{{isset($product->pro_id) ? $product->brand : old('brand')}}"> --}}
		<select class="form-control" name="brand">
			<option value="">Select brand</option>
			@foreach($brands as $brand)
				<option class="root" value="{{isset($brand->brand_id) }}" >{{$brand->name}}</option>
			@endforeach
		</select>	
		
		@error('brand')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Quantity</label>
		<input type="number" name="qty" class="form-control" placeholder="Enter Quantity" value="{{ old('qty')}}">
		@error('qty')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Color</label>
		<select name="color[]" multiple="multiple" class="form-control color" >
			@foreach(COLORS as $key => $color)
				<option value="{{$color}}" >{{$color}}</option>
			@endforeach
		</select>	
		{{-- <input type="color" name="color" class="form-control" placeholder="Enter Color" value="{{isset($product->color) ? $product->color : old('color')}}" multiple="multiple"> --}}
		@error('color')
	        <p class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </p>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Size</label>
		<input type="text" name="size" class="form-control" placeholder="Enter size like X,L,XXL" value="{{old('size')}}" >
		@error('color')
	        <p class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </p>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Type</label>
		<select name="type"  class="form-control color" >
			<option class="form-group" value="">Select Type</option>	
			<option class="form-group" value="New"  >New</option>	
			<option class="form-group" value="Medium" >Medium</option>	
			<option class="form-group" value="Old" >Old</option>	
		</select>	
		{{-- <input type="color" name="color" class="form-control" placeholder="Enter Color" value="{{isset($product->color) ? $product->color : old('color')}}" multiple="multiple"> --}}
		@error('type')
	        <p class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </p>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>AddToCart and Bid Option</label>
		<select name="bid_option"  class="form-control"   >
			<option class="form-group" value="">Select option</option>	
			<option class="form-group" value="Yes" >Yes</option>	
			<option class="form-group" value="No" >No</option>	
			<option class="form-group" value="Both" >Both</option>	
		</select>	
		@error('bid_option')
	        <p class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </p>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Discount</label>
		<input type="text" name="discount" class="form-control" placeholder="Enter Description" value="{{old('discount')}} ">
		@error('discount')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-12 form-group">
		<label>Product Information</label>
		<textarea type="text" name="short_des" class="form-control" placeholder="Enter Description">{{ old('short_des')}}</textarea>
		@error('short_des')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	
	<div class="col-md-12 form-group">
		<label>Product Long Description</label>
		<textarea type="text" name="long_des" class="form-control" placeholder="Enter Long Description" >{{old('long_des')}}</textarea>
		@error('long_des')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Image1</label>
		<input type="file" name="image[]" class="form-control"  value="{{ old('image.0')}}"></input>
		@error('image')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Image2</label>
		<input type="file" name="image[]" class="form-control"  value="{{ old('image.1')}}"></input>
		@error('image')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Image3</label>
		<input type="file" name="image[]" class="form-control"  value="{{old('image.2')}}"></input>
		@error('image')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Image4</label>
		<input type="file" name="image[]" class="form-control"  value="{{old('image.3')}}"></input>
		@error('image')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Image5</label>
		<input type="file" name="image[]" class="form-control"  value="{{ old('image.4')}}"></input>
		@error('image')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Image6</label>
		
		<input type="file" name="image[]" class="form-control"  value="{{old('image.5')}}"></input>
		@error('image')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/js/select2.min.js" defer></script>
<script src="https://cdn.ckeditor.com/4.16.1/standard/ckeditor.js"></script>

 <script>
    CKEDITOR.replace( 'long_des');
    CKEDITOR.replace( 'short_des' );

    $(document).ready(function() {
    	$('.color').select2();
	});
</script>
