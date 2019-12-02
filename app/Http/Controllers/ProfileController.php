<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\ProfileRepository;

class ProfileController extends Controller
{
    public function store(Request $request, ProfileRepository $ProfileRepo) {
        if($request->hasFile('file')) {
            die('here');
        }
        die("fsd");
        $store = $ProfileRepo->store($request->all());
        if(empty($store)) {
            return response("",404);
        } 
        return response("Profile created/Updated successfully",200);
    }

    public function getUserProfiles(ProfileRepository $ProfileRepo) {
        return $ProfileRepo->getUserProfiles();

    }
}
