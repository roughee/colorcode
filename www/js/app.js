// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('main', {
    url: '/',
    templateUrl: 'main.html',
    controller: 'MainCtrl'
  })
})

app.controller('MainCtrl', function($scope) {
  $scope.rows = [
      [ { colorText: 'Blue', color: '004358' }, { colorText: 'Electric', color: '1F8A70' }, { colorText: 'Green', color: 'BEDB39' } ],
      [ { colorText: 'Yellow', color: 'FFE11A' }, { colorText: 'Orange', color: 'FD7400' }, { colorText: 'Red', color: 'B9121B' } ],
      [ { colorText: 'Maroon', color: '4C1B1B' }, { colorText: 'Tan', color: 'F6E497' }, { colorText: 'Brown', color: 'BD8D46' } ]
  ];
});
