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
    .when('/projects', {
      templateUrl: 'templates/partials/_projects.html',
      controller: 'projectsCtrl'
    })
    .when('/about', {
      templateUrl: 'templates/partials/_about.html',
      controller: 'aboutCtrl'
    })
    .when('/resume', {
      templateUrl: 'templates/partials/_resume.html',
      controller: 'resumeCtrl'
    })
    .when('/nature', {
      templateUrl: 'templates/partials/_nature.html',
      controller: 'natureCtrl'
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
  $scope.blog = 'https://medium.com/@raymondjacobson';
  if (typeof TRIANGLE_QTY == 'undefined') addScript("/assets/js/triangles.js");
  addScript("/assets/js/svg_fix.js");
});
rsjApp.controller('aboutCtrl', function($scope) {
  $scope.message = 'about'
  $scope.blog = 'https://medium.com/@raymondjacobson';
  if (typeof TRIANGLE_QTY == 'undefined') addScript("/assets/js/triangles.js");
  addScript("/assets/js/svg_fix.js");
});
rsjApp.controller('projectsCtrl', function($scope) {
  $scope.message = 'projects'
  if (typeof TRIANGLE_QTY == 'undefined') addScript("/assets/js/triangles.js");
  addScript("/assets/js/svg_fix.js");
});
rsjApp.controller('resumeCtrl', function($scope) {
  $scope.message = 'resume';
  addScript("/assets/js/svg_fix.js");
});
rsjApp.controller('natureCtrl', function($scope) {
  $scope.message = 'nature';
  addScript("/assets/js/svg_fix.js");
});
rsjApp.controller('404Ctrl', function($scope) {
  $scope.message = '404 - an error';
  if (typeof TRIANGLE_QTY == 'undefined') addScript("/assets/js/triangles.js");
  addScript("/assets/js/svg_fix.js");
});