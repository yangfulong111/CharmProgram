myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/configration', {
		templateUrl : 'mainpage/configration/template/configration.html',
		controller : 'ConfigrationController'
	});

}]);