<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login' ,[
    'uses' => 'UsersController@login'
]);

Route::get('/allUsers' ,[
    'uses' => 'UsersController@getAllUsers'
]);

Route::post('/newUser' ,[
    'uses' => 'UsersController@addNewUser'
]);

Route::get('/userByID/{id}' ,[
    'uses' => 'UsersController@getUserByID'
]);

Route::post('/upUser/{id}' ,[
    'uses' => 'UsersController@updateUser'
]);

Route::get('/usersByD/{id}' ,[
    'uses' => 'UsersController@usersByDepartment'
]);

Route::get('/usersByR/{rID}' ,[
    'uses' => 'UsersController@usersByRole'
]);

Route::get('/usersByRnD/{dID}/{rID}' ,[
    'uses' => 'UsersController@userByRoleNDep'
]);



Route::get('/changeRole/{id}/{rid}' ,[
    'uses' => 'UsersController@changeRole'
]);

Route::get('/changeDepartment/{id}/{did}' ,[
    'uses' => 'UsersController@changeDepartment'
]);


Route::delete('/delUser/{id}' ,[
    'uses' => 'UsersController@deleteUser'
]);


Route::get('/getAllRoles' ,[
    'uses' => 'RolesController@getAllRoles'
]);

Route::get('/getRoleById/{id}' ,[
    'uses' => 'RolesController@getRoleByID'
]);

Route::get('/getAllDepartments' ,[
    'uses' => 'DepartmentsController@getAllDepartments'
]);

Route::get('/getDepartmentById/{id}' ,[
    'uses' => 'DepartmentsController@getDepartmentByID'
]);

Route::post('/uploadExcel' ,[
    'uses' => 'UploadExcelController@excel'
]);

Route::get('/agentCount' ,[
    'uses' => 'UsersController@countAgents'
]);

Route::get('/userCount' ,[
    'uses' => 'UsersController@countUsers'
]);

Route::get('/teamCount' ,[
    'uses' => 'UsersController@countTeam'
]);
