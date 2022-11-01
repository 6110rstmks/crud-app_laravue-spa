<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>How To Install Vue 3 in Laravel 9 with Vite</title>

	@vite('resources/css/app.css')
</head>
<body>
	<div id="app">
        <header-component></header-component>
        {{-- <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link> --}}
        <hr>
        <router-view></router-view>
    </div>

	@vite('resources/js/app.js')
</body>
</html>
