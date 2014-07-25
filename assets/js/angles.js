var rsjApp = angular.module('rsjApp', ['ngRoute']);

// configure angular routes
rsjApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/partials/_index.html',
      controller: 'indexCtrl'
    })
    .when('/about', {
      templateUrl: 'templates/partials/_about.html',
      controller: 'aboutCtrl'
    })
    .otherwise({
      templateUrl: 'templates/partials/_404.html',
      controller: '404Ctrl'
    })
});

// controllers for routes
rsjApp.controller('defaultCtrl', function($scope) {
  $scope.message = 'default';
});
rsjApp.controller('indexCtrl', function($scope) {
  $scope.message = 'index';
  $scope.blog = 'http://google.com';
});
rsjApp.controller('aboutCtrl', function($scope) {
  $scope.message = 'about'
});
rsjApp.controller('404Ctrl', function($scope) {
  $scope.message = '404 - an error';
})