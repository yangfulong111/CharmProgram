myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/master-line-import', {
		templateUrl : 'mainpage/product-change/master-line-import/template/master-line-import.html',
		controller : 'MasterLineImportController'
	});

}]);