/**
 * ni_buy
 */
myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/customer-list', {
		templateUrl : 'mainpage/master-data/customer-list/template/customer-list.html',
		controller : 'customerListCtroller'
	});

}]);
