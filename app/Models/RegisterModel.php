<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class RegisterModel extends Model
{
    protected $table = 'register';
    protected $fillable = [
        'email',
        'password',
        'type'
    ];
    

  // public function getPasswordAttribute($value) 
  // {
  //   $this->attributes['password'] = Hash::check('plain-text', $value);
  // }

  // public function setPasswordAttribute($value) 
  // {
  //   $this->attributes['password'] = Hash::make($value);
  // }

  
}
