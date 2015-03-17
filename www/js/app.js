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

app.filter('inSlicesOf', 
    ['$rootScope',  
    function($rootScope) {
      makeSlices = function(items, count) { 
        if (!count)            
          count = 3;
        
        if (!angular.isArray(items) && !angular.isString(items)) return items;
        
        var array = [];
        for (var i = 0; i < items.length; i++) {
          var chunkIndex = parseInt(i / count, 10);
          var isFirst = (i % count === 0);
          if (isFirst)
            array[chunkIndex] = [];
          array[chunkIndex].push(items[i]);
        }

        if (angular.equals($rootScope.arrayinSliceOf, array))
          return $rootScope.arrayinSliceOf;
        else
          $rootScope.arrayinSliceOf = array;
          
        return array;
      };
      
      return makeSlices; 
    }]
)

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/colors')

  $stateProvider.state('app', {
    abstract: true,
    templateUrl: 'main.html'
  })

  $stateProvider.state('app.colors', {
    abstract: true,
    url: '/colors',
    views: {
      colors: {
        template: '<ion-nav-view></ion-nav-view>'
      }
    }
  })

  $stateProvider.state('app.colors.index', {
    url: '',
    templateUrl: 'colors.html',
    controller: 'MainCtrl'
  })

  $stateProvider.state('app.colors.list', {
    url: '/:color',
    templateUrl: 'color.html',
    controller: 'ListCtrl',
    resolve: {
      color: function($stateParams, ColorsService) {
        return ColorsService.getColorById( $stateParams.color )
      }
    }
  })
})

app.factory('ColorsService', function() {
  var colors = [
      { id: '1', colorText: 'Blue', color: '004358', teams: [
        { teamName: 'Brave', teamColor: '002F5F' },
        { teamName: 'Cubs', teamColor: '003279' },
        { teamName: 'Red Sox', teamColor: '002244' },
        { teamName: 'Indians', teamColor: '003366' },
        { teamName: 'Tigers', teamColor: '001742' },
        { teamName: 'Astros', teamColor: '072854' },
        { teamName: 'Royals', teamColor: '15317E' },
        { teamName: 'Angels', teamColor: '002244' },
        { teamName: 'Dodgers', teamColor: '083C6B' },
        { teamName: 'Miami', teamColor: '0077C8' },
        { teamName: 'Brewers', teamColor: '182B49' },
        { teamName: 'Twins', teamColor: '072754' },
        { teamName: 'Mets', teamColor: '002C77' },
        { teamName: 'Yankees', teamColor: '1C2841' },
        { teamName: 'Phillies', teamColor: '003087' },
        { teamName: 'Padres', teamColor: '002147' },
        { teamName: 'Mariners', teamColor: '0C2C56' },
        { teamName: 'Cardinals', teamColor: '0A2252' },
        { teamName: 'Rays', teamColor: '00285D' }, 
        { teamName: 'Rangers', teamColor: '003279' },
        { teamName: 'Blue Jays', teamColor: '003DA5' },
        { teamName: 'Nationals', teamColor: '11225B' }
      ] }, 
      { id: '2', colorText: 'Red', color: 'B9121B' },
      { id: '3', colorText: 'Orange', color: 'FD7400' },
      { id: '4', colorText: 'Purple', color: '2E0927' },
      { id: '5', colorText: 'Yellow', color: 'FFE11A' },
      { id: '6', colorText: 'Green', color: 'BEDB39' },
      { id: '7', colorText: 'Brown', color: 'BD8D46' },
      { id: '8', colorText: 'Maroon', color: '4C1B1B' },
      { id: '9', colorText: 'Tan', color: 'F6E497' }
   ]

  return {
    colors: colors,
    getColor: function( index ) {
      return colors[index];
    },
    getColorById: function( id ) {
      for (var i = 0; i < colors.length; i++)
      {
        if ( colors[i].id === id ) {
          return colors[i];
        }
      }
    }
  }
})

app.controller('MainCtrl', function($scope, ColorsService) {
  var colors = ColorsService.colors;
  $scope.rows = colors;//split( colors, 3 );

  function split(a, n) {
    var len = a.length, out = [], i = 0;
    while (i < len) {
        var size = Math.ceil((len - i) / n--);
        out.push(a.slice(i, i += size));
    }
    return out;
  }
})

app.controller('ListCtrl', function($scope, color) {
  $scope.color = color;
});
