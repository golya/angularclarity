var clarifyControllers = angular.module('clarifyControllers', []);

clarifyControllers.controller('welcomeCtrl', function ($scope, $location) {
    $scope.play = function ( path ) {
        $location.path( path );
    };
});

clarifyControllers.controller('gameCtrl', function ($scope) {
    $scope.game = 'GAME';
});