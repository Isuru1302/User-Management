<?php

namespace App\Http\Controllers;

use App\Roles;
use Illuminate\Http\Request;
use App\Users;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{

    public function login(Request $request){
        $userName = $request->input('un');
        $Pw = $request->input('up');

        $user = Users::where('Email','=',$userName)->first();

        if($user){
            if (Hash::check($Pw, $user->Password))
            {
                return response()->json(['results'=>$user],201);
            }else{
                return response()->json(['results'=>"error"],201);
            }
        }else{
            return response()->json(['results'=>"error"],201);
        }
    }

    public function getAllUsers(){
        $allUsers = Users::where('Role','!=','0')->get();

        return response()->json(['results'=>$allUsers],201);

    }

    public function getUserByID($id){
        $user = Users::find($id);
        return response()->json(['results'=>$user],201);
    }

    public function addNewUser(Request $request){

        $user = new Users();
        if($this->addDetails($user, $request)){
            return response()->json(['results'=>'added'],201);
        }
    }

    public function updateUser(Request $request,$id){
        $updateUser = Users::find($id);
        if($this->addDetails($updateUser, $request)){
            return response()->json(['results'=>'added'],201);
        }
    }

    public function usersByDepartment($dID){
        $users = Users::where('Department','=',$dID)->get();
        return response()->json(['results'=>$users],201);
    }

    public function usersByRole($rID)
    {
        $users = Users::where('Role','=',$rID)->get();
        return response()->json(['results'=>$users],201);
    }

    public function userByRoleNDep($dID,$rID){
        $users = Users::where('Role','=',$rID)->where('Department','=',$dID)->get();
        return response()->json(['results'=>$users],201);
    }

    public function addDetails($user,Request $request){
        $user -> Name = $request->input('Name');
        $user -> Email = $request->input('Email');
        $user -> DOB = $request->input('DOB');
        $user -> Department = $request->input('Department');
        $user -> Role = $request->input('Role');
        $user -> Password = Hash::make($request->input('Password'));
        $user -> save();
    }

    public function changeRole($uid,$rID){
        $updateUser = Users::find($uid);
        $updateUser -> Role = $rID;
        $updateUser->save();
        return response()->json(['results'=>"updated"],201);
    }

    public function changeDepartment($uid,$dID){
        $updateUser = Users::find($uid);
        $updateUser -> Department = $dID;
        $updateUser->save();
        return response()->json(['results'=>"updated"],201);
    }

    public function deleteUser($id){
        $user = Users::find($id);

        if($user){
            $user->delete();
            return response()->json(['results'=>"deleted"],201);
        }else{
            return response()->json(['results'=>"not-deleted"],201);
        }
    }

    public function countAgents(){
        $usersCount = DB::table('users')->where('Role','=','3')->count();
        return response()->json(['results'=>$usersCount],201);
    }

    public function countUsers(){
        $usersCount = DB::table('users')->count();
        return response()->json(['results'=>$usersCount],201);
    }

    public function countTeam(){
        $usersCount = DB::table('users')->where('Role','=','2')->count();
        return response()->json(['results'=>$usersCount],201);
    }
}
