<?php
const COLORS = [
              1=>'White',
              2=>'Yellow',
              3=>'Blue',
              4=>'Red',
              5=>'Green',
              6=>'Black',
              7=>'Brown',
              8=>'Azure',
              9=>'Ivory',
              10=>'Teal',
              11=>'Silver',
              12=>'Purple',
              13=>'Navy blue',
              14=>'Pea green',
              15=>'Gray',
              16=>'Orange',
              17=>'Maroon',
              18=>'Charcoal',
              19=>'Aquamarine',
              20=>'Coral',
              21=>'Fuchsia',
              22=>'Wheat',
              23=>'Lime',
              24=>'Crimson',
              25=>'Khaki',
              26=>'Hot pink',
              27=>'Magenta',
              28=>'Olden',
              29=>'Plum',
              30=>'Olive',
              31=>'Cyan'

]; 

if (!function_exists('document_upload')) {
    function document_upload($file,$folder,$data = [],$fieldName=null){      
        if(!empty($data) !=0){
            if($data->$fieldName != null){
               Storage::delete('public/'.$data->$fieldName);
            }
        }
        $name =  time().'_'.$file->getClientOriginalName();
        // dd($name);
        $mime =  $file->getClientMimeType();
        $size =  $file->getSize();
        $file->storeAs('public/'.$folder, $name);
        $path = $folder.'/'.$name;

        return [
          'doc_name' => $name,
          'doc_mime' => $mime,
          'doc_size' => $size,
          'doc_path' => $path,
        ];
}
}




?>