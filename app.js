/**
* myApp Module
*
* Description
*/
var app = angular.module('myApp', []);
app.controller('myCon', function($scope){
	$scope.generateNum = function() {
		return Math.floor((Math.random()*10)+1);
	}	
})

