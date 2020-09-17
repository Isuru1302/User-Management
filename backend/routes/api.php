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

Route::get('/allUsers' ,[
    'uses' => 'UsersController@getAllUsers'
]);

Route::post('/newUser' ,[
    'uses' => 'UsersController@addNewUser'
]);

Route::post('/upUser/{id}' ,[
    'uses' => 'UsersController@updateUser'
]);

Route::get('/usersByD/{id}' ,[
    'uses' => 'UsersController@usersByDepartment'
]);

Route::get('/usersByR/{id}' ,[
    'uses' => 'UsersController@usersByRole'
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
