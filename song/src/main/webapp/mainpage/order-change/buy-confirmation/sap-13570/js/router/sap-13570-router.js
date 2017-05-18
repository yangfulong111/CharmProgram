myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/buy-confirmation/sap-13570', {
		templateUrl : 'mainpage/order-change/buy-confirmation/sap-13570/template/sap-13570.html',
		controller : 'sap13570Controller'
	});

}]);