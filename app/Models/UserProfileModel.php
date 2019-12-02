<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfileModel extends Model
{
    protected $table = 'user_profiles';
    protected $fillable = [
        'name',
        'email',
        'contact_number',
        'state',
        'city',
        'image'
    ];
}
