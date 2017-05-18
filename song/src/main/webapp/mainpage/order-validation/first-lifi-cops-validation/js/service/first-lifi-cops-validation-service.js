myApp.factory('FirstLifiCopsValidationService', ['$http', function($http) {
	return new FirstLifiCopsValidationService($http);
}]);

function FirstLifiCopsValidationService(http) {

	this.exportReport = function(str, scope) {
		http({
			method : 'POST',
			url : "COPSValidation/exportReport",
			data : str
		}).success(function(data, status, headers, config) {
			console.log("...........success...........");
			window.location = "COPSValidation/exportReportD";
		}).error(function(data, status, headers, config) {
			console.log("...........error...........");
		})
	}

	this.showConfluence = function(scope) {
		http({
			method : 'POST',
			url : "COPSValidation/showConfluence"
		}).success(function(data, status, headers, config) {
			console.log("...........success...........");
			scope.TotalConfirm = data.resultData['total'];
		}).error(function(data, status, headers, config) {
			console.log("...........error...........");
		})
	}

	this.queryErrorByPONO = function(str, scope) {
		http({
			method : 'POST',
			url : "COPSValidation/showError",
			data : {
				str : str,
				pageNo : scope.page.pageNo,
				pageSize : scope.page.pageSize,
				require : scope.queryRequire
			}
		}).success(function(data, status, headers, config) {
			console.log("success.status" + status + "..headers:" + headers + "..data:" + data.resultCode);
			if (data.resultData == null) {
				scope.gridOptions.totalItems = 0;
				scope.gridOptions.data = [];
				scope.NullPrompt = false;
			} else {
				// scope.gridOptions.totalItems = data.resultData.length;
				scope.gridOptions.totalItems = data.resultData['total'];
				scope.gridOptions.data = data.resultData['result'];
				scope.NullPrompt = true;
			}
		}).error(function(data, status, headers, config) {
			console.log("failed.status..." + status + "....");
		})
	};

};

