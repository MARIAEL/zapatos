'use strict';

/**
 * @ngdoc function
 * @name zapatosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zapatosApp
 */
angular.module('zapatosApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
