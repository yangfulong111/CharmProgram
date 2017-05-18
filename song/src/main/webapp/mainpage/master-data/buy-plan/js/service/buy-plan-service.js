/**
 * NkBuyMainService
 */
myApp.factory('buyPlanService', ['$resource', '$http', function($resource, $http) {
	return new buyPlanService($resource, $http);
}]);

function buyPlanService(resource, http) {

	/**
	 * import buy plan
	 */

	this.uploadBuyPlan = function(scope, files) {
		console.log("#############uploadBuyPlan.start######service#################");
		http({
			method : 'POST',
			url : "buyPlan/uploadBuyPlan",
			headers : {
				'Content-Type' : undefined
			},
			data : {
				flag : "0",
				files : scope.files
			},
			transformRequest : function(data) {
				var formData = new FormData();
				formData.append("flag", angular.toJson(data.flag));
				for (var i = 0; i < data.files.length; i++) {
					formData.append("files", data.files[i]);
				}
				return formData;
			}
		}).success(
			function(data, status, headers, config) {
				console.log("success.status" + status + "..headers:" + headers + "..data:" + data.resultCode + "datames"+data.resultMsg
					+ files.length);
				var resultCode = data.resultCode;

				// 返回500的情况，非catch捕获到的500异常，说明excel数据校验有空的情况
				if (resultCode === "501") {
					scope.visible = false;
					scope.data = data;
				} else {// 200 500

					scope.visibleMsg = false;
					scope.visible = true;
				}
				scope.removeFile(files[0]);
				scope.result = false;
				scope.visibleMsg=false;
				scope.mes = data.resultMsg;

			}).error(function(data, status, headers, config) {
			console.log("failed.status..." + status + "....");
			// 所有榀预知异常在success中捕获，不在此处再次进行捕获
			if (status === 404) {
				console.log("1");
				scope.visibleMsg = false;
				scope.visible = true;
				scope.mes = "404 File upload failed";
			} else {
				console.log("2");
			}
			scope.result = false;
		})
		console.log("#############uploadBuyPlan.end######service#################");
	};

};
