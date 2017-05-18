'use strict';

// Declare app level module
var myApp = angular.module('myApp', ['ngRoute', 'ngResource', 'pascalprecht.translate', 'ngSanitize', 'ui.grid',
	'ui.grid.expandable', 'ui.grid.pinning', 'ui.grid.pagination', 'ui.grid.selection', 'ui.grid.edit',
	'ui.grid.rowEdit', 'ui.grid.cellNav', 'ui.grid.autoResize', 'ui.grid.resizeColumns']);

myApp.config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl : 'mainpage/home/template/home.html',
		controller : 'homeController'
	});

	$routeProvider.otherwise({
		templateUrl : 'mainpage/home/template/home.html',
		controller : 'homeController'
	});

	$routeProvider.otherwise({

	});

}]);

// 注入依赖，读取本地文件进行国际化
myApp.config(['$translateProvider', function($translateProvider) {
	var lang = window.localStorage.lang || 'en';
	$translateProvider.preferredLanguage(lang);
	$translateProvider.useStaticFilesLoader({
		prefix : 'common/i18n/',
		suffix : '.json'
	});
	$translateProvider.preferredLanguage('en');
}]);
// JavaScript使用国际化，传入数字id，返回翻译值
myApp.factory('translate', ['$translate', function($translate) {
	var factory = {};
	factory.T = function(key) {
		if (key) {
			return $translate.instant(key);
		}
		return key;
	}
	return factory;
}]);