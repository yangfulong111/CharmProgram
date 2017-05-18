'use strict';

myApp.controller('nikeBuyCtroller', ['nikeBuyService', '$scope', '$http', function(nikeBuyService, $scope, $http) {
	$scope.visible = true;
	$scope.sendToSFTP = true;

	// 生成nike buy
	$scope.exportExcel = function() {
		console.log("...........nikeBuyCtroller.exportExcel.start............");
		nikeBuyService.exportExcel($scope);// 导出查询条件范围内容的数据
		console.log("...........nikeBuyCtroller.exportExcel.end..............");
	}
	// 发送nike buy到sftp
	$scope.sendNikeBuyToSTP = function() {
		console.log("...........nikeBuyCtroller.exportExcel.start............");
		nikeBuyService.sendNikeBuyToSTP($scope);// 导出查询条件范围内容的数据
		console.log("...........nikeBuyCtroller.exportExcel.end..............");
	}
}]);
