var app = angular.module("App", ['ngRoute'])
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'partials/login.html',
            controller: 'userCtrl'
        })
        .when('/dashboard', {
            templateUrl: 'partials/dashboard.html',
            controller: 'appointmentsCtrl'
        })
        .when('/new_appointment', {
            templateUrl: 'partials/new_appointment.html',
            controller: 'new_appointmentCtrl'
        })
        // .when('/user/:id', {
        //     templateUrl: 'partials/user.html',
        //     controller: 'userCtrl'
        // })
        .otherwise({
            redirectTo: '/'
        })                                                                
})