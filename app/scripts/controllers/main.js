'use strict';

angular.module('bobbygeddesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.title = 'Reading and Leeds Festival';
    $scope.locations = ['Reading', 'Leeds'];
    $scope.dates = ['19/07/2013', '20/07/2013', '21/07/2013'];
  });
