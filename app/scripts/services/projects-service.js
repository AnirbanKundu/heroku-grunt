'use strict';
/**
 * @requires angular v1.2+
 **/
 
 /*
'use strict';
angular.module('visorApp')
  .service('$cases', function($resource) {
  //var serviceUrl = 'stub/cases/cases.json';
  var serviceUrl = 'api/case/sfdc/forUser';
  this.getAllCases = $resource(serviceUrl, {}, {
    'read' :  {
      method: 'GET',
      isArray: true,
      cache : false
    }
  });

});
*/
angular.module('angularTemp1App')
  .factory('$projectService', ['$http', function ($http) {
 
    return {
      getdata: function(fileName){
        
        return $http({
          url: 'data/'+fileName+'.json',
          method: 'GET',
          isArray: true,
          cache : false
        }).then(function(response){
          return response.data;
        });
      }
 
    };
 
  }]);