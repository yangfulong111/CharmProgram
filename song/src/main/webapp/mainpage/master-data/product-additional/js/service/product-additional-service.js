myApp.factory('productAdditionalService', ['$http', function($http) {
	return new productAdditionalService($http);
}]);

function productAdditionalService(http) {
	this.uploadFiles = function(scope) {
		http({
			method : 'POST',
			url : 'productadditional/uploadproductadditional',
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
			} else {
				alert('Upload failed!');
			}
		}).error(function(data, status, headers, config) {
			console.log("failed.status..." + status + "....");
		})

	}

}