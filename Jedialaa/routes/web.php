<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProjectController;

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

// Route::get('/welcome', function () {
//     return view('welcome');
// })->name('welcome');

Route::get('/', function () {
    return view('landing');
});

Route::get('/login', function () {
    return view('auth.login');
})->name('login');

Route::get('/register', function () {
    return view('auth.register');
});


Route::group(['middleware' => 'auth'], function(){

    Route::post('/logout', [UserController::class, 'logout'])->name('logout');
    
    Route::get('/home', [UserController::class, 'show']);
    Route::post('/home', [ProjectController::class, 'store']);
    
    Route::get('/project/{id}', [ProjectController::class, 'show']);
    Route::put('/project/{id}', [ProjectController::class, 'update']);
});



Route::get('/error', function () {
    return view('error');
})->name('error');