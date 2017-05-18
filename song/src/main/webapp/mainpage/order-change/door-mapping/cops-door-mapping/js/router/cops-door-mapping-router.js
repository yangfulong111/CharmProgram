myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/cops-door-mapping', {
		templateUrl : 'mainpage/order-change/door-mapping/cops-door-mapping/template/cops-door-mapping.html',
		controller : 'copsDoorMappingController'
	});

}]);