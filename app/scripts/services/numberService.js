'use strict';

var nService = angular.module('numberService',[]);

nService.factory('number', function($http, $q, $timeout){
  return {
    getNumbers: function(key,value) {
      var defer = $q.defer();
      var url = 'http://localhost:8080/numbers/';

      if(typeof(key) != 'undefined' && typeof(value) != 'undefined') {
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