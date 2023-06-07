<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $project = Project::create($request->all());
        $id = $project->id;
        return redirect('/project/'.$id);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $proj = Project::with('user')->find($id);
        return view('project', ['proj' => $proj]);
        // return $proj;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        
        // return $request->input('figureArray');
        // return $request;
        $project = Project::find($request->input('id'));
        $project->figureArray = $request->input('figureArray');

        $project->line_counter = $request->input('line_counter');
        $project->rect_counter = $request->input('rect_counter');
        $project->ellipse_counter = $request->input('ellipse_counter');
        $project->text_counter = $request->input('text_counter');
        
        $project->save();
        return redirect('project/'.$request->input('id'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
