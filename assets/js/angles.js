var rsjApp = angular.module('rsjApp', ['ngRoute']);

// helpers
var addScript = function(script_name) {
  var s = document.createElement('script');
  s.src = script_name;
  document.body.appendChild(s);
}

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
  // addScript("/assets/js/triangles.js");
});
rsjApp.controller('indexCtrl', function($scope) {
  $scope.message = 'index';
  $scope.blog = 'https://medium.com/@raymondjacobson';
  addScript("/assets/js/triangles.js");
});
rsjApp.controller('aboutCtrl', function($scope) {
  $scope.message = 'about'
  $scope.blog = 'https://medium.com/@raymondjacobson';
  addScript("/assets/js/triangles.js");
});
rsjApp.controller('404Ctrl', function($scope) {
  $scope.message = '404 - an error';
  addScript("/assets/js/triangles.js");
});