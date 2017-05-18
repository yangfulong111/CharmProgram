myApp.factory('AECutManualOrderService', ['$http', function($http) {
	return new AECutManualOrderService($http);
}]);

function AECutManualOrderService(http) {

	// 查询订单
	this.queryOrder = function(scope) {
		console.log("#############test.start######service#################");
		http({
			method : 'POST',
			url : "aeOrderAdjust/queryall",
			data : {
				pono : scope.pono,
				shipto : scope.shipto,
				soldto : scope.soldto,
				sku : scope.sku,
				pageNo : scope.page.pageNo,
				pagesize : scope.page.pageSize
			}
		})
			.success(
				function(result) {
					console.log("..result:" + result.resultCode);
					if (result.resultData == null) {
						scope.gridOptions.totalItems = 0;
						scope.gridOptions.data = [];
					} else {
						scope.gridOptions.totalItems = result.resultData.total;
						scope.gridOptions.subGridOptions = result.resultData.result;
							scope.gridOptions.expandableRowTemplate = 'mainpage/order-capture/ae-cut-manual-order/template/expandableQTYTemplate.html',
							data = result.resultData.result;
						// 循环外层得到每一行外层的内层所有行数据
						for (i = 0; i < data.length; i++) {
							var datai = data[i];
							console.log("datai...." + datai);
							var detail = datai.detail;
							console.log("detail...." + detail);

							data[i].subGridOptions = {

								columnDefs : [{
									name : "SKU",// 显示的列名
									field : "SKU"// 显示的列值
								}, {
									name : "CRD",
									field : "CRD",
									enableCellEdit : false
								}, {
									name : "Category",
									field : "Category",
									enableCellEdit : false
								}, {
									name : "Division",
									field : "Division",
									enableCellEdit : false
								}, {
									name : "SIZE",
									field : "Size",
									enableCellEdit : false
								}, {
									name : "Total QTY",
									field : "Total QTY",
									enableCellEdit : false
								}, {
									name : "QTY",
									// field : "QTY",
									enableCellEdit : true

								}],
								// // 第二层第一行data
								data : data[i].detail

							}
							// queryQTY(data[i].detail, scope);
						}// end for
						scope.gridOptions.data = result.resultData.result;// 整个表格的列表
					}

				}).error(function(data, status) {
				alert("fail");
			})
	};

	/**
	 * 导出所有详情
	 */
	this.exportAeOrder = function(scope) {
		console.log("#############test.start######service#################");
		window.location = "aeOrderAdjust/exportAeOrder"
		// http({
		// method : 'POST',
		// url : "aeOrderAdjust/exportAeOrder",
		// }).success(function(data) {
		// console.log("success.status" + status + "..headers:" + headers +
		// "..data:" + data.resultCode);
		//
		// }).error(function(data, status) {
		// alert("fail");
		// })
	};
	/**
	 * 导入修改过的文件
	 */
	this.uploadFile = function(scope, files) {
		console.log("#############uploadFile.start######service#################");
		scope.msg = false;
		http({
			method : 'POST',
			url : "aeOrderAdjust/uploadFile",
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
					formData.append("myfiles", data.files[i]);
				}
				return formData;
			}
		}).success(function(data, status, headers, config) {
			console.log("success.status" + status + "..headers:" + headers + "..data:" + data.resultCode);
			scope.visibleMsg = false;
			scope.mes = data.resultMsg;

		}).error(function(data, status, headers, config) {
			console.log("failed.status..." + status + "....");
		})
		console.log("#############uploadFile.end######service#################");
	};
};
