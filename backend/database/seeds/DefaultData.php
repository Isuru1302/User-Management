<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DefaultData extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'Name' => 'Super Admin',
            'Email' => 'super@gmail.com',
            'Password' => Hash::make('12345'),
            'DOB' => '2000-01-01',
            'Department' =>"0",
            'Role' => "0",

        ]);

        DB::table('users')->insert([
            'Name' => 'Manager',
            'Email' => 'manager@gmail.com',
            'Password' => Hash::make('12345'),
            'DOB' => '2000-01-01',
            'Department' => "1",
            'Role' => '1',

        ]);

        DB::table('users')->insert([
            'Name' => 'Agent',
            'Email' => 'agent@gmail.com',
            'Password' => Hash::make('12345'),
            'DOB' => '2000-01-01',
            'Department' => "1",
            'Role' => "3",

        ]);

        DB::table('users')->insert([
            'Name' => 'Team Leader',
            'Email' => 'leader@gmail.com',
            'Password' => Hash::make('12345'),
            'DOB' => '2000-01-01',
            'Department' => "1",
            'Role' => "2",
        ]);

        DB::table('departments')->insert([
            'departmentName' => 'Super Admin',
            'dID' => "0",
        ]);

        DB::table('departments')->insert([
            'departmentName' => 'Marketing',
            'dID' => "1",
        ]);

        DB::table('departments')->insert([
            'departmentName' => 'HR',
            'dID' => "2",
        ]);

        DB::table('departments')->insert([
            'departmentName' => 'IT',
            'dID' => "3",
        ]);

        DB::table('roles')->insert([
            'Role' => 'Super Admin',
            'rID' => "0",
        ]);

        DB::table('roles')->insert([
            'Role' => 'Manager',
            'rID' => "1",
        ]);

        DB::table('roles')->insert([
            'Role' => 'Team Leader',
            'rID' => "2",
        ]);

        DB::table('roles')->insert([
            'Role' => 'Agent',
            'rID' => "3",
        ]);

        DB::table('roles')->insert([
            'Role' => 'Trainee',
            'rID' => "4",
        ]);

        DB::table('roles')->insert([
            'Role' => 'SE',
            'rID' => "5",
        ]);

    }
}
