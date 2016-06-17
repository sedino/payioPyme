angular.module('starter', ['ionic', 'starter.controllers', 'starter.socketServices', 
  'chart.js', 'btford.socket-io',   'ngTable' ])

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
      url: '/login',
      templateUrl:'templates/login.html',
      controller: 'LoginCtrl'
  })

  .state('app', {
    url: '/app',
    templateUrl: 'templates/menu.html'
  })

  .state('app.configuracion', {
    url: '/configuracion',
    views: {
      'menuContent': {
        templateUrl: 'templates/configuracion.html'
      }
    }
  })

  .state('app.resum', {
    url: '/resum',
    views: {
      'menuContent': {
        templateUrl: 'templates/resumen.html',
        controller: 'ResumCtrl'
      }
    }
  })

  .state('app.chart', {
    url: '/chart',
    views: {
      'menuContent': {
        templateUrl: 'templates/chart.html'
        //controller: 'ChartCtrl'
      }
    }
  })

  .state('app.inventario', {
    url: '/inventario',
    views: {
      'menuContent': {
        templateUrl: 'templates/inventario.html',
        controller: 'InventCtrl'
      }
    }
  })


  .state('app.cajas', {
    url: '/cajas',
    views: {
      'menuContent': {
        templateUrl: 'templates/cajas.html',
        controller: 'CajasCtrl'
      }
    }
  })

  .state('app.transferencia', {
    url: '/transferencia',
    views: {
      'menuContent': {
        templateUrl: 'templates/transferencia.html'
  
      }
    }
  })
  
  
    


  ;

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/configuracion');
  $urlRouterProvider.otherwise('/login');



  
});
