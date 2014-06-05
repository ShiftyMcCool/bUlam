'use strict';

var app = angular.module('bUlamApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'controller',
  'alphabetService',
  'ruleService',
  'verbService'
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
  .when('/rules', {
    controller:'ruleController',
    templateUrl:'/views/rules.html',
    resolve: {
      rules: function(rule) {
        return rule.getRules();
      }
    }
  })
  .when('/verbs', {
    controller:'verbController',
    templateUrl:'/views/verbs.html',
    resolve: {
      verbs: function(verb) {
        return verb.getVerbs();
      }
    }
  })
  .otherwise({
    redirectTo:'/'
  });
});