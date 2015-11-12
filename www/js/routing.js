septiflowAppRouter = angular.module('septiflowApp', ['ngRoute']);

septiflowAppRouter.service('modelsrv', function () { return new model(); });

septiflowAppRouter.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeController'
        })

        .when('/jobs', {
            templateUrl: 'jobs.html',
            controller: 'jobsController'
        })

        .when('/jobssample', {
            templateUrl: 'jobssample.html',
            controller: 'jobsController'
        })

        .when('/gps', {
            templateUrl: 'gps.html',
            controller: 'gpsController'
        })

        .when('/gpsnav', {
            templateUrl: 'gpsnav.html',
            controller: 'gpsnavController'
        });
});