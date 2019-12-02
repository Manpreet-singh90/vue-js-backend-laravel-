<?php

use Illuminate\Http\Request;

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
Route::group(['middleware' => ['cors']], function () {
    Route::post('/login','RegisterController@login');

    Route::post('/register', 'RegisterController@store');

    Route::get('/userlist', 'RegisterController@getUserList');

    Route::get('/editUser/{id}', 'RegisterController@getUserDetail');

    Route::patch('/update', 'RegisterController@update');

    Route::post('/addproduct','ProductController@store');

    Route::get('/products/{status}','ProductController@getProduct');

    Route::post('/deleteProduct','ProductController@delete');

    Route::post('/getProduct','ProductController@getProductDetail'); 

    Route::post('/productList','ProductController@allProduct');

    Route::post('searchProduct','ProductController@searchProduct');

    Route::post('/addProfile','ProfileController@store');

    Route::get('/profile','ProfileController@getUserProfiles');

});

