var rsjApp = angular.module('rsjApp', ['ngRoute']);

// configure angular routes
rsjApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/partials/_index.html',
      controller: 'indexController'
    })
    .when('/about', {
      templateUrl: 'templates/partials/_about.html',
      controller: 'aboutController'
    })
    .otherwise({
      templateUrl: 'templates/partials/_404.html',
      controller: '404Controller'
    })
});

// controllers for routes
rsjApp.controller('indexController', function($scope) {
  $scope.message = 'SHIT';
  $scope.blog = 'http://google.com';
});
rsjApp.controller('aboutController', function($scope) {
  $scope.message = 'SHIT'
});
rsjApp.controller('404Controller', function($scope) {
  $scope.message = '404 - an error';
})