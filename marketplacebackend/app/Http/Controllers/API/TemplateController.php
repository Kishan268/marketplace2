<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Response;
use App\Http\Repositories\API\TemplateRepository;

class TemplateController extends Controller
{
     private $template;

    public function __construct(TemplateRepository $template)
    {
        $this->template = $template;
    }
    public function getTemplateProduct($slug){
        $data = $this->template->getTemplateProduct($slug);
        return Response::json([
                'data' => $data
            ], 200);
    }
     public function getTemplate(){
        $data = $this->template->getTemplate();
        return Response::json([
                'data' => $data
            ], 200);
    }

}
