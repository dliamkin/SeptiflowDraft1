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

        .when('/GPS', {
            templateUrl: 'GPS.html',
            controller: 'GPSController'
        });
});