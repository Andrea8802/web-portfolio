@extends('layouts.main-layout')

@section('content')
    <a href="{{ route('project.create') }}">Create project</a>

    @foreach ($projects as $project)
        <h3>
            {{ $project->name }}
        </h3>
        <p>
            {{ $project->description ?? 'No description' }}
        </p>
        <br>
        <img src="{{ asset('storage/' . $project->image) }}" alt="">
        <br>
        <a href="{{ $project->repo_link }}">Repo Link</a>
        <br>
        <a href="{{ route('project.delete', $project) }}">Delete</a>
        <a href="{{ route('project.show', $project) }}">More Details</a>
        <br><br>
    @endforeach
@endsection
