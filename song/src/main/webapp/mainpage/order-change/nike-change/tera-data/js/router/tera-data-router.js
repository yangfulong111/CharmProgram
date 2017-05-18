myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/nike-change/tera-data', {
		templateUrl : 'mainpage/order-change/nike-change/tera-data/template/tera-data.html',
		controller : 'teraDataController'
	});

}]);