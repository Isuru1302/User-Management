<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Imports\ExcelImport;
use Maatwebsite\Excel\Facades\Excel;

class UploadExcelController extends Controller
{
    public function excel(Request $request){

        $rand = substr(md5(microtime()),rand(0,26),5);
        $file = $request->file('myFile');
   //     $decode = base64_decode($file);
        $path = base_path().'\Excel\\';
        $filename = $rand.'.xlsx';
        $filepath = $path.$filename;
        file_put_contents($filepath,$file);
//        return response()->json(['results'=>$filepath],201);

       // $data = Excel::load($decode)->get();
        return response()->json(['results'=>$file],201);
    }
}
