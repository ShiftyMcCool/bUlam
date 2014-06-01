'use strict';

var app = angular.module('bUlamApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'alphabetController',
  'alphabetService'
]);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl:'/views/main.html'
  })
  .when('/alphabet', {
    controller:'alphabetController',
    templateUrl:'/views/alphabet.html',
    resolve: {
      vowels: function(alphabet) {
        return alphabet.getAlphabet('vowel');
      },
      consonants: function(alphabet) {
        return alphabet.getAlphabet();
      }
    }
  })
  .otherwise({
    redirectTo:'/'
  });
});