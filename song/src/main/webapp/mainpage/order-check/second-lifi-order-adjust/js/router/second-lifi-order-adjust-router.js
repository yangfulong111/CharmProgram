myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/second-lifi-order-adjust', {
		templateUrl : 'mainpage/order-check/second-lifi-order-adjust/template/second-lifi-order-adjust.html',
		controller : 'SecondLifiOrderAdjustController'
	});

}]);