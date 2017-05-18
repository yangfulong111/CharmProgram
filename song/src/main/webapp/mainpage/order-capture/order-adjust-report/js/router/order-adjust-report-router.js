myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/order-adjust-report', {
		templateUrl : 'mainpage/order-capture/order-adjust-report/template/order-adjust-report.html',
		controller : 'orderAdjustReportController'
	});

}]);