'use strict';

// i18n
myApp.config(['$translateProvider', function($translateProvider) {

	var lang = window.localStorage.lang || 'cn';

	$translateProvider.preferredLanguage(lang);

	$translateProvider.useStaticFilesLoader({
		prefix : 'common/i18n/',
		suffix : '.json'
	});

}]);
