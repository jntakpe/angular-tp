angular
    .module('todoapp', [])
    .controller('TodoCtrl', function TodoCtrl($scope) {
        $scope.remaining = 5;
        $scope.todos = [
            {
                title: 'My first task',
                completed: true
            },
            {
                title: 'My second task',
                completed: false
            }
        ];
    });