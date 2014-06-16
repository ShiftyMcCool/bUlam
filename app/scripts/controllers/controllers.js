'use strict';

var controllers = angular.module('controller', []);

controllers.controller('navController', function($scope,$route,$location) {
	$scope.navbar = {name: "navbar.html", url: "views/navbar.html"};
	$scope.isActive = function(route) {
		return route === $location.path();
	}
});

controllers.controller('alphabetController', function($scope,vowels,consonants,puncMarks) {
	$scope.vowels = vowels;
	$scope.consonants = consonants;
	$scope.puncMarks = puncMarks;
});

controllers.controller('ruleController', function($scope,rules) {
	$scope.rules = rules;
});

controllers.controller('verbController', function($scope,verbs) {
	$scope.verbs = verbs;
});

controllers.controller('numberController', function($scope,numbers,equations) {
	$scope.numbers = numbers;
	$scope.equations = equations;
});