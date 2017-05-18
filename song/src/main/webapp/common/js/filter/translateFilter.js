'use strict';

/**
 * 
 */
myApp.filter("translate", ['$translate', function($translate) {
	return function(key) {
		if (key) {
			return $translate.instant(key);
		}
	};
}]);