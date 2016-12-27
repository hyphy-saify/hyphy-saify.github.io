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



        var quote;
        var author;

        $.ajax({
            headers: {
                "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
            success: function(response) {
                var json = eval("(" + response + ")");
                quote = json.quote;
                author = json.author;

                $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + $scope.quote + '" ' + $scope.author));
            }
        });

        setTimeout(function() {
            $('#fadeQuote').fadeOut(500);
        }, 0);

        setTimeout(function() {
            $scope.quote = quote;
            $scope.author = author;
            $scope.$apply();
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