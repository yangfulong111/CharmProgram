'use strict';

myApp.controller('customerListCtroller', ['customerListService', '$scope', '$http',
	function(customerListService, $scope, $http) {
		/**
		 * 进入nkBuy主页面
		 */
		$scope.titleText = "customer list";
		$scope.visible = true;// 进入主页面时，错误信息的div隐藏
		$scope.result = true;
		$scope.visibleMsg = true;

		/**
		 * 导入ship to
		 */
		$scope.uploadShipTo = function(files) {
			console.log("#############uploadShipTo.start######controller#################");
			// 每一次点击上传，都将上一次的上传结果清空
			$scope.result = true;
			$scope.visibleMsg = true;
			$scope.visible = true;
			$scope.mes = "";

			var flg = "0";
			var ids = {};
			ids.flag = "0";
			customerListService.uploadShipTo($scope, files);// 导出查询条件范围内容的数据
			console.log("#############uploadShipTo.end######controller#################");
		};

	}]);
