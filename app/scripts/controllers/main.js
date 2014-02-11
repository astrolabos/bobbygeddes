'use strict';

angular.module('bobbygeddesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.events = [
      {
        id: 1,
        title: 'Reading and Leeds Festival',
        locations: ['Reading', 'Leeds'],
        dates: ['19/07/2013', '20/07/2013', '21/07/2013']
      },
      {
        id: 2,
        title: 'Glasto',
        locations: ['Glasto'],
        dates: ['19/06/2013', '20/06/2013', '21/06/2013']
      }
    ];
  })
  .controller('EventCtrl', function ($scope) {
    $scope.event = {
      id: 1,
      title: 'Reading and Leeds Festival',
      locations: ['Reading', 'Leeds'],
      dates: ['19/07/2013', '20/07/2013', '21/07/2013']
      };
  });
