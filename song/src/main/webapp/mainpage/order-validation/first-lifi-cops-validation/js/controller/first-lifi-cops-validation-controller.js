myApp.controller('FirstLifiCopsValidationController', ['FirstLifiCopsValidationService', '$scope', '$http',
	'$location', function(FirstLifiCopsValidationService, $scope, $http, $location) {

		$scope.shiptoError = function() {
			$location.path("/shipto-error")
		}

		$scope.exportReport = function(str) {
			FirstLifiCopsValidationService.exportReport(str, $scope);
		};

		FirstLifiCopsValidationService.showConfluence($scope);
	}]);
