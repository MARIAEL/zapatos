'use strict';

/**
 * @ngdoc function
 * @name zapatosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the zapatosApp
 */
angular.module('zapatosApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
