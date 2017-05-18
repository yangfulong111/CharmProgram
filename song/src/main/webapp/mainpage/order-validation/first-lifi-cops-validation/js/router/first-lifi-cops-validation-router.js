myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/first-lifi-cops-validation', {
		templateUrl : 'mainpage/order-validation/first-lifi-cops-validation/template/first-lifi-cops-validation.html',
		controller : 'FirstLifiCopsValidationController'
	});

	$routeProvider.when('/shipto-error', {
		templateUrl : 'mainpage/order-validation/first-lifi-cops-validation/template/shipto-error.html',
		controller : 'ShiptoErrorController'
	});

	$routeProvider.when('/sku-error', {
		templateUrl : 'mainpage/order-validation/first-lifi-cops-validation/template/sku-error.html',
		controller : 'SkuErrorController'
	});

}]);