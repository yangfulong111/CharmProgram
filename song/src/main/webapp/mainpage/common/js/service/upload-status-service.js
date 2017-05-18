myApp.factory('uploadStatusService', ['$http', function($http) {
	return new uploadStatusService($http);
}]);

function uploadStatusService(http) {
	this.addFile = function(scope, reportName) {
		http({
			method : 'POST',
			url : "uploadstatus/savestatus",
			data : {
				reportName : reportName
			}
		}).success(function(data, status, headers, config) {
			console.log("success.status" + status + "..headers:" + headers + "..data:" + data.resultCode);
			if (data.resultCode == '200') {
				scope.gridOptions.data.push(data.resultData)
			} else if (data.resultCode == '501') {
				var json = data.resultData;
				for ( var i in json) {
					scope.errorMessages.push(i);
				}
			} else if (data.resultCode == '500') {
				alert('Add report failed!');
			}
		}).error(function(data, status, headers, config) {
			console.log("failed.status..." + status + "....");
		})
	};

	this.checkStatus = function(scope, condition, searchBy) {
		http({
			method : 'POST',
			url : "uploadstatus/checkStatus",
			data : {
				"searchBy" : searchBy,
				"condition" : condition
			},
		}).success(function(data, status, headers, config) {
			console.log("success.status" + status + "..headers:" + headers + "..data:" + data.resultCode);
			if (data.resultCode == '200') {
				if (data.resultData == null) {
					scope.gridOptions.totalItems = 0;
					scope.gridOptions.data = [];
					scope.NullPrompt = false;
				} else {
					scope.gridOptions.data = data.resultData;
				}
			} else if (data.resultCode == '501') {
				alert(data.resultMsg);
			} else if (data.resultCode == '500') {
				alert('Check report failed!');
			}
		}).error(function(data, status, headers, config) {
			console.log("failed.status..." + status + "....");
		})
	};

	this.updateThis = function(scope, entity) {
		entity.uploadStatus = "success"
		http({
			method : 'POST',
			url : "uploadstatus/updatestatus",
			data : {
				id : entity.id
			}
		}).success(function(data, status, headers, config) {
			console.log("success.status" + status + "..headers:" + headers + "..data:" + data.resultCode);
			if (data.resultCode == '200') {
				entity.currentStatus = data.resultData['currentStatus'];
				entity.UPDATE_TIME = data.resultData['UPDATE_TIME'];
			} else if (data.resultCode == '501') {
				var json = data.resultData;
				for ( var i in json) {
					scope.errorMessages.push(i);
				}
			} else if (data.resultCode == '500') {
				alert('Check report failed!');
			}
		}).error(function(data, status, headers, config) {
			console.log("failed.status..." + status + "....");
		})
	};

	this.queryAll = function(scope) {
		http({
			method : 'POST',
			url : "uploadstatus/queryAll",
			data : {
				reportName : "reportName"
			}
		}).success(function(data, status, headers, config) {
			console.log("success.status" + status + "..headers:" + headers + "..data:" + data.resultCode);
			if (data.resultCode == '200') {
				if (data.resultData == null) {
					scope.gridOptions.totalItems = 0;
					scope.gridOptions.data = [];
					scope.NullPrompt = false;
				} else {
					scope.gridOptions.data = data.resultData;
				}
			} else if (data.resultCode == '501') {
				var json = data.resultData;
				for ( var i in json) {
					scope.errorMessages.push(i);
				}
			} else if (data.resultCode == '500') {
				alert('Query failed!');
			}
		}).error(function(data, status, headers, config) {
			console.log("failed.status..." + status + "....");
		})
	};

};
