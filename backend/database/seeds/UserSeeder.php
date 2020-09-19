<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'Name' => Str::random(10),
            'Email' => Str::random(10).'@gmail.com',
            'Password' => Hash::make('12345'),
            'DOB' => '2000-01-01',
            'Department' => rand(1,3),
            'Role' => rand(1,5),

        ]);
    }
}
