angular.module('home.controllers', [])

.controller('homeCtrl', function($scope, $state, $ionicPlatform) {
	$scope.products=[
    {
      name: "AiA",
      quantity: "200"
    },
    {
      name: "Cargills",
      quantity: "200"
     
    }
  ]
	
});


