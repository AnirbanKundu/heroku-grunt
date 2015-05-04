'use strict';

/**
 * @ngdoc function
 * @name angularTemp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTemp1App
 */
angular.module('angularTemp1App')
  .controller('MainCtrl', function ($scope,$projectService,$http) {

  	// Initial Filter Settings
    $scope.searchText = '';
    // Initial Pagination Settings
    $scope.currentPage = 1;
    $scope.itemsPerPage = 9;
    // Initial Sort Settings
    $scope.sortBy = 'DATESOLVED';
    $scope.sortOrder = 'reverse'; // values are '' or 'reverse'

    // Simple toggle sort function
    $scope.toggleSort = function(column){
	  console.log('column name is', column);
      if($scope.sortBy === column){
        $scope.sortOrder = $scope.sortOrder === '' ? 'reverse' : '';
      } else {
        $scope.sortBy = column;
        $scope.sortOrder = ''; // default for new is desc
      }
    };
    $scope.sortAscending = function(){
    	$scope.sortOrder = '';
    };
    $scope.sortDescending = function(){
    	$scope.sortOrder = 'reverse';
    }

    $projectService.getdata('projects').then(
		function(projects){
			//console.log(data);
			var data = [];
		    for (var i = 0; i < projects.ALLPROJECTS.length; i++) {   
		        var combo = {label : projects.ALLPROJECTS[i].project, value : i}; 
		        data.push(combo);
		    }
		    $scope.projectsdata = data;
		},
		function(error){
			console.log(error);
		}
    );
    $projectService.getdata('compound').then(
  		function(data){
  			//console.log(data);
  			$scope.compounds = data.allStrucs;
  		},
  		function(error){
  			console.log(error);
  		}
    );

    $scope.selected = undefined;
  $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getLocation = function(val) {
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response){
      return response.data.results.map(function(item){
        return item.formatted_address;
      });
    });
  };

    $http({
        url: 'http://ip-api.com/json',//'http://api.ipify.org?format=jsonp&callback=?',
        method: 'GET',
        isArray: false,
        cache : false
    }).then(
        function(data){
            console.log('ip address is : ', data);
            $scope.ipAddress = data;
        },
        function(error){
            console.log('ip address is : ', error); 
            $scope.ipAddress = data;
        }
     );
  });
