'use strict';


// Declare app level module which depends on filters, and services

var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ui', 'ui.bootstrap'])
 app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
	// angular front end routes
	$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
	
	// fix to remove '#' from url strings in browser
	$locationProvider.html5Mode(true);
  }]);