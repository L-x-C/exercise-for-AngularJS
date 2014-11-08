/**
* myApp Module
*
* Description
*/
var app = angular.module('myApp', []);
app.directive('sidebox',  function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			title:'@'
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<div class="sidebox">\
						<div class="content">\
							<h2 class="header">{{title}}</h2>\
							<span class="content" ng-transclude>\
							</span>\
						</div>\
					</div>',
		// templateUrl: '',
		// replace: true,
		transclude: true
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
	};
});
