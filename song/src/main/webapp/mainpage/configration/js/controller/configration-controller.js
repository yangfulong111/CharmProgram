myApp.controller('ConfigrationController', ['ConfigrationService', '$scope', '$http',
	function(ConfigrationService, $scope, $http) {
		$scope.saveThreshold = function() {
			ConfigrationService.saveFiles($scope);
		};
		
	}]);