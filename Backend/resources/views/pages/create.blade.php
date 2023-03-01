@extends('layouts.main-layout')

@section('content')
    <form method="POST" action="{{ route('project.store') }}" enctype="multipart/form-data">
        @csrf
        <label for="name">Name: </label>
        <input type="text" name="name">
        <br>

        <label for="description">Description: </label>
        <br>
        <textarea name="description" cols="50" rows="5"></textarea>
        <br>

        <label for="image">Image: </label>
        <input type="file" name="image">
        <br>

        <label for="release_date">Release Date: </label>
        <input type="date" name="release_date">
        <br>

        <label for="repo_link">Repo Link: </label>
        <input type="text" name="repo_link">
        <br>

        <input type="submit" value="Create Project">
    </form>
@endsection
