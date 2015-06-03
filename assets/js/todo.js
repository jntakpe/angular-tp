angular
    .module('todoapp', [])
    .controller('TodoCtrl', function TodoCtrl($scope, filterFilter) {

        $scope.todos = [];
        $scope.status = '';

        $scope.remaining = function () {
            return filterFilter($scope.todos, {completed: false}).length;
        };

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

        $scope.markAll = function (allChecked) {
            $scope.todos.forEach(function (todo) {
                todo.completed = allChecked;
            });
        };

        $scope.changeStatus = function (status) {
            $scope.statusFilter = status ? (status === 'active' ? {completed: false} : {completed: true}) : {};
            $scope.status = status;
        };

    });