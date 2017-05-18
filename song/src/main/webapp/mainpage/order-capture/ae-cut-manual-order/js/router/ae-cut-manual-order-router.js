myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/ae-cut-manual-order', {
		templateUrl : 'mainpage/order-capture/ae-cut-manual-order/template/ae-cut-manual-order.html',
		controller : 'AECutManualOrderController'
	});

	// $routeProvider.when('/ae-cut-manual-order', {
	// templateUrl :
	// 'mainpage/order-capture/ae-cut-manual-order/template/ae-cut-manual-detail-order.html',
	// controller : 'AECutManualOrderImportController'
	// });

}]);