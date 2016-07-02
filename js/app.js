angular.module('starter', ['ionic', 
  'ngMessages',
  'satellizer',
  'chart.js', 
  'btford.socket-io',
  'ngTable',
  
  //'starter.constant',
  'starter.controllers',
  'starter.socketServices' 
 ])
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

.config(function($stateProvider, $urlRouterProvider, $authProvider) {

 // $authProvider.loginUrl = "http://localhost:1443/api/auth";
 // $authProvider.tokenName = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJqZ2Rlc2lnbiIsImlhdCI6MTQ2NzQ3Mjc3MSwiZXhwIjoxNDY3NDkwNzcxfQ.ctU2sw0TtOn0yqm9FDaedQIXjSbyRf-HsKZUVezKq4Y",
  //$authProvider.tokenPrefix = "starter",


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

  .state('app.addInv', {
    url: '/inventario/:agregarModalId',
    views: {
      'menuContent': {
        templateUrl: 'templates/agregarModal.html',
        controller: 'regproCtrl'
            
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
  });

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/configuracion');
  $urlRouterProvider.otherwise('/login');



  
})




;

