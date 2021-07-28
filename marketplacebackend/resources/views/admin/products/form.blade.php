<div class="row">
	<hr class="my-15">
	<div class="col-md-6 form-group">
		<label>Full Name</label>
		<input type="text" name="name" class="form-control" placeholder="Enter Name" value="{{isset($product->name) ? $product->name : old('name')}}">
		@error('name')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Short Name</label>
		<input type="text" name="shrt_name" class="form-control" placeholder="Enter Name" value="{{isset($product->shrt_name) ? $product->shrt_name : old('shrt_name')}}">
		@error('shrt_name')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Price</label>
		<input type="number" name="price" class="form-control" placeholder="Enter Price" value="{{isset($product->price) ? $product->price : old('price')}}">
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
			<option class="root" value="{{isset($category->catg_id) }}" {{$category->catg_id ==isset($product->brand)? 'selected' : ''}}>{{$category->catg_name}}</option>
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
			<option class="root" value="{{isset($category->parent_id) ? $category->parent_id : '' }}"{{$category->parent_id  == isset($product->brand) ? 'selected' : ''}} >{{$category->catg_name}}</option>
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
				<option class="root" value="{{isset($brand->brand_id) }}" {{$brand->brand_id ==isset($product->brand) ? 'selected' : ''}} >{{$brand->name}}</option>
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
		<input type="number" name="qty" class="form-control" placeholder="Enter Quantity" value="{{isset($product->qty) ? $product->qty : old('qty')}}">
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
				<option value="{{isset($product->color) ? $key : ''}}" <?php if (isset($product->color)) { ?>
					{{'dsafhsdfgdfkdsnfl'}}
					{{in_array($key, json_decode($product->color)) ? 'selected' : ''}}
					}
				<?php } ?> >{{$color}}</option>
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
		<input type="text" name="size" class="form-control" placeholder="Enter size like X,L,XXL" value="{{isset($product->size) ? implode(',', json_decode($product->size)) : old('size')}}" >
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
			<option class="form-group" value="{{isset($product->type) ? $product->type:  old('new') }}" {{isset($product->type) ==old('new') ? 'selected' : ''}} >New</option>	
			<option class="form-group" value="{{isset($product->type) ?  $product->type: old('medium')}}" {{isset($product->type) ==old('Medium') ? 'selected' : 'Medium'}} >Medium</option>	
			<option class="form-group" value="{{isset($product->type) ? $product->type : old('old')}}" {{isset($product->type) ==old('Old') ? 'selected' : ''}} >Old</option>	
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
		<select name="bid_option"  class="form-control color" >
			<option class="form-group" value="">Select option</option>	
			<option class="form-group" value="{{isset($product->bid_option) ? $product->bid_option: 'Yes' }}" {{isset($product->bid_option) ==old('new') ? 'selected' : ''}} >Yes</option>	
			<option class="form-group" value="{{isset($product->bid_option) ?  $product->bid_option: 'No'}}" {{isset($product->bid_option) ==old('Medium') ? 'selected' : 'Medium'}} >No</option>	
			<option class="form-group" value="{{isset($product->bid_option) ?  $product->bid_option: 'Both'}}" {{isset($product->bid_option) ==old('Both') ? 'selected' : 'Both'}} >Both</option>	
		</select>	
		@error('bid_option')
	        <p class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </p>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Discount</label>
		<input type="text" name="discount" class="form-control" placeholder="Enter Description" value="{{isset($product->discount) ? $product->discount : old('discount')}} ">
		@error('discount')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-12 form-group">
		<label>Product Information</label>
		<textarea type="text" name="short_des" class="form-control" placeholder="Enter Description">{{isset($product->short_des) ? $product->short_des : old('short_des')}}</textarea>
		@error('short_des')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	
	<div class="col-md-12 form-group">
		<label>Product Long Description</label>
		<textarea type="text" name="long_des" class="form-control" placeholder="Enter Long Description" >{{isset($product->long_des) ? $product->long_des : old('long_des')}}</textarea>
		@error('long_des')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Image1</label>
		<input type="file" name="image[]" class="form-control"  value="{{isset($product->pro_images[0]->doc_name) ? $product->pro_images[0]->doc_name : old('image.0')}}"></input>
		<a href="{{ asset('storage'.'/'.@$product->pro_images[0]->doc_path) }}" target="_blank">{{ @$product->pro_images[0]->doc_name }}</a>
		<input class="form-control" type="hidden" name="doc_id[]" value="{{ @$product->pro_images[0]->doc_id }}">
		@error('image')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Image2</label>
		<input type="file" name="image[]" class="form-control"  value="{{isset($product->pro_images[1]->doc_name) ? $product->pro_images[1]->doc_name : old('image.1')}}"></input>
		<a href="{{ asset('storage'.'/'.@$product->pro_images[1]->doc_path) }}" target="_blank">{{ @$product->pro_images[1]->doc_name }}</a>
		<input class="form-control" type="hidden" name="doc_id[]" value="{{ @$product->pro_images[1]->doc_id }}">
		@error('image')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Image3</label>
		<input type="file" name="image[]" class="form-control"  value="{{isset($product->pro_images[2]->doc_name) ? $product->pro_images[2]->doc_name : old('image.2')}}"></input>
		<a href="{{ asset('storage'.'/'.@$product->pro_images[2]->doc_path) }}" target="_blank">{{ @$product->pro_images[2]->doc_name }}</a>
		<input class="form-control" type="hidden" name="doc_id[]" value="{{ @$product->pro_images[2]->doc_id }}">
		@error('image')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Image4</label>
		<input type="file" name="image[]" class="form-control"  value="{{isset($product->pro_images[3]->doc_name) ? $product->pro_images[3]->doc_name : old('image.3')}}"></input>
		<a href="{{ asset('storage'.'/'.@$product->pro_images[3]->doc_path) }}" target="_blank">{{ @$product->pro_images[3]->doc_name }}</a>
		<input class="form-control" type="hidden" name="doc_id[]" value="{{ @$product->pro_images[3]->doc_id }}">
		@error('image')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Image5</label>
		<input type="file" name="image[]" class="form-control"  value="{{isset($product->pro_images[4]->doc_name) ? $product->pro_images[4]->doc_name : old('image.4')}}"></input>
		<a href="{{ asset('storage'.'/'.@$product->pro_images[4]->doc_path) }}" target="_blank">{{ @$product->pro_images[4]->doc_name }}</a>
		<input class="form-control" type="hidden" name="doc_id[]" value="{{ @$product->pro_images[4]->doc_id }}">
		@error('image')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Product Image6</label>
		
		<input type="file" name="image[]" class="form-control"  value="{{isset($product->pro_images[5]->doc_name) ? $product->pro_images[5]->doc_name : old('image.5')}}"></input>
		<a href="{{ asset('storage'.'/'.@$product->pro_images[5]->doc_path) }}" target="_blank">{{ @$product->pro_images[5]->doc_name }}</a>
		<input class="form-control" type="hidden" name="doc_id[]" value="{{ @$product->pro_images[5]->doc_id }}">
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
