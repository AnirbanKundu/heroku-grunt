/* Directives  */
angular.module('angularTemp1App')
.directive('autoComplete', [function() {
	return {
		scope: {
			data:'='
		},
		restrict: 'AE',
		template:'<div>'
				+'<input type="text" data-provide="typeahead">'
				+'</div>',
		link: function (scope, elm, attrs) {
			var $elem = $(elm);
			setTimeout(function(){
				//angular.element('.projectsMultiselect').css('overflow','auto');
				
				
			},15);	

			scope.$watch('data', function(newData, oldData){
				if(newData){
					$('#projectsMultiselect').multiselect({
						maxHeight: 200,
						includeSelectAllOption: true,
				        enableFiltering: true
					});
					$('#projectsMultiselect').multiselect('dataprovider', newData);
				}
			});			
		}
	};
}]);

	