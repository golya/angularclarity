var clarify = angular.module('clarify', [
    'ngRoute',
    'clarifyControllers'
]);

clarify.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
        when('/welcome', {
            templateUrl: './partials/welcome.html',
            controller: 'welcomeCtrl'
        }).
        when('/game', {
            templateUrl: './partials/game.html',
            controller: 'gameCtrl'
        }).
        otherwise({
            redirectTo: '/welcome'
        });
}]);