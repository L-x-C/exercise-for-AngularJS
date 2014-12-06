var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider
		.state('index', {
			url: '/index',
			views: {
				'': {
					templateUrl: 'tpls/home.html'
				},
				'main@index': {
					templateUrl: 'tpls/loginForm.html'
				}
			}
		})
		.state('booklist', {
            url: '/{bookType:[0-9]{1,4}}',
			views:{
				'': {
					templateUrl: 'tpls/bookList.html'
				},
				'booktype@booklist': {
					templateUrl: 'tpls/bookType.html'
				},
				'bookgrid@booklist': {
					templateUrl: 'tpls/bookGrid.html'
				}
			}
		})
	
});