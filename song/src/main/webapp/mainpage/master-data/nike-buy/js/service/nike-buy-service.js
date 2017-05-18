/**
 * NkBuyMainService
 */
myApp.factory('nikeBuyService', ['$resource', '$http', function($resource, $http) {
	return new nikeBuyService($resource, $http);
}]);

function nikeBuyService(resource, http) {
	/**
	 * 生成nike buy
	 */
	this.exportExcel = function(scope) {
		console.log("...........nikeBuyService.exportExcel.start...........");
		http({
			method : 'GET',
			url : "nikebuy/exportNikeBuyToExcel",
			headers : {
				'Content-Type' : undefined
			},

		}).success(function(data, status, headers, config) {
			console.log("...........nikeBuyService.exportExcel.success.data..........." + data.resultCode);
			var resultCode = data.resultCode;
			if (resultCode === "200") {
				window.location = "nikebuy/exportNikeBuyToLocal"
				scope.sendToSFTP = false;
			} else {
				scope.visible = false;

				scope.mes = data.resultMsg;
			}

		}).error(function(data, status, headers, config) {
			console.log("...........nikeBuyService.exportExcel.error...........");
		})

		console.log("...........nikeBuyService.exportExcel.end...........");
	};

	/**
	 * 发送nike buy到ftp
	 */
	this.sendNikeBuyToSTP = function(scope) {
		console.log("...........nikeBuyService.sendNikeBuyToSTP.start...........");

		http({
			method : 'GET',
			url : "nikebuy/sendNikeBuyToSTP",
			headers : {
				'Content-Type' : undefined
			},

		}).success(function(data, status, headers, config) {
			console.log("...........nikeBuyService.sendNikeBuyToSTP.data..........." + data.resultCode);
			var resultCode = data.resultCode;
			// if (resultCode === "200") {
			// //scope.sendToSFTP = false;
			// } else {
			// scope.visible = false;
			//
			// scope.mes = data.resultMsg;
			// }
			scope.mes = data.resultMsg;
		}).error(function(data, status, headers, config) {
			console.log("...........nikeBuyService.sendNikeBuyToSTP.error...........");
		})

		console.log("...........nikeBuyService.sendNikeBuyToSTP.end...........");
	};

};
