app.factory('ListService',function(){
        return [listItem('Buy groceries'), listItem('Go to the gym'), listItem('Call parents')] ;
    }
)




// create the controller and inject Angular's $scope
app.controller('helloController', function($scope, ListService, $http) {
    /*To do list functionality*/


    $(document).ready(function() {
        for (i = 0; i < $scope.toDoList.length; i++) {
            $("#key-" + i.toString()).css('display', '');
        }
        $('#tweetButton').css('display', 'none');
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


    $scope.quote = 'Press the Button for a Random Quote'
    $scope.author = 'Saif';
    $scope.buttonMessage = 'New Quote'




    $scope.newQuote = function() {
        getRandomQuote();


        $('#tweetButton').fadeIn(500);

    }




    getRandomQuote = function() {

        setTimeout(function() {
            $('#fadeQuote').fadeOut(500);
            console.log("gets here ")
        }, 0);

        setTimeout(function() {
            $http.get('http://quotes.stormconsultancy.co.uk/random.json')
                .then(function(response) {
                    $scope.quote = response.data.quote;
                    $scope.author = response.data.author;
                    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + $scope.quote + '" ' + $scope.author));
                });
        }, 500);

        setTimeout(function() {
            $('#fadeQuote').fadeIn(500);
        }, 500);

    }





});

listItem = function (name) {
    return{
        name: name,
        style: ""
    }
}