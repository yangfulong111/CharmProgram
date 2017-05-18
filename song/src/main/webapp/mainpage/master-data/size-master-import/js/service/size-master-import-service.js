myApp.factory('sizeMasterImportService', ['$http', function($http) {
	return new sizeMasterImportService($http);
}]);

function sizeMasterImportService(http) {
	this.uploadFiles = function(scope, files) {
		http({
			method : 'POST',
			url : "SizeMaster/uploadSizeMaster",
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
				var message=data.resultMsg;
				alert(message);
			} else if(data.resultCode=='500'){
				var message=data.resultMsg;
				alert(message);
			}else if(data.resultCode=='501'){
				var message=data.resultMsg;
				alert(message);
			}
		}).error(function(data, status, headers, config) {
			console.log("failed.status..." + status + "....");
		})
	};
};