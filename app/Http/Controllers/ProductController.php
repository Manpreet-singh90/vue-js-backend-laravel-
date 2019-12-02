<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\ProductRepository;

class ProductController extends Controller
{
    public function store(Request $request, ProductRepository $productRepo) 
    {
        if ($request->hasFile('file')) {          
        $image = $request->file('file');
        $input['imagename'] = time().'.'.$image->getClientOriginalExtension();
        $destinationPath = public_path('/images');
        $image->move($destinationPath, $input['imagename']);
        // $this->postImage->add($input);
        return response()->json($input['imagename'],200);
        }
        $product = $productRepo->store($request->all());
        if(empty($product)) {
            return response("",204);
        }
        return response("record save/update successfully",200);
    }

    public function getProduct($status, ProductRepository $productRepo) {
        return $productRepo->getProduct($status);
    }

    public function delete(Request $request, ProductRepository $productRepo) {
        $products = $productRepo->delete($request->all());
        if(empty($products)) {
            return response("",404);
        }
        return response("record deleted successfully",200);
    }

    public function getProductDetail(Request $request, ProductRepository $productRepo) 
    {

        return $productRepo->getProductDetail($request->all());
    }

    public function searchProduct(Request $request, ProductRepository $productRepo) 
    {
        return $productRepo->searchProduct($request->search);

    }

    public function allProduct(Request $request, ProductRepository $productRepo) 
    {   
         return response()->json($productRepo->allProduct($request->status));

    }
    
    

}
