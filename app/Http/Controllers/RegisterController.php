<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Repository\RegisterRepository;

class RegisterController extends Controller
{
    public function store(RegisterRequest $request, RegisterRepository $registerRepo) 
    {
        $registerRepo->store($request->all());
        return response('success', 201);
    }

    public function getUserList(RegisterRepository $registerRepo) 
    {
       return $getUserList = $registerRepo->allUsers();
    }

    public function getUserDetail($userId, RegisterRepository $registerRepo) 
    {
       return $registerRepo->getUserData($userId);        
    }

    public function login(Request $request, RegisterRepository $registerRepo)
    {
        $authenticateUser = $registerRepo->checkAuthentication($request->all());
        if(empty($authenticateUser)) {
            return response('Invalid authentication',404);
        }
        return response()->json($authenticateUser, 200);
        
    }
}
