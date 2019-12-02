<?php

namespace App\Repository;
use App\Models\ProductModel;
use Illuminate\Support\Str;

class ProductRepository
{
    public function store($data) 
    {
      return ProductModel::updateOrCreate(
          [
              'id' => $data['id']
          ],
          [
              'name'        => $data['name'],
              'description' => $data['description'],
              'price'       => $data['price'],
              'quantity'    => $data['quantity'],
              'image'       => $data['image'],
          ]);
    }

   public function getProduct($status) {
       if($status==2) {
        return ProductModel::all();    
       }
       return ProductModel::all()->where('status','=',$status);
   }

   public function delete($id) 
   {
    return ProductModel::where('id', '=', $id)->delete();
    }
    
    public function getProductDetail($id) 
    {
        return ProductModel::select("*")->where("id","=",$id)->first();
    }

    public function searchProduct($searchItem) 
    {
        return ProductModel::where('name', 'LIKE', "%$searchItem%")->orWhere('description', 'LIKE', "%$searchItem%" )->get();
    }

    public function allProduct(int $status) 
    {
        if($status=="2"){
            return ProductModel::all();
        }
        else if($status==1){
            return ProductModel::where('status',$status)->get();
        }
        else if($status==11){
            return ProductModel::limit(11)->get();
        }
        else{
              return ProductModel::where('status',$status)->get();
        }
     
    }

}