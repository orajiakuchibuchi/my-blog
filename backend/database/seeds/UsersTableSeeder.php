<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [];
        array_push($data, array(
            'role_id' => \App\Role::$A,
            'fullname' => 'chibuchi orajiaku',
            'phone' => '+2348140131453',
            'email' => 'somtobuchi@gmail.com',
            'password' => bcrypt('password'),
            'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
        ));
        DB::table('users')->insert($data);
    }
}
