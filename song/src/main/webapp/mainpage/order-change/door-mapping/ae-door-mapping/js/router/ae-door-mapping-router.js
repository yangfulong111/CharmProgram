myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/ae-door-mapping', {
		templateUrl : 'mainpage/order-change/door-mapping/ae-door-mapping/template/ae-door-mapping.html',
		controller : 'aeDoorMappingController'
	});

}]);