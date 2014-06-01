'use strict';

var alphaService = angular.module('alphabetService',[]);

alphaService.factory('alphabet', function($http, $q, $timeout){
  return {
    getAlphabet: function() {
      var defer = $q.defer();

      //$http.get('http://localhost:8080/get').success(function(data, status, headers, config){
      $http.get('http://localhost:8080/alphabet/').success(function(data, status, headers, config){
        //$timeout(function() {
          defer.resolve(data);
        //}, 4000);
      });

      return defer.promise;
    }
  }
});