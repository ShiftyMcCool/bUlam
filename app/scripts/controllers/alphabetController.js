'use strict';

var alphaControllers = angular.module('alphabetController', []);

alphaControllers.controller('alphabetController', function($scope,$route,$location,alphabet,vowels,consonants) {
	$scope.vowels = vowels;
	$scope.consonants = consonants;
	$scope.isActive = function(route) {
		return route === $location.path();
	}
});