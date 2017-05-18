myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/nike-buy', {
		templateUrl : 'mainpage/master-data/nike-buy/template/nike-buy.html',
		controller : 'nikeBuyCtroller'
	});

}]);