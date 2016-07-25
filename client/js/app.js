var app = angular.module("App", ['ngRoute'])
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'partials/login.html',
            controller: 'userCtrl'
        })
        .when('/dashboard', {
            templateUrl: 'partials/dashboard.html',
            controller: 'topicCtrl'
        })
        // .when('/topics/:id', {
        //     templateUrl: 'partials/topics.html',
        //     controller: 'discussionCtrl'
        // })
        // .when('/user/:id', {
        //     templateUrl: 'partials/user.html',
        //     controller: 'userCtrl'
        // })
        .otherwise({
            redirectTo: '/'
        })                                                                
})