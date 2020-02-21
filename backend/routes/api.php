<?php

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

Route::group([
    'middleware' => 'api',
], function () {
    Route::post('/addpost', 'PageController@addpost');
    Route::get('/getallposts/{email}', 'PageController@getAllPost');
    Route::get('/getunpublished/{email}', 'PageController@getUnpublished');
    Route::get('/postInfo/{id}', 'PageController@postInfo');
    Route::get('/deletepost/{id}', 'PageController@deletePost');
    Route::get('/publishpost/{id}', 'PageController@publishPost');
    Route::post('/updatepost', 'PageController@updatePost');
});