'use strict';

// Angular has a limitTo filter built-in, but to
// properly paginate client-side, we need a startFrom filter
angular.module('angularTemp1App')
  .filter('startFrom', function() {
    return function(input, start) {
      start = +start; //parse to int
      if(input){
      	return input.slice(start);
      }
      else{
      	return	null;
      }
    };
  });
