myApp.factory('doorAnalysisService', ['$http', function($http) {
	return new doorAnalysisService($http);
}]);

function doorAnalysisService(http) {

	this.uploadFiles = function(scope) {
		http({
			method : 'POST',
			url : "door/uploaddoor",
			headers : {
				'Content-Type' : undefined
			},
			data : {
				flag : "0",
				masterDate : "aoc",
				files : scope.files
			},
			transformRequest : function(data) {
				var formData = new FormData();
				for (var i = 0; i < data.files.length; i++) {
					formData.append("files", data.files[i]);
				}
				return formData;
			}
		}).success(function(data, status, headers, config) {
			console.log("success.status" + status + "..headers:" + headers + "..data:" + data.resultCode);
			if (data.resultCode == '200') {
				alert('Upload success!');
			} else if (data.resultCode == '501') {
				var json = data.resultData;
				for ( var i in json) {
					scope.errorMessages.push(i);
				}
			} else if (data.resultCode == '500') {
				alert('Upload failed!');
			}
		}).error(function(data, status, headers, config) {
			console.log("failed.status..." + status + "....");
		})
	};

	this.queryAll = function(scope) {
		http({
			method : 'POST',
			url : "door/queryall",
			data : {
				tableName : 'door',
				type : 'door',
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
				scope.gridOptions.data = data.resultData['doorData'];
				scope.NullPrompt = true;
			}
		}).error(function(data, status, headers, config) {
			console.log("failed.status..." + status + "....");
		})
	};
};
