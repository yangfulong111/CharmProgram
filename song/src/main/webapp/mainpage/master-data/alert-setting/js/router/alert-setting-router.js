myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/alert-setting', {
		templateUrl : 'mainpage/master-data/alert-setting/template/alert-setting.html',
		controller : 'alertSettingController'
	});

}]);