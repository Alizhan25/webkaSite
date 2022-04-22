angular.module('Candyland', ['ngRoute', 'RouteControllers', 'UserService', 'BookingDataApi']);
 
angular.module('Candyland').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
    $routeProvider.when('/', {
        templateUrl: '/pages/home.ejs',
        controller: 'HomeController'
    })
    .when('/home', {
        templateUrl: '/pages/home.ejs',
        controller: 'HomeController'
    })
    .when('/packages', {
        templateUrl: '/pages/packages.ejs'
    })
    .when('/gallery', {
        templateUrl: '/pages/gallery.ejs'
    })
    .when('/sweetlist', {
        templateUrl: '/pages/sweetlist.ejs'
    })
    .when('/bookus', {
        templateUrl: '/pages/bookus.ejs',
        controller: 'BookingController'
    }).when('/confirm', {
        templateUrl: '/pages/bookingsuccess.ejs',
        controller: 'BookingConfirmationController'
    });
});
