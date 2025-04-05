<?php

use App\Http\Controllers\KategoriaController;
use App\Http\Controllers\TesztController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/kategoria',[KategoriaController::class, 'index']);
Route::get('/tesztek',[TesztController::class, 'index']);
Route::get('/tesztekByKat/{id}',[KategoriaController::class, 'tesztekByKat']);
