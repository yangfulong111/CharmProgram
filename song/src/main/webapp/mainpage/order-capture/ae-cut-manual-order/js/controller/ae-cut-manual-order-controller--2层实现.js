myApp.controller('AECutManualOrderController', ['AECutManualOrderService', '$scope', '$http',
	function(AECutManualOrderService, $scope, $http) {
		console.log("#############test.start######controller#################");
		$scope.visible = true;
		$scope.importVisible = true;
		$scope.importSelect = false;
		$scope.visibleMsg = true;
		$scope.gridShow = false;
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
			enableCellEditOnFocus : true,
			paginationPageSizes : [3, 5, 50, 100],
			paginationPageSize : 3,
			enableColumnMenus : false,
			rowEditWaitInterval : -1,
			enableHorizontalScrollbar : 0,
			enableVerticalScrollbar : 0,
			useExternalPagination : true,
			useExternalSorting : true,
			expandableRowTemplate : 'mainpage/order-capture/ae-cut-manual-order/template/expandableRowTemplate.html',
			expandableRowHeight : 150,
			columnDefs : [{
				name : 'PO_No',
				displayName : 'PO_No',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.PO_No;
				}
			}, {
				name : 'Shipto',
				displayName : 'Shipto',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.Shipto;
				}
			}, {
				name : 'Soldto',
				displayName : 'Soldto',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.Soldto;
				}
			}, {
				name : 'Region',
				displayName : 'Region',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.Region;
				}
			}, {
				name : 'Area',
				displayName : 'Area',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.Area;
				}
			}, {
				name : 'Regional Comments',
				displayName : 'Regional Comments',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.Regional_Comments;
				}
			}, {
				name : 'Manual_Order_Type',
				displayName : 'Manual_Order_Type',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.Manual_Order_Type;
				}
			}, {
				name : 'POS_ID',
				displayName : 'POS_ID',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.POS_ID;
				}
			}, {
				name : 'POS_Name',
				displayName : 'POS_Name',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.POS_Name;
				}
			}, {
				name : 'A',
				displayName : 'A',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.POS_Name;
				}
			}, {
				name : 'B',
				displayName : 'B',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.POS_Name;
				}
			}, {
				name : 'C',
				displayName : 'C',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.POS_Name;
				}
			}, {
				name : 'D',
				displayName : 'D',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.POS_Name;
				}
			}, {
				name : 'E',
				displayName : 'E',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.POS_Name;
				}
			}, {
				name : 'F',
				displayName : 'F',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.POS_Name;
				}
			}, {
				name : 'G',
				displayName : 'G',
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.POS_Name;
				}
			}],

			onRegisterApi : function(gridApi) {
				$scope.gridApi = gridApi;
				gridApi.pagination.on.paginationChanged($scope, function(newPage, newPageSize) {
					$scope.page.pageNo = newPage;
					$scope.page.pageSize = newPageSize;
					AECutManualOrderService.queryOrder($scope);
				});

			}
		};
	}]);
