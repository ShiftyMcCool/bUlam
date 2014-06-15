'use strict';

var controllers = angular.module('controller', []);

controllers.controller('alphabetController', function($scope,$route,$location,alphabet,vowels,consonants,puncMarks) {
	$scope.vowels = vowels;
	$scope.consonants = consonants;
	$scope.puncMarks = puncMarks;
	$scope.isActive = function(route) {
		return route === $location.path();
	}
});

controllers.controller('ruleController', function($scope,$route,$location,rule,rules) {
	$scope.rules = rules;
	$scope.isActive = function(route) {
		return route === $location.path();
	}
});

controllers.controller('verbController', function($scope,$route,$location,verb,verbs) {
	$scope.verbs = verbs;
	$scope.isActive = function(route) {
		return route === $location.path();
	}
});

controllers.controller('numberController', function($scope,$route,$location,number,numbers,equations) {
	$scope.numbers = numbers;
	$scope.equations = equations;
	$scope.isActive = function(route) {
		return route === $location.path();
	}
});