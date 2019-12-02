<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductModel extends Model
{
    protected $table = 'add_products';

    protected $fillable = [
        'name',
        'description',
        'price',
        'quantity',
        'image',
    ];
}
