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
        when('/win', {
            templateUrl: './partials/win.html',
            controller: 'winCtrl'
        }).
        when('/lose', {
            templateUrl: './partials/lose.html',
            controller: 'loseCtrl'
        }).
        otherwise({
            redirectTo: '/welcome'
        });
}]);