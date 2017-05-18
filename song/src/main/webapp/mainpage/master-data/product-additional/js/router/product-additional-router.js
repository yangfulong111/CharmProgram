myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/product-additional', {
		templateUrl : 'mainpage/master-data/product-additional/template/product-additional.html',
		controller : 'productAdditionalController'
	});

}]);