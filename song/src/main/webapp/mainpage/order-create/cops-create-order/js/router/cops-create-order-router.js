myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/cops-create-order', {
		templateUrl : 'mainpage/order-create/cops-create-order/template/cops-create-order.html',
		controller : 'CopsCreateOrderController'
	});

}]);