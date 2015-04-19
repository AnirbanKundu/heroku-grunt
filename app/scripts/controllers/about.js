'use strict';

/**
 * @ngdoc function
 * @name angularTemp1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTemp1App
 */
angular.module('angularTemp1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
