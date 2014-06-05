'use strict';

var vService = angular.module('verbService',[]);

vService.factory('verb', function($http, $q, $timeout){
  return {
    getVerbs: function() {
      var defer = $q.defer();

      $http.get('http://localhost:8080/verbs/').success(function(data, status, headers, config){
        //$timeout(function() {
          defer.resolve(data);
        //}, 4000);
      });

      return defer.promise;
    }
  }
});