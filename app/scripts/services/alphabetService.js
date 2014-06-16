'use strict';

var alphaService = angular.module('alphabetService',[]);

alphaService.factory('alphabet', function($http, $q, $timeout){
  return {
    getAlphabet: function(key,value) {
      var defer = $q.defer();
      var url = 'http://localhost:8080/alphabet/';

      if(typeof(key) != 'undefined' && typeof(value) !== 'undefined') {
        url += key + '/' + value;
      }

      $http.get(url).success(function(data, status, headers, config){
        //$timeout(function() {
          defer.resolve(data);
        //}, 4000);
      });

      return defer.promise;
    }
  }
});