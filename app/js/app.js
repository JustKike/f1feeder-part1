'use strict';

var F1FeederApp = angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'ngRoute',
]);

F1FeederApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when("/drivers", {
      templateUrl: "partials/drivers.html", 
      controller: "driversController"
    })
    .when("/drivers/:id", {
      templateUrl: "partials/driver.html", 
      controller: "driverController"
    })
    .otherwise({
      redirectTo: '/drivers'
    });

}]);

