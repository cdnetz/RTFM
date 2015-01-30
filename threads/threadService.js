var app = angular.module('rtfmApp');

app.service('threadService', function($firebase, EnvironmentService){
	var firebaseUrl = EnvironmentService.getEnv().firebase;
	this.getThreads = function(){
		//firebase stuff 
		return $firebase(new Firebase(firebaseUrl + '/threads'))

	};

	this.getThread = function(){
		return $firebase(new Firebase(firebaseUrl + '/threads' + id));
	}


	
})

// var url = EnvironmentService.getEnv().firebase;
// 		var ref = new Firebase(url); //don't use ref, it's not angular fire
// 		var thing = $firebase(ref); //use thing as much as you can, inject new Firebase(url) directly into the $firebase function
// 		var thingObject = thing.$asObject();
// 		var thingArray = thing.$asArray(); //changing an object to an array so angular can loop through it 

// 		//$add is similar to push