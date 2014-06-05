'use strict';

var rService = angular.module('ruleService',[]);

rService.factory('rule', function($http, $q, $timeout){
  return {
    getRules: function() {
      var defer = $q.defer();

      $http.get('http://localhost:8080/rules/').success(function(data, status, headers, config){
        //$timeout(function() {
          defer.resolve(data);
        //}, 4000);
      });

      return defer.promise;
    }
  }
});