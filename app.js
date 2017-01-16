(function () {
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.name = "";
  $scope.outputText = "Please enter data first";
  $scope.noOfItems = 0;

  $scope.LunchCheckAvailavility = function (){

if ($scope.name.length > 0) {
   var comma = ',';
   var arrayOfStrings = $scope.name.split(comma);
   if (arrayOfStrings.length < 4) {
      $scope.outputText = "Enjoy!";
    } else {
    $scope.outputText = "Too much!";
     }

  } else {
  $scope.outputText = "Please enter data first";
  }
}
    }
})();
