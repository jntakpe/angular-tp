(function () {
    angular
        .module('scopeapp', [])
        .controller('ParentCtrl', ParentCtrl);


    function ParentCtrl($scope) {
        $scope.name = null;
        $scope.user = {};
    }

})();