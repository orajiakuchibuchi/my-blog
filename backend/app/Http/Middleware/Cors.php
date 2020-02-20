<?php

namespace App\Http\Middleware;

use Closure;

class Cors {

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next) {
//
//        header('Access-Control-Allow-Origin : *');
//        header('Access-Control-Allow-Headers: Content-type,X-Auth-Token,Authorization,Origin');
//        return $next($request);

        $response = $next($request);
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        $response->headers->set('Access-Control-Allow-Headers',' Origin, Content-Type, Accept, Authorization, X-Request-With, X-Auth-Token');
        $response->headers->set('Access-Control-Allow-Credentials',' true');
        return $response;

//        header("Access-Control-Allow-Origin: *");
//
//        // ALLOW OPTIONS METHOD
//        $headers = [
//            'Access-Control-Allow-Methods'=> 'POST, GET, OPTIONS, PUT, DELETE',
//            'Access-Control-Allow-Headers'=> 'Content-Type, X-Auth-Token, Origin, Accept, Authorization, X-Request-With',
//            'Access-Control-Allow-Credentials'=> 'true'
//        ];
//        if($request->getMethod() == "OPTIONS") {
//            // The client-side application can set only headers allowed in Access-Control-Allow-Headers
//            return Response::make('OK', 200, $headers);
//        }
//
//        $response = $next($request);
//        foreach($headers as $key => $value)
//            $response->header($key, $value);
//        return $response;

    }
}