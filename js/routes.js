var app = angular.module('MainApp', ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "views/about.htm"
    }).when("/about", {
        templateUrl : "views/about.htm"
    }).when("/blog", {
        templateUrl : "views/blog.htm"
    }).when("/contact", {
        templateUrl : "views/contact.htm"
    })
});


app.controller('MainController', ['$scope', function($scope){
  $scope.cover = "Abdur Rahman"
  
  
}])
                                  