angular.module('Apponte', ['ngRoute', 'validation', 'validation.rule'])
.config(['$routeProvider', '$locationProvider',
function ($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MainController',
        controllerAs: 'Main'
    }).
    when('/item/:id', {
        templateUrl: 'templates/item.html',
        controller: 'ItemController',
        controllerAs: 'Item'
    }).otherwise({
        redirectTo: '/'
    });
}]);