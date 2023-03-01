<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;


Route::get('/', [MainController::class, 'home'])->name('home');

Route::get('/project/show/{project}', [MainController::class, 'projectShow'])->name('project.show');

Route::get('/project/delete/{project}', [MainController::class, 'projectDelete'])->name('project.delete');

Route::get('/project/create', [MainController::class, 'projectCreate'])->name('project.create');
Route::post('/project/store', [MainController::class, 'projectStore'])->name('project.store');