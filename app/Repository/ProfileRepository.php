<?php

namespace App\Repository;
use App\Models\UserProfileModel;
use Illuminate\Support\Str;

class ProfileRepository
{
    public function store($data) 
    {
       // dd($data);
      return UserProfileModel::updateOrCreate(
          [
              'id' => $data['id']
          ],
          [
              'name'            => $data['name'],
              'email'           => $data['email'],
              'contact_number'  => $data['contact_number'],
              'state'           => $data['state'],
              'city'            => $data['city'],
              'image'           => $data['image'],
          ]);
    }

    public function getUserProfiles() {
        return UserProfileModel::all();
    }

   

}