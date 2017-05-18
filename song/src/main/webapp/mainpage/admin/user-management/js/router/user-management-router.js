myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/user-management', {
		templateUrl : 'mainpage/admin/user-management/template/user-management.html',
		controller : 'UserManagementController'
	});

}]);
