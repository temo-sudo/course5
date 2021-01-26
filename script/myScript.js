(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.menu = "";
        $scope.message = "";

        $scope.showMessage = function () {
            var list = $scope.menu.split(',');
            if ($scope.menu === "") {
                $scope.message = "Please enter data first";
                return;
            }
            if (list.length < 4) {
                $scope.message = "Enjoy!";
                return;
            }
            $scope.message = "Too much!";


        };

    }

})();