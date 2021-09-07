@extends('admin.layouts.main')
@section('content')
<div class="content-wrapper">
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Template List
                    </h5>
                    <button type="button" class="btn btn-primary btn-sm pull-right addTemplate">Add Template</button>
                </div>
                <div class="card-body">
                    <table class="table table-hover table-bordered" id="complex_header">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Template Name</th>
                                <th>Sequence No</th>
                                <th>Slug</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @php $i=1; @endphp
                            @foreach($templates as $data)
                            <tr>
                                <td>{{ $i++}}</td>
                                <td>{{ $data->name}}</td>
                                <td>{{ $data->sequence_no}}</td>
                                <td>{{ $data->slug}}</td>
                                <td>
                                    <form method="post" action="{{ route('template.destroy',$data->id) }}">
                                        @csrf
                                        @method('DELETE')
                                            <button class="bg-success mr-2 editTemplate" id="{{$data->id}}" data-name="{{$data->name}}" data-id="{{$data->name}}"  data-sequence_no="{{$data->sequence_no}}" data-slug="{{$data->slug}}" ><i class="fa fa-edit text-white" title="Edit" ></i>
                                            </button>
                                            <button class="bg-danger" onclick="return confirm('Are you sure you want to delete?');">
                                            <i class="fa fa-trash text-white" title="Delete"> </i>    
                                            </button>
                                            <a class=" btn-sm bg-warning text-white" href="{{ route('assign_product',$data->id) }}">
                                   				<i class="fa fa-plus" title="Assign product"></i>
                                            </a>
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
    <div class="modal" id="subjectModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Add Template</h4>
                    <button type="button" class="close modalClose" >&times;</button>
                </div>
                <div class="modal-body">
                    <form  action="{{route('template.store')}}" method="post">
                    @csrf
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-lg-6 form-group">
                                <label for="name"> Template Name</label>
                                <input type="text" name="name" id="name" class="form-control" >
                                @error('name')
                                    <span class="text-danger" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                             
                            <div class="col-md-6 col-sm-6 col-lg-6 form-group">
                                <label for="sequence_no">Sequence No </label>
                                <input type="text" name="sequence_no" id="sequence_no" class="form-control" >
                                @error('sequence_no')
                                    <span class="text-danger" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="col-md-6 col-sm-6 col-lg-6 form-group">
                                <label for="slug">Slug </label>
                                <input type="text" name="slug" id="slug" class="form-control" >
                                @error('slug')
                                    <span class="text-danger" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>    
                            <div class="col-md-12 col-sm-12 col-lg-12 form-group">
                                <input type="hidden" name="flag" value="{{old('flag') ?? 'add'}}"  >
                                <input type="hidden" name="id" value="" value="{{old('id')}}">
                            </div>                            
                        </div>
	                <!-- Modal footer -->
	                <div class="modal-footer">
	                    <button  class="btn btn-primary btn-sm" type="submit" id="btnSubmit">Submit</button>
	                </div>
	                </form>
                    <button type="button" class="btn btn-danger pull-right btn-sm modalClose" >Close</button>
                </div>
            </div>
        </div>
    </div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/js/select2.min.js" defer></script>

<script >
$(document).ready(function(){
	$('.js-example-basic-single').select2();

    $('.addTemplate').on('click',function(e){
        e.preventDefault();
        $('.modal-title').html('Add Subject');
        $('input[name="flag"]').val('add');
        $('input[name="id"]').val('');
        $('input[name="slug"]').val('');
        $('#name').val('');
        $('#sequence_no').val('');
        $
        $('#subjectModal').modal('show');
    });
    $('.modalClose').on('click',function(e){
        e.preventDefault();
        $('#subjectModal').modal('hide');
    });
    $('.editTemplate').on('click',function(e){
        e.preventDefault();
        $('.modal-title').html('Edit Subject');
        $('input[name="flag"]').val('edit');
        $('input[name="id"]').val($(this).attr('id'));
        $('#name').val($(this).data('name'));
        $('#sequence_no').val($(this).data('sequence_no'));
        $('#slug').val($(this).data('slug'));
        
        $('#subjectModal').modal('show');
    });
    
    @if($message = Session::get('success'))
        alert("{{$message}}")
    @endif
    @if($errors->any())
         $('#subjectModal').modal('show');     
    @endif
})
</script>
@endsection
