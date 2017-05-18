myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/door-main', {
		templateUrl : 'mainpage/master-data/door-master/template/door-main.html',
		controller : 'doorAnalysisController'
	});

}]);