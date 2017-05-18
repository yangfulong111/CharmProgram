myApp.controller('ShiptoErrorController', ['FirstLifiCopsValidationService', '$scope', '$http', '$location',
	function(FirstLifiCopsValidationService, $scope, $http, $location) {

		$scope.queryRequire = '';

		$scope.TotalConfirm = '';

		$scope.gridShow = false;

		$scope.page = {
			pageNo : 1,
			pageSize : 30
		};

		$scope.skuError = function() {
			$location.path("/sku-error")
		}

		$scope.exportReport = function(str) {
			FirstLifiCopsValidationService.exportReport(str, $scope);
		};

		$scope.queryErrorByPONO = function(str) {
			$scope.statusParameter = str;
			$scope.gridShow = true;
			FirstLifiCopsValidationService.queryErrorByPONO(str, $scope);
		};

		$scope.gridOptions = {
			paginationPageSizes : [30, 40, 50],
			paginationPageSize : 30,
			enableColumnMenus : false,
			rowEditWaitInterval : -1,
			enableHorizontalScrollbar : 0,
			enableVerticalScrollbar : 0,
			useExternalPagination : true,
			useExternalSorting : true,
			columnDefs : [{
				name : 'PO_No',
				displayName : "PO_No",
				enableCellEdit : false,
				enableSorting : false
			}, {
				name : 'QTY',
				displayName : "QTY",
				enableCellEdit : false,
				enableSorting : false
			}, {
				name : 'Error Type',
				displayName : "Error Type",
				enableCellEdit : false,
				enableSorting : false
			}, {
				name : 'Shipto',
				displayName : "Shipto",
				enableCellEdit : false,
				enableSorting : false
			}, ],
			onRegisterApi : function(gridApi) {
				$scope.gridApi = gridApi;
				gridApi.pagination.on.paginationChanged($scope, function(newPageNo, newPageSize) {
					$scope.page.pageNo = newPageNo;
					$scope.page.pageSize = newPageSize;
					FirstLifiCopsValidationService.queryErrorByPONO($scope.statusParameter, $scope);
				});
			}
		};
	}]);
