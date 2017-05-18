myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/cops-cancel-order', {
		templateUrl : 'mainpage/order-cancel/cops-cancel-order/template/cops-cancel-order.html',
		controller : 'CopsCancelOrderController'
	});

}]);