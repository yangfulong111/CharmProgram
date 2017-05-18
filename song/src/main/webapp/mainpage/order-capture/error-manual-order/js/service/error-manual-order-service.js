myApp.factory('ErrorManualOrderService', ['$http', function($http) {
	return new ErrorManualOrderService($http);
}]);

function ErrorManualOrderService(http) {

	this.querySKU = function(scope) {
		if (scope.queryRequire) {

		} else {
			scope.queryRequire = null;
		}
		http({
			method : 'POST',
			url : "errormanualorder/querybyskuno",
			data : {
				indexName : 'skutest',
				typeName : 'skutest',
				pageNo : scope.page.pageNo,
				pagesize : scope.page.pageSize,
				require : scope.queryRequire
			}
		}).success(function(data, status, headers, config) {

			if (data.resultData['total'] > 0) {
				scope.gridOptions.totalItems = data.resultData['total'];
				scope.gridOptions.data = data.resultData['skuData'];
				scope.NullPrompt = true;
				scope.gridshow = true;
				console.log("success.status" + status + "..headers:" + headers + "..data:" + data.resultCode);
			} else {
				scope.gridOptions.totalItems = 0;
				scope.gridOptions.data = [];
				scope.NullPrompt = false;
				scope.gridshow = false;
				console.log("success, but no data return");
				alert("result: " + data.resultData['total'] + " ,please change condition.");
			}
		}).error(function(data, status, headers, config) {
			console.log("failed.status..." + status + "....");
		})
	};

	this.exportToExcel = function(scope) {
		http({
			method : 'POST',
			url : "errormanualorder/errororderexport",
		}).success(function(data, status, headers, config) {
			console.log(".....success......");
			window.location = "errormanualorder/errororderexportlocal";
		}).error(function(data, status, headers, config) {
			console.log(".....failed.....");
		})
	}

	this.adoptError = function(scope) {
		http({
			method : 'POST',
			url : "errormanualorder/updateerrororder",
			data : scope.selectArray,
		}).success(function(data, status, headers, config) {
			console.log(".....success......");
		}).error(function(data, status, headers, config) {
			console.log(".....failed.....");
		})
	}

	this.exportProduct = function(scope) {
		http({
			method : 'POST',
			url : "productexport/export",
		}).success(function(data, status, headers, config) {
			console.log(".....success......");
		}).error(function(data, status, headers, config) {
			console.log(".....failed.....");
		})
	}

};
