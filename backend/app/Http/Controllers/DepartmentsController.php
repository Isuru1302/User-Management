<?php

namespace App\Http\Controllers;

use App\Departments;
use Illuminate\Http\Request;

class DepartmentsController extends Controller
{
    //

    public function getAllDepartments(){
        $department = Departments::all();
        return response()->json(['results'=>$department],201);
    }

    public function getDepartmentByID($id){
        $department = Departments::find($id);
        return response()->json(['results'=>$department],201);
    }
}
