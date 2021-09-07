<?php 

namespace App\Http\Repositories\Admin;
use Illuminate\Http\Request;
use App\Http\Repositories\EloquentRepository;
use App\Models\Product;
use App\Models\Document;
use Auth;
class ProductsRepository extends EloquentRepository{

	public function all(){
		if (Auth::user()->user_role==1) {
			return Product::get();
		}else{
			return Product::where('user_id',Auth::user()->id)->get();

		}
	}
	public function productStore($request){
		
		$data = $this->validation($request);
		$data['user_id']= Auth::user()->id;
		// $product = 11;
		// dd($request->image);
		$product = Product::create($data);
        if(!empty($request->image)){
			foreach ($request->image as $key => $image) {
	            if($request->hasFile('image.'.$key)){
	                $docs =  document_upload($request->image[$key],Auth::user()->id.'/Product_images');
	            }
	            $docs['product_id'] = $product->pro_id; 
	            $docs['doc_type'] = 'product'; 
	            // dd($docs);
	                Document::create($docs);
	        }
    	}
    	// dd($docs);
       return redirect()->back()->with('success','Product Added Successfully');
		
	}
	public function singleProduct($id){
		return Product::where('pro_id',$id)->with('pro_images','categories','brand')->first();
	}
	public function updateCategory($request,$id){

		$data = $this->validation($request);
		// dd($request);
        $data['user_id'] = Auth::user()->id;
        $product = Product::where('pro_id',$id)->update($data);

        // $product->categories()->sync($request->catg_id);
        if(!empty($request->image)){
         foreach ($request->image as $key => $image) {
            if($request->image[$key] !=null){
                $documents = Document::where('doc_id',$request->doc_id[$key])->where('product_id',$id)->first();
            }else{
                $documents = [];
            }
            if($request->hasFile('image.'.$key)){
                $docs =  document_upload($request->image[$key],Auth::user()->id.'/Product_images');
            }
            if(!empty($documents)){
                $documents->update($docs);
            }else{
                $docs['product_id'] = $id; 
                $docs['doc_type'] = 'product'; 
                Document::create($docs);
            }
        }
	}
	
       return redirect()->back()->with('success','Product Update Successfully');

	}

	public function productApprove($id){
		$productStatus= Product::where('pro_id',$id)->select('status')->first();
		if($productStatus->status =='P'){
		 return Product::where('pro_id',$id)->update(['status'=>'A']);
		}else{
			return Product::where('pro_id',$id)->update(['status'=>'P']);
		}
	}
	public function trash($id){
		 Product::where('pro_id',$id)->delete();
         Document::where(['product_id' => $id , 'doc_type' => 'product'])->delete();
        // unlink($filePath->doc_path);
	}
	 public function validation($request,$id=null){

// dd($request->all());
        $data = $request->validate([
			'name'=>'required',
			'shrt_name'=>'required',
			'price'=>'required',
			//'catg_id'=>'required',
			// 'sub_catg_id'=>'required',
			// 'brand'=>'required',
			'qty'=>'required',
			'discount'=>'required',
			// 'size'=>'required',
			// 'short_des'=>'required',
			'bid_option'=>'required',

			'long_des'=>'required'
		]);
		$discontedPrice = $data['price']*$data['discount']/100;
		$data['discounted_price'] = $data['price']-$discontedPrice;

		$data['catg_id'] = $request->catg_id;
		$data['sub_catg_id'] = $request->sub_catg_id;
		$data['brand'] = $request->brand;
		$data['short_des'] = $request->short_des;
		$data['type'] = $request->type;
		$data['status'] = "A";

		$data['color'] = json_encode($request->color);
		$data['size'] = json_encode(explode(',', $request->size));
		// dd($data );

        return $data;
    }

}

?>