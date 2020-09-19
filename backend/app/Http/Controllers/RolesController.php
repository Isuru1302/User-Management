<?php

namespace App\Http\Controllers;

use App\Roles;
use App\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RolesController extends Controller
{
    public function getAllRoles(){
        $role = DB::table('roles')->first();
        return response()->json(['results'=>$role],201);
    }

    public function getRoleByID($id){
        $role = DB::table('roles')->where('rID' ,'=',$id)->first();
        return response()->json(['results'=>$role],201);
    }
}
