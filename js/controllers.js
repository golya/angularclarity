var clarifyControllers = angular.module('clarifyControllers', []);

clarifyControllers.controller('welcomeCtrl', function ($scope, $location) {
    $scope.play = function ( path ) {
        $location.path( path );
    };
});

clarifyControllers.controller('gameCtrl', [
    '$scope',
    'gamestate',
    '$location',
    function ($scope, gamestate, $location) {
        $scope.game = 'GAME';
        $scope.state = gamestate;

        $scope.lose = function () {
            $location.path( '/lose' );
        };

        $scope.win = function () {
            gamestate.levelUp();
            $location.path( '/win' );
        };

        $scope.home = function () {
            $location.path( '/home' );
        };
    }
]);

clarifyControllers.controller('winCtrl', [
    '$scope',
    'gamestate',
    '$location',
    function ($scope, gamestate, $location) {
        $scope.state = gamestate;
        $scope.back = function () {
            $location.path( '/game' );
        };
    }
]);

clarifyControllers.controller('loseCtrl', [
    '$scope',
    'gamestate',
    '$location',
    function ($scope, gamestate, $location) {
        $scope.state = gamestate;
        $scope.back = function () {
            $location.path( '/game' );
        };
    }
]);