myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/product', {
		templateUrl : 'mainpage/master-data/product/template/product.html',
		controller : 'productController'
	});

}]);