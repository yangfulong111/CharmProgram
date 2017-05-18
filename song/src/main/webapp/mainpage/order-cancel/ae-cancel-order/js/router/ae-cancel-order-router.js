myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/ae-cancel-order', {
		templateUrl : 'mainpage/order-cancel/ae-cancel-order/template/ae-cancel-order.html',
		controller : 'AECancelOrderController'
	});

}]);