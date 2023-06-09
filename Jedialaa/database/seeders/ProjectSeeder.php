<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $project = new Project();

        $project-> name = "Proyecto prueba";
        $project-> line_counter = 0;
        $project-> rect_counter = 0;
        $project-> text_counter = 0;
        $project-> ellipse_counter = 0;
        $project-> user_id = 1;
        
        $project->save();
    }
}
