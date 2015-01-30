var app = angular.module('rtfmApp');

app.controller('threadsCtrl', function ($scope, $rootScope, threadService, threadsThing) {
	$scope.test = "hi test";

	console.log(threadsThing.$asArray())

	console.log($scope.threads);
	$scope.threads = threadService.getThreads();
	$scope.threads = threadsThing.$asArray();

	console.log($scope.threads);

	$scope.threads.$loaded().then(function (threads) {
		console.log
	})

	$scope.createThread = function(title){
		$scope.threads.$add({
			username: $rootScope.user,
			title: title
		});
	}

});