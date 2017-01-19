app.controller('moreController', function($scope) {



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


    function isScrolledIntoView(elem)
    {
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
                top: 45,
                opacity: 1

            }, 500);
        }


    }

});

