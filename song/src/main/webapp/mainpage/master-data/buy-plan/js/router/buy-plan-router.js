myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/buy-plan', {
		templateUrl : 'mainpage/master-data/buy-plan/template/buy-plan.html',
		controller : 'buyPlanController'
	});

}]);