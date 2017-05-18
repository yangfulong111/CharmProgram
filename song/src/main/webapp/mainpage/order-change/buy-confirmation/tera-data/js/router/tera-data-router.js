myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/buy-confirmation/tera-data', {
		templateUrl : 'mainpage/order-change/buy-confirmation/tera-data/template/tera-data.html',
		controller : 'teraDataController'
	});

}]);