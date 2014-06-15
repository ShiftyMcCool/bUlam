'use strict';

var nService = angular.module('numberService',[]);

nService.factory('number', function($http, $q, $timeout){
  return {
    getNumbers: function(numType) {
      var defer = $q.defer();
      var url = 'http://localhost:8080/numbers/';

      if(typeof(numType) != 'undefined') {
        url += numType;
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