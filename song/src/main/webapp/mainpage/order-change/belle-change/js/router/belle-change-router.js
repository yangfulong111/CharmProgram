myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/belle-change', {
		templateUrl : 'mainpage/order-change/belle-change/template/belle-change.html',
		controller : 'belleChangeController'
	});

}]);