<?php

use App\Http\Controllers\LocationsController;
use App\Http\Controllers\TripController;
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

/* ListTrip Api Resources */
Route::resource('trip', TripController::class);

/* Locations Api Resources */
Route::resource('locations', LocationsController::class);
