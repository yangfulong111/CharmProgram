myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/manual-order-adjust', {
		templateUrl : 'mainpage/order-capture/manual-order-adjust/template/manual-order-adjust.html',
		controller : 'ManualOrderAdjustController'
	});

}]);