myApp.controller('SkuErrorController', ['FirstLifiCopsValidationService', '$scope', '$http', '$location',
	function(FirstLifiCopsValidationService, $scope, $http, $location) {

		$scope.queryRequire = '';

		$scope.TotalConfirm = '';

		$scope.gridShow = false;

		$scope.page = {
			pageNo : 1,
			pageSize : 30
		};

		$scope.shiptoError = function() {
			$location.path("/shipto-error")
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
				name : 'CLC Door Code',
				displayName : "CLC Door Code",
				enableCellEdit : false,
				enableSorting : false
			}, {
				name : 'SOLDTO',
				displayName : "SOLDTO",
				enableCellEdit : false,
				enableSorting : false
			}, {
				name : 'SHIP_TO',
				displayName : "SHIP_TO",
				enableCellEdit : false,
				enableSorting : false
			}, {
				name : 'POSTID',
				displayName : "POSTID",
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
