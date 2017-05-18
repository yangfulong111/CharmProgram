myApp.factory('ConfigrationService', ['$http', function($http) {
	return new ConfigrationService($http);
}]);

function ConfigrationService(http) {
		
	this.saveFiles = function(scope) {
		http({
			method : 'POST',
			url : "configration/saveThreshold",
			data : {
				threshold : scope.threshold
			},
		}).success(function(data, status, headers, config) {
			console.log("success.status" + status + "..headers:" + headers + "..data:" + data.resultCode);
			if (data.resultCode == '200') {
				alert('Save success!');
			} else if (data.resultCode == '500') {
				alert('Save failed!Threshold already exists!');
			}
		}).error(function(data, status, headers, config) {
			console.log("failed.status..." + status + "....");
		})
	};
};