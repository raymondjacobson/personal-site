var rsjApp = angular.module('rsjApp', ['ngRoute']);

// configure angular routes
rsjApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/partials/_index.html',
      controller: 'indexController'
    })
    .otherwise({
      templateUrl: 'templates/partials/_404.html',
      controller: '404Controller'
    })
});

// controllers for routes
rsjApp.controller('indexController', function($scope) {
  $scope.message = 'SHIT'
});
rsjApp.controller('404Controller', function($scope) {
  $scope.message = '404 - an error'
})