// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
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
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })

      .state('app.instrumentos', {
        url: '/instrumentos',
        views: {
          'menuContent': {
            templateUrl: 'templates/instrumentos.html',
            controller: 'instrumentosCtrl'
          }
        }
      })

      .state('app.acessorios', {
        url: '/acessorios',
        views: {
          'menuContent': {
            templateUrl: 'templates/acessorios.html',
            controller: 'acessoriosCtrl'
          }
        }
      })

      .state('app.amplificadores', {
        url: '/amplificadores',
        views: {
          'menuContent': {
            templateUrl: 'templates/amplificadores.html',
            controller: 'amplificadoresCtrl'
          }
        }
      })

      .state('app.detalhar', {
        url: '/detalhar/:itemID',
        views: {
          'menuContent': {
            templateUrl: 'templates/detalhar.html',
            controller: 'detalharCtrl'
          }
        }
      })

      .state('app.finalizar', {
        url: '/finalizar',
        views: {
          'menuContent': {
            templateUrl: 'templates/finalizar.html',
            controller: 'finalizarCtrl'
          }
        }
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/browse');
  });
