<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * Indicates whether the XSRF-TOKEN cookie should be set on the response.
     *
     * @var bool
     */
    protected $addHttpCookie = true;

    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'http://127.0.0.1:8000/login',
        'http://127.0.0.1:8081/login',
        'http://127.0.0.1:8082/login',
        'http://127.0.0.1:8083/login',
        'http://127.0.0.1:8084/login',
            'api/*'
    ];
}
