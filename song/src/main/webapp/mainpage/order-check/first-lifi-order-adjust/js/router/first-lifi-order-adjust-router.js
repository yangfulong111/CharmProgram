myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/first-lifi-order-adjust', {
		templateUrl : 'mainpage/order-check/first-lifi-order-adjust/template/first-lifi-order-adjust.html',
		controller : 'FirstLifiOrderAdjustController'
	});

}]);