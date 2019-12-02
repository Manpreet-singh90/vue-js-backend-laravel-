<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{

    public function rules()
    {
        return [
            'email' => 'required|max:255',
            'password' => 'required|max:10',
        ];
    }

    public function messages()
    {
        return [
            'email.required'    => "please enter email id",
            'password.required' => "please enter your password",
        ];
    }
}
