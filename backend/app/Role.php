<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $guarded = ['id'];

    public static $A = 2;
    public static $U = 1;

    public function users(){
        return $this->hasMany(User::class, 'role_id');
    }
}
