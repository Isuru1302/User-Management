<?php

namespace App\Imports;

use App\Users;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToCollection;

class ExcelImport implements ToCollection
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $collection)
    {

        $user = new Users();
        $user -> Name = "test1";
        $user -> Email = "test1";
        $user -> DOB = "test1";
        $user -> Department = "1";
        $user -> Role = "2";
        $user -> Password = Hash::make("12345");
        $user -> save();
//        foreach ($collection as $key => $value){
//
//            if($key!=0){
//
//                $name = $value[0];
//                $email = $value[1];
//                $password = $value[2];
//                $DOB = $value[3];
//
//                $excelDep = $value[4];
//                $excelRole = $value[5];
//                $dep="";$role="";
//
//                switch ($excelDep){
//                    case "Marketing":
//                        $dep="1";
//                        break;
//                    case "HR":
//                        $dep="2";
//                        break;
//                    case "IT":
//                        $dep="3";
//                        break;
//                }
//
//                switch ($excelRole){
//                    case "Manager":
//                        $role="1";
//                        break;
//                    case "Team Leader":
//                        $role="2";
//                        break;
//                    case "Agent":
//                        $role="3";
//                        break;
//                    case "Trainee":
//                        $role="4";
//                        break;
//                    case "SE":
//                        $role="5";
//                        break;
//                }
//
//
//                DB::table('users')->insert(
//                    [
//                        'Name'=>"text",
//                        'Email'=>"text",
//                        'Password'=>"text",
//                        'DOB'=>"text",
//                        'Department'=>"1",
//                        'Role'=>"2"
//                    ]
//                );
//            }
//        }
    }
}
