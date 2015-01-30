var app = angular.module('rtfmApp');

app.controller('loginCtrl', function ($scope, EnvironmentService, $location) {
	$scope.test = EnvironmentService.getEnv();
	$scope.logMeIn = function (username){
		EnvironmentService.saveUserName(username);
		alert(username);
		$location.path('/threads');
	}
	

});