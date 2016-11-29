var app = angular.module('app', ['ngMaterial']).controller('MainController', ['$scope', function($scope){

    $scope.page = 0;

    $scope.showAbout = function () {
        $scope.page = 0;
    }
    $scope.showBlog = function () {
        $scope.page = 1;
    }

    $scope.blogView = "assets/blog/blogView.html";
    $scope.aboutView = "assets/about/aboutView.html";


}]);




