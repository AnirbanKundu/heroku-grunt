/* Directives  */
angular.module('angularTemp1App')
.directive('multiSelect', [function() {
	return {
		scope: {
			data:'='
		},
		restrict: 'AE',
		template:'<div>'
				+'<select id="projectsMultiselect" multiple="multiple"></select>'
				+'</div>',
		link: function (scope, elm, attrs) {
			//console.log('element is defined');
			//This is done to change the style after the directive has been rendered.
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

	