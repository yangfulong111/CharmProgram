myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/second-lifi-cops-validation', {
		templateUrl : 'mainpage/order-validation/second-lifi-cops-validation/template/second-lifi-cops-validation.html',
		controller : 'SecondLifiCopsValidationController'
	});

}]);