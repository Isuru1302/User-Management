<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Users;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{

    public function getAllUsers(){
        $allUsers = Users::all();
        return response()->json(['allUsers'=>$allUsers],201);
    }


    public function addNewUser(Request $request){

        $user = new Users();
        if($this->addDetails($user, $request)){
            return response()->json(['newUser'=>'added'],201);
        }
    }

    public function updateUser(Request $request,$id){
        $updateUser = Users::find($id);
        if($this->addDetails($updateUser, $request)){
            return response()->json(['newUser'=>'added'],201);
        }
    }

    public function usersByDepartment($dID){
        $users = Users::where('Department','=',$dID)->get();
        return response()->json(['users'=>$users],201);
    }

    public function usersByRole($rID)
    {
        $users = Users::where('Status','=',$rID)->get();
        return response()->json(['users'=>$users],201);
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
        return response()->json(['role'=>"updated"],201);
    }

    public function changeDepartment($uid,$dID){
        $updateUser = Users::find($uid);
        $updateUser -> Department = $dID;
        $updateUser->save();
        return response()->json(['department'=>"updated"],201);
    }

    public function deleteUser($id){
        $user = Users::find($id);

        if($user){
            $user->delete();
            return response()->json(['user'=>"deleted"],201);
        }
    }
}
