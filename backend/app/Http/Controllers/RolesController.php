<?php

namespace App\Http\Controllers;

use App\Roles;
use Illuminate\Http\Request;

class RolesController extends Controller
{
    public function getAllRoles(){
        $role = Roles::all();
        return response()->json(['allDepartments'=>$role],201);
    }

    public function getRoleByID($id){
        $role = Roles::find($id);
        return response()->json(['Department'=>$role],201);
    }
}
