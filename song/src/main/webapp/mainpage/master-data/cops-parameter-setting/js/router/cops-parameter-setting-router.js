myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/cops-parameter-setting', {
		templateUrl : 'mainpage/master-data/cops-parameter-setting/template/cops-parameter-setting.html',
		controller : 'copsParameterSettingController'
	});

}]);