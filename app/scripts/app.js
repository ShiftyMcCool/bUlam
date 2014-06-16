'use strict';

var app = angular.module('bUlamApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'controller',
  'alphabetService',
  'ruleService',
  'verbService',
  'numberService'
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
        return alphabet.getAlphabet('type','vowel');
      },
      consonants: function(alphabet) {
        return alphabet.getAlphabet('type','consonant');
      },
      puncMarks: function(alphabet) {
        return alphabet.getAlphabet('type','punctuation');
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
  .when('/numbers', {
    controller:'numberController',
    templateUrl:'/views/numbers.html',
    resolve: {
      numbers: function(number) {
        return number.getNumbers('type','number');
      },
      equations: function(number) {
        return number.getNumbers('type','math');
      }
    }
  })
  .otherwise({
    redirectTo:'/'
  });
});