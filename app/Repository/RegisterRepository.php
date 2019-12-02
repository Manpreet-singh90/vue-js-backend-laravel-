<?php

namespace App\Repository;
use App\Models\RegisterModel;
use Illuminate\Support\Str;

class RegisterRepository
{
    public function store(array $data) :RegisterModel
    {
      return RegisterModel::updateOrCreate([
        'id'   => $data['id'] ],
        [
          'email'     => $data['email'],
          'password'  =>   $data['password'],
        ]);
    }

    public function allUsers() 
    {
      return RegisterModel::all();
    }

    public function getUserData($userId) 
    {
      return RegisterModel::where('id', $userId)->first();;
    }

    public function checkAuthentication($data) 
    {
      $user =  RegisterModel::select('type')->where(array('email' => $data['email'],'password' => $data['password']))->first();
      return response(array('type'=> $user->type,'api_token' => Str::random(60)),200);
    }
}