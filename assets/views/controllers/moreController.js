app.factory('ListService',function(){
        return [listItem('Buy groceries'), listItem('Go to the gym'), listItem('Call parents')] ;
    }
)


app.controller('moreController', function($scope, ListService, $http) {



    $scope.experiences = [
        {
            title: "SalonFrontDesk",
            description: ' scalable software company for salons and spas ',
            image: 'assets/img/sfd.png',
            blurry: 'assets/img/apurba-blur.png',
            link: '',
            fade: false
        },
        {
            title: 'This Website :)',
            description: 'description',
            image: 'assets/img/bg.jpg',
            blurry: 'assets/img/apurba-blur.png',
            link: '',
            fade: false

        },
        {
            title: 'ApurbaTech',
            description: 'description',
            image: 'assets/img/apurba.png',
            blurry: 'assets/img/apurba-blur.png',
            link: '',
            fade: false
        },
        {
            title: 'EH&S',
            description: 'description',
            image: 'assets/img/ehs.png',
            blurry: 'assets/img/apurba-blur.png',
            link: '',
            fade: false
        },
        {
            title: 'FreeCodeCamp',
            description: 'description',
            image: 'assets/img/ehs.png',
            blurry: 'assets/img/apurba-blur.png',
            link: '',
            fade: false
        },
        {
            title: 'Class Work',
            description: 'description',
            image: 'assets/img/ehs.png',
            blurry: 'assets/img/apurba-blur.png',
            link: '',
            fade: false
        }

    ]
    function toggleFadeBusy(index){

        $scope.experiences[index].fade = !$scope.experiences[index].fade

    }
    function isBusyFading(index){

        return $scope.experiences[index].fade

    }
    $scope.expSlideIn = function (index, fuck) {

        if(!isBusyFading(index)) {
            toggleFadeBusy(index)
            $(".experience-" + index).fadeIn(100, function () {
                toggleFadeBusy(index);
            });
        }

    }
    $scope.expSlideOut = function (index) {
        if(!$scope.fadeDisable&&$(".experience-" + index + ':visible').length != 0){

            $(".experience-" + index).fadeOut('slow');

        }
    }
    $scope.showAllExp = function(){
        var i;
        for(i=0;i<$scope.experiences.length;i++){
            $(".experience-" + i).fadeIn('slow');
        }
    }
    $scope.fadeDisable = false
    $(window).on('resize', function(){
        adjustExps();
    });
    function adjustExps(){


        var w = $(window).width();
        if(w>=960){
            w/=3;
        }else if(w<960&&w>=600){
            w/=2}

        $('.experiences').css('width',w);
        $('.experiences').css('height',w/450*250);
        $('.experiences').css('background-size',w)

        $('.experience').css('width',w);
        $('.experience').css('height',w/450*250);
        $('.experience').css('background-size',w)


    }
    window.onload= function (e) {
        adjustExps()

    }






    $scope.skills = [
        {
            image: "http://jsfiddle.net/img/logo.png",
            title: "Web Development",
            bulletPoints: [
                'HTML, CSS, JS',
                'AngularJS, Angular',
                'Jquery',
                'Mobile Friendly',
                'UI/UX']
        },
        {
            image: "http://jsfiddle.net/img/logo.png",
            title: "Computer Science Concepts",
            bulletPoints: [
                'Data Structures',
                'Algorithms',
                'Graph Theory']
        },
        {
            image: "http://jsfiddle.net/img/logo.png",
            title: "Software Engineering",
            bulletPoints: [
                'Git/Github',
                'Agile Software Development/ Scrum',
                'Atlassian: JIRA, Confluence, Bitbucket']
        },
        {
            image: "http://jsfiddle.net/img/logo.png",
            title: "Programming Languages",
            bulletPoints: [
                'Java, Python, C, C++',
                'JUnit, CUnit']
        }


    ]

    var triggered = false;

    $(window).scroll(function() {

        if( isScrolledIntoView('.skillsContainer')&&!triggered){
            triggered=true;
            showSkills()
        }
    });


    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

     function showSkills(){

        var w = 300
        //determine the idea; width later

        var len = $scope.skills.length
        var inter = w/(len-1)
        var start = w/-2


        var i = 0;
        for(i=0;i<len;i++){

            left = start + inter*i

            
            $('.skill-'+i).animate({

                left: left,
                opacity: 1

            }, 500);
        }


    }


    var expShowCount = 0;

    $scope.hub = function(){

        var arr = []

        for(var i =0; i<$scope.experiences.length;i++){
            arr.push(i)
        }

        arr = shuffleArray(arr)
        console.log(arr)



        showem(arr)
    }

    function showem(arr){

        $('.experiences-'+arr[expShowCount]).animate(
            {opacity: 1 }, 100, function () {
                if(expShowCount++<arr.length){
                    showem(arr)
                }
            }
        )


    }



    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }



    //////quote machine
    $scope.quote = 'Press the Button for a Random Quote'
    $scope.author = 'Abdur';
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

                $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" ' + author));
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


    ////////to do list
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




});

listItem = function (name) {
    return{
        name: name,
        style: ""
    }
}

