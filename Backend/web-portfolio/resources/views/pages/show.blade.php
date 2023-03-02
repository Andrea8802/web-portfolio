@extends('layouts.main-layout')

@section('content')
    <h3>
        {{ $project->name }}
    </h3>
    <p>
        {{ $project->description }}
    </p>
    <br>
    <img src="{{ asset('storage/' . $project->image) }}" alt="">
    <br>
    {{ $project->release_date }}
    <br>
    <a href="{{ $project->repo_link }}">Repo Link</a>
@endsection
