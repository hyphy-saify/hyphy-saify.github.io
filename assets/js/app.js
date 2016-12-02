var app = angular.module('app', ['ngMaterial', 'ngRoute']);



app.config(function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl : 'assets/views/helloView.html',
            controller  : 'helloController'
        })
        // route for the about page
        .when('/blog', {
            templateUrl : 'assets/views/blogView.html',
            controller  : 'blogController'
        })
});




app.controller('MainController', function($scope){
});




