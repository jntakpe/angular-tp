angular
    .module('todoapp', [])
    .controller('TodoCtrl', function TodoCtrl($scope) {
        $scope.remaining = 5;
    });