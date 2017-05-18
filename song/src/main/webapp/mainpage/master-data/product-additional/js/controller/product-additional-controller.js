myApp.controller('productAdditionalController', ['productAdditionalService', '$scope', '$http',
	function(productAdditionalService, $scope, $http) {

		$scope.upload = function() {
			productAdditionalService.uploadFiles($scope);
		}

	}]);
