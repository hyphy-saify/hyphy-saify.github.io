var app = angular.module('app', ['ngMaterial', 'ngRoute']);



// create the controller and inject Angular's $scope
app.controller('helloController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});


app.controller('blogController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

app.config(function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl : 'blogView.html',
            controller  : 'blogController'
        })
        // route for the about page
        .when('/about', {
            templateUrl : 'helloView.html',
            controller  : 'helloController'
        })

});




app.controller('MainController', function($scope){

    /*what page am i looking at functionality. temporary solution*/
    $scope.page = 0;
    $scope.showAbout = function () {
        $scope.page = 0;
    }
    $scope.showBlog = function () {
        $scope.page = 1;
    }

    /*To do list functionality*/
    listItem = function (name) {
        return{
            name: name,
            style: ""
        }
    }

    $scope.toDoList = [listItem('Buy groceries'), listItem('Go to the gym'), listItem('Call parents')];
    $scope.addToList = function () {
        $scope.toDoList.push(listItem($scope.newToDoListItem));

        saif = '#key-';
        saif = saif + ($scope.toDoList.length-1).toString();
        console.log(saif)

        setTimeout(function() {
            $(saif).fadeIn(1700);
        }, 1);
    }

    $scope.strike = function (index) {
        if($scope.toDoList[index].style === "")
            $scope.toDoList[index].style = {
                textDecoration: 'line-through'
            }
        else
            $scope.toDoList[index].style = ""
    }
});




