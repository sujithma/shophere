// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

   .state('login', {
    cache: false,
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  .state('forgot', {
    cache: false,
    url: '/forgot',
    templateUrl: 'templates/forgot.html',
    controller: 'forgotCtrl'
  })
  .state('signup', {
    cache: false,
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })
  .state('nav', {
    cache: false,
    url: '/nav',
    templateUrl: 'templates/menu.html',
    abstract: true,
    controller: 'navCtrl'
  })
  .state('nav.home', {
    cache: false,
    url: '/home',
    views:{
    'nav':{
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    }
  }
  })
  .state('nav.products', {
    cache: false,
    url: '/products',
    views:{
    'nav':{
      templateUrl: 'templates/products.html',
      controller: 'homeCtrl'
    }
  }
  })
  .state('nav.purchase', {
    cache: false,
    url: '/purchase',
    views:{
    'nav':{
      templateUrl: 'templates/purchase.html',
      controller: 'homeCtrl'
    }
  }
  })
  .state('nav.sales', {
    cache: false,
    url: '/sales',
    views:{
    'nav':{
      templateUrl: 'templates/sales.html',
      controller: 'homeCtrl'
    }
  }
  })
  .state('nav.profit', {
    cache: false,
    url: '/profit',
    views:{
    'nav':{
      templateUrl: 'templates/profit.html',
      controller: 'homeCtrl'
    }
  }
  })
  .state('nav.bank', {
    cache: false,
    url: '/bank',
    views:{
    'nav':{
      templateUrl: 'templates/bank.html',
      controller: 'homeCtrl'
    }
  }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
