myApp.controller('QAPAnalysisController', ['QAPAnalysisService', '$scope', '$http',
	function(QAPAnalysisService, $scope, $http) {

		$scope.uploadQAP = function() {
			QAPAnalysisService.uploadFiles($scope);
		};
	}]);
