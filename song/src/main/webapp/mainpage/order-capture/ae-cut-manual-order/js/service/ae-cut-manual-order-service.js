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
				function(data) {
					console.log("..data:" + data.resultCode);
					if (data.resultData == null) {
						scope.gridOptions.totalItems = 0;
						scope.gridOptions.data = [];
					} else {
						scope.gridOptions.totalItems = data.resultData.total;
						scope.gridOptions.subGridOptions = data.resultData.result;

						data = data.resultData.result;
						for (i = 0; i < data.length; i++) {
							data[i].subGridOptions = {
								enableHorizontalScrollbar : 1, // 水平滚动条是否显示
								enableVerticalScrollbar : 1, // 垂直滚动条是否显示
								expandableRowHeight : 5000,
								enableColumnResizing : true, // 列可拖动
								columnDefs : [
									{
										name : "Division",
										field : "division",
										enableCellEdit : false
									},
									{
										name : "SKU",
										field : "Material"
									},
									{
										name : "CRD",
										field : "CRD",
										enableCellEdit : false
									},
									{
										name : "Category",
										field : "Category",
										enableCellEdit : false
									},
									{
										name : "SIZE",
										field : "Size",
										enableCellEdit : false
									},
									{
										name : "Total QTY",
										field : "qtyTotal",
										enableCellEdit : false
									},
									{
										name : 'QTY',
										// enableCellEdit : false,
										width : '30%',
										// cellTemplate : '<div ng-repeat="item
										// in row.entity.QTY"
										// >{{item.qtySizi}}:<input
										// style="width:50px;height:30px;"
										// type="text" ng-model="{{item.qty}}"
										// value="{{item.qty}}"/></div>'
										cellTemplate : '<span ng-repeat="item in row.entity.QTY" >{{item.qtySizi}}:<input type="text" style="width:50px;height:30px;" ng-click="showMe(row.entity) style="width:50px;height:30px;disabled:false" ng-value="{{item.qty}}"/></span>',
									}],
								data : data[i].detail
							}
							// 表示该页面的控件可设置可编辑
							data[i].subGridOptions.enableCellEditOnFocus = true;
						}
						scope.gridOptions.data = data;
					}

				}).error(function(data, status) {
				alert("fail");
			})
	};
	this.showMe = function(data) {
		alert(2)
		// window
		// .open('mainpage/order-capture/ae-cut-manual-order/template/ae-cut-manual-qty-order.html',
		// 'height=600, width=800, top=60, left=200,
		// toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,
		// status=no');
	}

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
