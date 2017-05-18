myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/qap-main', {
		templateUrl : 'mainpage/master-data/qap/template/qap-main.html',
		controller : 'QAPAnalysisController'
	});

}]);
