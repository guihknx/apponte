angular.module('Apponte', ['ngRoute', 'validation', 'validation.rule'])
.config(['$routeProvider', '$locationProvider',
function ($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MainController',
        controllerAs: 'Main'
    }).otherwise({
        redirectTo: '/'
    });
}]);