myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/nike-change/sap-13570', {
		templateUrl : 'mainpage/order-change/nike-change/sap-13570/template/sap-13570.html',
		controller : 'sap13570Controller'
	});

}]);