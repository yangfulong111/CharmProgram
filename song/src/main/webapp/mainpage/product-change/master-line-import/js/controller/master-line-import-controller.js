myApp.controller('MasterLineImportController', ['MasterLineImportService', '$scope', '$http',
	function(MasterLineImportService, $scope, $http) {

		$scope.importMasterline = function() {
			MasterLineImportService.importMasterline($scope);
		}

	}]);
