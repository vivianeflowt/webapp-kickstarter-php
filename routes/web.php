<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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
    //echo "teste4";
    return view('welcome');
});

Route::get('/debug', function () {
    $user = Auth::user();
    if (isset($user)){
        return redirect()->action('Dashboard\DashboardController@index');
    }
    else {
        echo 'NÃO AUTHORIZADO';
    }
});

Route::get('/dashboard', 'Dashboard\DashboardController@index')->middleware('auth');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
