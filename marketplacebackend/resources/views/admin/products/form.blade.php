<div class="row">
	<hr class="my-15">
	<div class="col-md-6 form-group error-div">
		<label>Product Name</label><span class="text-danger">*</span><br>
		<input type="text" name="name" class="form-control required" placeholder="Enter Name" value="{{old('name')}}">
		@error('name')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group ">
		<label>Product Short Name</label>
		<input type="text" name="shrt_name" class="form-control" placeholder="Enter Name" value="{{old('shrt_name')}}">
		@error('shrt_name')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group error-div">
		<label>Product Price</label><span class="text-danger">*</span><br>
		<input type="number" name="price" class="form-control required" placeholder="Enter Price" value="{{ old('price')}}">
		@error('price')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group error-div">
		<label>Select Category</label><span class="text-danger">*</span><br>
		<select class="form-control required" name="catg_id">
			<option value="">{{__('Root')}}</option>
			@foreach($categories as $category)
			<option class="root" value="{{$category->catg_id }}" >{{$category->catg_name}}</option>
				@if($category->subcategories !=null)
				@include('admin.master.category.subCategoryList',['subcategorie' => $category->subcategories, 'dataSpace' => 2,'oldCatgId' => null])
				@endif
			@endforeach

		</select>	
		@error('catg_id')
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
	<div class="col-md-6 form-group error-div">
		<label>Quantity</label><span class="text-danger">*</span><br>
		<input type="number" name="qty" class="form-control required" placeholder="Enter Quantity" value="{{ old('qty')}}">
		@error('qty')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Color</label>
		<input type="color" name="color" multiple="" class="form-control" value="{{ old('color')}}">

		{{-- <select name="color[]" multiple="multiple" class="form-control color" >
			@foreach(COLORS as $key => $color)
				<option value="{{$color}}" >{{$color}}</option>
			@endforeach
		</select> --}}	
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
		@error('size')
	        <p class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </p>
	    @enderror
	</div>
	<div class="col-md-6 form-group error-div">
		<label>Product Type</label><span class="text-danger">*</span><br>
		<select name="type"  class="form-control required" >
			<option  value="">Select Type</option>	
			<option  value="New"  >New</option>	
			<option  value="Refurbished " >Refurbished </option>	
			<option  value="Old" >Old</option>	
		</select>	
		{{-- <input type="color" name="color" class="form-control" placeholder="Enter Color" value="{{isset($product->color) ? $product->color : old('color')}}" multiple="multiple"> --}}
		@error('type')
	        <p class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </p>
	    @enderror
	</div>
	<div class="col-md-6 form-group error-div">
		<label>Bid Option</label><span class="text-danger">*</span><br>
		<select name="bid_option"  class="form-control required"   >
			<option class="form-group" value="">Select option</option>	
			<option class="form-group" value="Yes" >Yes</option>	
			<option class="form-group" value="No" >No</option>	
		</select>	
		@error('bid_option')
	        <p class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </p>
	    @enderror
	</div>
	<div class="col-md-6 form-group error-div">
		<label>AddToCart Option</label><span class="text-danger">*</span><br>
		<select name="add_to_cart_option"  class="form-control required"   >
			<option value="">Select option</option>	
			<option value="Yes" >Yes</option>	
			<option value="No" >No</option>	
		</select>	
		@error('add_to_cart_option')
	        <p class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </p>
	    @enderror
	</div>
	<div class="col-md-6 form-group">
		<label>Free</label>
		<select name="free_option"  class="form-control"   >
			<option value="">Select option</option>	
			<option value="Yes" >Yes</option>	
			<option value="No" >No</option>	
		</select>	
		
	</div>
	<div class="col-md-6 form-group error-div">
		<label>Shipping Option</label><span class="text-danger">*</span><br>
		<select name="shipping_option"  class="form-control required"   >
			<option value="">Select option</option>	
			<option value="Available" >Available</option>	
			<option value="Not Available" >Not Available</option>	
		</select>	
		@error('shipping_option')
	        <p class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </p>
	    @enderror
	</div>
	<div class="col-md-6 form-group error-div">
		<label>Discount In %</label><span class="text-danger">*</span><br>
		<input type="number" name="discount" class="form-control required" placeholder="Enter Product Discount" value="{{old('discount')}} ">
		@error('discount')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	{{-- <div class="col-md-12 form-group">
		<label>Product Information</label>
		<textarea type="text" name="short_des" class="form-control" placeholder="Enter Description">{{ old('short_des')}}</textarea>
		@error('short_des')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div> --}}
	
	<div class="col-md-12 form-group error-div">
		<label>Product Long Description</label><span class="text-danger">*</span><br>
		<textarea type="text" name="long_des" class="form-control required" placeholder="Enter Long Description" >{{old('long_des')}}</textarea>
		@error('long_des')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
	{{-- <div class="col-md-6 form-group">
		<label>Product Image1</label>
		<input type="file" name="image[]" class="form-control" multiple="multiple"  value="{{ old('image.0')}}"></input>
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
	--}}
	<div class="col-md-4 form-group error-div">
		<label>You can select multiple Image</label><span class="text-danger">*</span><br>
		<div class="fallback">
    		<input type="file" name="image[]" class="form-control required"  multiple id="gallery-photo-add" data-maxsize="1024"
>
  	</div>
		@error('image.*')
	        <span class="help-block text-danger font-size-12">
	            <strong>{{ $message }}</strong>
	        </span>
	    @enderror
	</div>
  
	<div class="col-md-8 form-group">
		<div class="gallery" style="width: 800px; height: 100px; display: grid;
    grid-template-columns: repeat(10, 1fr);"></div>
  	</div> 

</div>

<script src="https://code.jquery.com/jquery-3.6.0.js" ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/js/select2.min.js" defer></script>
<script src="https://cdn.ckeditor.com/4.16.1/standard/ckeditor.js"></script>

 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.2/basic.css"/>

 <script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.2/min/dropzone.min.js"></script>
<!-- Change /upload-target to your upload address -->
<script type="text/javascript">
	// Vanilla JS

$(document).ready(function() {
	CKEDITOR.replace( 'long_des');

	 $(function() {
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;
            var arraysize = [];
            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = function(event) {
                    $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }
               reader.readAsDataURL(input.files[i]);
 				var sizeInKB =input.files[i].size
                var sizeLimit= 100;

				// if (sizeInKB >= sizeLimit) {
				//     alert("Max file size 10MB");
				//     return false;
				// }
            }

        }

    };

    $('#gallery-photo-add').on('change', function() {
        imagesPreview(this, 'div.gallery');
    });
	});
	 var myDropzone = new Dropzone("div#myUploader", { 
    url: "upload-target",
    // more configs here
	});

	// jQuery
	$("div#myUploader").dropzone({ 
	  url: "upload-target",
	  // more configs here
	});

alert()

$('select').on('change', function() {
  alert( );
});


});
</script>
