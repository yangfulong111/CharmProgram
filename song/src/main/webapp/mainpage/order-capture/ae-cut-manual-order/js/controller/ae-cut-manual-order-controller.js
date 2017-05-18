myApp.controller('AECutManualOrderController', ['AECutManualOrderService', '$scope', '$http',
	function(AECutManualOrderService, $scope, $http) {
		console.log("#############test.start######controller#################");
		$scope.visible = true;
		$scope.importVisible = true;
		$scope.importSelect = false;
		$scope.visibleMsg = true;
		$scope.gridShow = false;
		$scope.gridOptions = {};
		// 表示该页面的控件可设置可编辑
		$scope.gridOptions.enableCellEditOnFocus = true;
		/**
		 * 导出所有详情
		 */
		$scope.exportAeOrder = function() {
			AECutManualOrderService.exportAeOrder($scope);
		};

		/**
		 * 分页查询
		 */
		$scope.queryAll = function() {
			console.log("#############queryAll.start######AECutManualOrderController.controller#################");
			AECutManualOrderService.queryOrder($scope);
			$scope.gridShow = true;
		};
		$scope.page = {
			pageNo : 1,
			pageSize : 3
		};
		$scope.gridOptions = {
			paginationPageSizes : [3, 5, 50, 100],
			paginationPageSize : 3,
			expandableRowTemplate : 'mainpage/order-capture/ae-cut-manual-order/template/expandableRowTemplate.html',
			enableHorizontalScrollbar : 1, // 水平滚动条是否显示
			enableVerticalScrollbar : 1, // 垂直滚动条是否显示
			expandableRowHeight : 150,
			enableColumnResizing : true, // 列可拖动
			columnDefs : [{
				name : 'PO Number1',
				displayName : 'PO_No',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.PO
					Number1;
				}
			}, {
				name : 'Ship_to',
				displayName : 'Shipto',
				enableCellEdit : false
			}, {
				name : 'SOLD_TO',
				displayName : 'Soldto',
				enableCellEdit : false
			}, {
				name : 'Region',
				displayName : 'Region',
				enableCellEdit : false
			}, {
				name : 'Area',
				displayName : 'Area',
				enableCellEdit : false
			}, {
				name : 'Regional Comments',
				displayName : 'Regional Comments',
				enableCellEdit : false
			}, {
				name : 'Manual_Order_Type',
				displayName : 'Manual_Order_Type',
				enableCellEdit : false
			}, {
				name : 'POS_ID',
				displayName : 'POS_ID',
				enableCellEdit : false
			}, {
				name : 'POS_Name',
				displayName : 'POS_Name',
				enableCellEdit : true
			}],
			onRegisterApi : function(gridApi) {
				$scope.gridApi = gridApi;
				gridApi.pagination.on.paginationChanged($scope, function(newPage, newPageSize) {
					$scope.page.pageNo = newPage;
					$scope.page.pageSize = newPageSize;
					AECutManualOrderService.queryOrder($scope);
				});

			}
		}
	}]);
