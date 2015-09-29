angular.module('login.controllers', [])

.controller('loginCtrl', function($scope, $ionicPlatform, $state, $ionicLoading) {	
	$scope.doLoginAction = function(login){
		console.log(login);
		$state.go('nav.home');
	}
	
	});
