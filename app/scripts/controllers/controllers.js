'use strict';

var controllers = angular.module('controller', []);

controllers.controller('alphabetController', function($scope,$route,$location,alphabet,vowels,consonants) {
	$scope.vowels = vowels;
	$scope.consonants = consonants;
	$scope.isActive = function(route) {
		return route === $location.path();
	}
});

controllers.controller('ruleController', function($scope,$route,$location,rules,rule) {
	$scope.rules = rules;
	$scope.isActive = function(route) {
		return route === $location.path();
	}
});

controllers.controller('verbController', function($scope,$route,$location,verbs, verb) {
	$scope.verbs = verbs;
	$scope.isActive = function(route) {
		return route === $location.path();
	}
});