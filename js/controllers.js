var clarifyControllers = angular.module('clarifyControllers', []);

clarifyControllers.controller('welcomeCtrl', function ($scope, $location) {
    $scope.welcomeMessage = 'Brand new APP can find your mind!';

    $scope.play = function ( path ) {
        $location.path( path );
    };
});

clarifyControllers.controller('gameCtrl', function ($scope) {
    $scope.game = 'GAME';
});