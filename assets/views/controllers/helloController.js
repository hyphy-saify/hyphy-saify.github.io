app.factory('ListService',function(){
        return [listItem('Buy groceries'), listItem('Go to the gym'), listItem('Call parents')] ;
    }
)

// create the controller and inject Angular's $scope
app.controller('helloController', function($scope, ListService) {
    /*To do list functionality*/


    $(document).ready(function() {
        for (i = 0; i < $scope.toDoList.length; i++) {
            $("#key-" + i.toString()).css('display', '');
        }
    });

    $scope.toDoList = ListService
    $scope.addToList = function () {
        console.log($scope.toDoList)
        $scope.toDoList.push(listItem($scope.newToDoListItem));
        saif = '#key-';
        saif = saif + ($scope.toDoList.length-1).toString();
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

listItem = function (name) {
    return{
        name: name,
        style: ""
    }
}