'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		})
		.state('cv', {
			url: '/cv',
			templateUrl: 'modules/core/views/cv.client.view.html'
		})
		.state('blog', {
			url: '/blog',
			templateUrl: 'modules/core/views/blog.client.view.html'
		});
	}
]);