myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/size-alert-set', {
		templateUrl : 'mainpage/master-data/size-alert-set/template/size-alert-set.html',
		controller : 'sizeAlertSetController'
	});

}]);