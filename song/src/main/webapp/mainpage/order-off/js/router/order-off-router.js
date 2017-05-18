myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/order-off', {
		templateUrl : 'mainpage/order-off/template/order-off.html',
		controller : 'OrderOffController'
	});

}]);