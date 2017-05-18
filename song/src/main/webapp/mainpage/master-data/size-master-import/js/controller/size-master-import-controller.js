myApp.controller('sizeMasterImportController', ['sizeMasterImportService', '$scope', '$http',
	function(sizeMasterImportService, $scope, $http) {
		$scope.upload = function(files) {
			sizeMasterImportService.uploadFiles($scope, files);
		};
	}]);
