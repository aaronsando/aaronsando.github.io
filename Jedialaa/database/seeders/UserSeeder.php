<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = new User();
        $user-> name = "Maruko";
        $user-> email = "maruko@uabcs.mx";
        $user-> password = "maruko2001";
        $user->save();
    }
}
