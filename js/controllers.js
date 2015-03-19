var clarifyControllers = angular.module('clarifyControllers', []);

clarifyControllers.controller('welcomeCtrl', function ($scope) {
    $scope.welcomeMessage = 'Hi everyone!';
});