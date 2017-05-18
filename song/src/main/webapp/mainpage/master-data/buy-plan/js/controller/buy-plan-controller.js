myApp.controller('buyPlanController', ['buyPlanService', '$scope', '$http', function(buyPlanService, $scope, $http) {
	/**
	 * 进入nkBuy主页面
	 */
	$scope.titleText = "buy plan";
	$scope.visible = true;
	$scope.result = true;
	$scope.visibleMsg = true;

	/**
	 * 导入buy plan
	 */
	$scope.uploadBuyPlan = function(files) {
		console.log("#############uploadBuyPlan.start######controller#################");
		// 每一次点击上传，都将上一次的上传结果清空
		$scope.result = true;
		$scope.visibleMsg = true;
		$scope.visible = true;
		$scope.mes = "";

		var flg = "0";
		var ids = {};
		ids.flag = "0";
		buyPlanService.uploadBuyPlan($scope, files);// 导出查询条件范围内容的数据
		console.log("#############uploadBuyPlan.end######controller#################");
	};

	$scope.hideresult = function() {
		$scope.visibleMsg = true;

	}
}]);
