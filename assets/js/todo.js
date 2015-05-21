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

        $scope.removeTodo = function (todo) {
            $scope.todos.splice($scope.todos.indexOf(todo), 1);
        };

        $scope.addTodo = function () {
            $scope.todos.push({
                title: $scope.newTodo,
                completed: false
            });

            $scope.newTodo = null;
        };

    });