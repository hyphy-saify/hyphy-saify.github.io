
app.factory('istService',function(){
        return ['Buy groceries', 'Go to the gym', 'Call parents'];
    }
)


app.controller('blogController', function($scope, istService) {


    $scope.toDoList = istService
    $scope.addToList = function () {
        $scope.toDoList.push($scope.newToDoListItem);
    }


});

