<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/register', 'RegisterController@store')->name('register');

Route::get('/userlist', 'RegisterController@getUserList')->name('getUserList');

route::get('/editUser/{id}', 'RegisterController@getUserDetail')->name('getUserDetail');

route::patch('/update', 'RegisterController@update')->name('update');

route::post('/login','RegisterController@login')->name('login');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
