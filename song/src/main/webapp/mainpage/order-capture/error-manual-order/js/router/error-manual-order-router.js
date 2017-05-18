myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/error-manual-order', {
		templateUrl : 'mainpage/order-capture/error-manual-order/template/error-manual-order.html',
		controller : 'ErrorManualOrderController'
	});

}]);