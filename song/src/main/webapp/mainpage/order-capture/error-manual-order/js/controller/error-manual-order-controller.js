myApp.controller('ErrorManualOrderController', ['ErrorManualOrderService', '$scope', '$http',
	function(ErrorManualOrderService, $scope, $http) {
		// grid隐藏
		$scope.gridshow = false;

		$scope.errorMessages = [];

		$scope.queryRequire = '';
		// 修改的id获取
		$scope.selectArray = [];

		$scope.page = {
			pageNo : 1,
			pageSize : 30
		};

		$scope.gridOptions = {
			paginationPageSizes : [30, 40, 50], // 每页显示个数可选项
			paginationPageSize : 30, // 每页显示个数
			enableColumnMenus : false, // 是否显示列头部菜单按钮
			rowEditWaitInterval : -1, //
			enableHorizontalScrollbar : 0, // 水平滚动条是否显示
			enableVerticalScrollbar : 0, // 垂直滚动条是否显示
			useExternalPagination : true, // 是否使用分页按钮
			useExternalSorting : true, // 是否使用自定义排序规则
			enableColumnResizing : true, // 列可拖动
			columnDefs : [{
				name : 'SKU_NO',
				displayName : 'SKU',
				enableCellEdit : false,
				enableSorting : false,
				cellTooltip : function(row) {
					return row.entity.SKU_NO;
				}
			}, {
				name : 'CRD',
				displayName : 'CRD',
				enableSorting : false,
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.CRD;
				},
			}, {
				name : 'Category',
				displayName : 'Category',
				enableSorting : false,
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.Category;
				},
			}, {
				name : 'Division',
				displayName : 'Division',
				enableSorting : false,
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.Division;
				},
			}, {
				name : 'QTY',
				displayName : 'QTY',
				enableSorting : false,
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.QTY;
				},
			}, {
				name : 'Amount',
				displayName : 'Amount',
				enableSorting : false,
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.Amount;
				},
			}, {
				name : 'PO_Count',
				displayName : 'PO Count',
				enableSorting : false,
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.PO_Count;
				},
			}, {
				name : 'Error_Type',
				displayName : 'Error Type',
				enableSorting : false,
				enableCellEdit : false,
				cellTooltip : function(row) {
					return row.entity.Error_Type;
				},
			}, {
				name : 'Comments',
				displayName : 'Comments',
				enableSorting : false,
				enableCellEdit : true,
			}],
			onRegisterApi : function(gridApi) {
				$scope.gridApi = gridApi;
				// 分页
				gridApi.pagination.on.paginationChanged($scope, function(newPageNo, newPageSize) {
					$scope.page.pageNo = newPageNo;
					$scope.page.pageSize = newPageSize;
				});
				// 单行选中
				$scope.gridApi.selection.on.rowSelectionChanged($scope, function(row) {
					if (row.isSelected) {
						$scope.selectArray.push(row.entity.id);
					} else {
						for (var i = 0; i < $scope.selectArray.length; i++) {
							if (row.entity.id == $scope.selectArray[i]) {
								$scope.selectArray.splice(i, 1);
							}
						}
					}
				});
				// 多行选中
				$scope.gridApi.selection.on.rowSelectionChangedBatch($scope, function(rows) {
					for (var j = 0; j < rows.length; j++) {
						var row = rows[j];
						if (row.isSelected) {
							$scope.selectArray.push(row.entity.id);
						} else {
							for (var i = 0; i < $scope.selectArray.length; i++) {
								if (row.entity.id == $scope.selectArray[i]) {
									$scope.selectArray.splice(i, 1);
								}
							}
						}
					}
				});
			}
		};

		$scope.searchList = function() {
			ErrorManualOrderService.querySKU($scope);
		}
		$scope.ecportExcel = function() {
			ErrorManualOrderService.exportToExcel($scope);
		}
		$scope.adoptError = function() {
			ErrorManualOrderService.adoptError($scope);
			// $scope.gridApi.selection.clearSelectedRows();
		}
		$scope.exportProductTest = function() {
			ErrorManualOrderService.exportProduct($scope);
		}

	}]);
