'use strict';

var alphaService = angular.module('alphabetService',[]);

alphaService.factory('alphabet', function($http, $q, $timeout){
  return {
    getAlphabet: function(charSet) {
      var defer = $q.defer();
      var url = 'http://localhost:8080/alphabet/';

      if(typeof(charSet) != 'undefined') {
        url += charSet;
      }

      //$http.get('http://localhost:8080/get').success(function(data, status, headers, config){
      $http.get(url).success(function(data, status, headers, config){
        //$timeout(function() {
          defer.resolve(data);
        //}, 4000);
      });

      return defer.promise;
    }
  }
});