myApp.directive('fileUpload',['$http',function($http) {
			return {
					restrict : 'EA',
					link : function(scope, el, attrs) {
					scope.init = function() {
						if (scope.files == null) {
							scope.files = new Array();
						}
					};
					
					scope.pushFile = function(file) {
						var flag = true;
						scope.init();
						if (scope.files.length > 0) {
							for (var i = 0; i < scope.files.length; i++) {
								if (scope.files[i].name == file.name
										&& scope.files[i].size == file.size) {
									flag = false;
								}
							}
						}
						if (flag) {
							scope.files.push(file);
						}
					};
					
					scope.removeFile = function(file) {
						scope.result=true;
						scope.visibleMsg=true;
						scope.visible=true;
						scope.mes="";
						if (scope.files != null
								&& scope.files.length > 0) {
							for (var i = 0; i < scope.files.length; i++) {
								alert("name"+file.name)
								alert("path"+file.path)
								if (scope.files[i].name == file.name&& scope.files[i].size == file.size) {
									scope.files.splice(i, 1);
									document.getElementById("file").value = "";
								}
							}
						}
					};
					
					
					el.bind('change', function(event) {
						scope.result=true;
						scope.visibleMsg=true;
						scope.visible=true;
						scope.mes="";
						var files = event.target.files;
						for (var i = 0; i < files.length; i++) {
							scope.pushFile(files[i]);
							scope.$apply();
						}
					});
				}
			};
} ]);