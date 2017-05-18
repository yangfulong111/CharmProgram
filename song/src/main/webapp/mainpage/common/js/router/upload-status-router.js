myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/upload-status', {
		templateUrl : 'mainpage/common/template/upload-status.html',
		controller : 'uploadStatusController'
	});

}]);
