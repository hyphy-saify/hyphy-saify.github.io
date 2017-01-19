var app = angular.module('app', ['ngMaterial', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl : 'assets/views/moreView.html',
            controller  : 'moreController'
        })
        // route for the about page
        .when('/hello', {
            templateUrl : 'assets/views/helloView.html',
            controller  : 'helloController'
        })
        .when('/blog', {
            templateUrl : 'assets/views/moreView.html',
            controller  : 'moreController'

        })
        .when('/more', {
            templateUrl : 'assets/views/blogView.html',
            controller  : 'blogController'
        })
});


app.factory('initialService',function(){
        i = 0;
        return i;
    }
)

app.controller('MainController', function($scope, initialService){

    i = initialService;
    $(document).ready(function() {
        $('.background').css('height', $(window).height() + 'px');
        enableResize();
        if (i ==0) {
            fadeInIntro()
            i++}

    });

});




