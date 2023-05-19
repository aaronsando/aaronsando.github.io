<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('landing');
});

Route::get('/login', function () {
    return view('auth.login');
});
Route::get('/register', function () {
    return view('auth.register');
});


Route::get('/home', function () {
    return view('home');
});


Route::get('/welcome', function () {
    return view('welcome');
});
Route::get('/error', function () {
    return view('error');
})->name('error');

Route::post('/logout', [UserController::class, 'logout'])->name('logout');
