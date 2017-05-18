myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/role-management', {
		templateUrl : 'mainpage/admin/role-management/template/role-management.html',
		controller : 'RoleManagementController'
	});

}]);