'use strict';

// 转换语言版本
myApp.controller('LanguageSwitchingCtrl', ['$scope', '$translate', 'translate', function(scope, $translate, translate) {
	scope.switching = function(lang) {
		$translate.use(lang);
		window.localStorage.lang = lang;
		alert(translate.T(101));
	};
	scope.lang = $translate.use();
}]);