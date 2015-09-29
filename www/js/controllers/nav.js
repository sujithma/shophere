angular.module('nav.controllers', [])

.controller('navCtrl', function($scope, $ionicPlatform, $state, $ionicLoading) {
	$scope.doLogoutAction = function(){
		$state.go('login');
	}
	
})