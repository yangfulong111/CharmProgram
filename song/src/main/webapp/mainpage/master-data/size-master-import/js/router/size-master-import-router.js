myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/size-master-import', {
		templateUrl : 'mainpage/master-data/size-master-import/template/size-master-import.html',
		controller : 'sizeMasterImportController'
	});

}]);