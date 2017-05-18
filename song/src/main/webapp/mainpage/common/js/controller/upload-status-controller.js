myApp.controller('uploadStatusController', ['uploadStatusService', '$scope', '$http', 'uiGridConstants',
	function(uploadStatusService, $scope, $http, uiGridConstants) {
		$scope.gridOptions = {
			paginationPageSizes : [10, 30, 50],
			paginationPageSize : 10,
			enableColumnMenus : false,
			rowEditWaitInterval : -1,
			// useExternalSorting : true,
			enableSorting : true,
			// onRegisterApi : function(gridApi) {
			// $scope.gridApi = gridApi;
			// gridApi.pagination.on.paginationChanged($scope,
			// function(newPageNo, newPageSize) {
			// $scope.page.pageNo = newPageNo;
			// $scope.page.pageSize = newPageSize;
			// doorAnalysisService.queryAll($scope);
			// });
			// },
			columnDefs : [{
				name : 'reportName',
				displayName : "Report Name",
				enableCellEdit : false,
				enableSorting : false
			}, {
				name : 'currentStatus',
				displayName : "Upload Status",
				enableCellEdit : false,
				enableSorting : false
			}, {
				name : 'CREATE_TIME',
				displayName : "Begin Time",
				enableCellEdit : false,
				sort : {
					direction : uiGridConstants.DESC,
					priority : 0
				},
				suppressRemoveSort : true
			}, {
				name : 'UPDATE_TIME',
				displayName : "End Time",
				enableCellEdit : false,
				enableSorting : false
			}, {
				name : 'author',
				displayName : "Author",
				enableCellEdit : false,
				enableSorting : false
			},
			// {
			// name : 'id',
			// displayName : "File ID",
			// enableCellEdit : false
			// },
			// {
			// name : 'edit',
			// displayName : "Edit",
			// cellTemplate : '<button class="btn btn-success"
			// ng-click="grid.appScope.updateThis(row.entity)">update</button>'
			// },
			],

		};
		uploadStatusService.queryAll($scope);

		$scope.checkStatus = function() {
			condition = $scope.condition;
			searchBy = $scope.searchBy;
			if (condition != null && condition != "") {
				uploadStatusService.checkStatus($scope, condition, searchBy);
			} else {
				uploadStatusService.queryAll($scope);
			}
		};

		$scope.queryAll = function() {
			uploadStatusService.queryAll($scope);
		};

		$scope.searchBy = "reportName"
		$scope.condition = ""
		$("#searchBy").change(function() {
			var searchBy = $(this).children('option:selected').val()
			if (searchBy == "currentStatus") {
				$('#conditionInp').css("display", "none");
				$('#conditionSel').css("display", "block");
				$scope.condition = "processing"
			} else {
				$('#conditionInp').css("display", "block")
				$('#conditionSel').css("display", "none")
				$scope.condition = ""

			}
		})

	}]);
