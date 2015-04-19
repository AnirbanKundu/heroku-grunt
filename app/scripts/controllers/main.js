'use strict';

/**
 * @ngdoc function
 * @name angularTemp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTemp1App
 */
angular.module('angularTemp1App')
  .controller('MainCtrl', function ($scope,$projectService) {

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
  });
