angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope,$state,socket,userData,Cajas) {
  $scope.caja=Cajas.giveEnlazado();
  $scope.caja=$scope.caja.idmaster;
  $scope.logdata={};
  $scope.login = function(){
    Cajas.enlazado.idmaster=0;
    if(!$scope.logdata.usu || !$scope.logdata.pass){
      $scope.alertMessage = 'Usuario o contraseña se encuentra en blanco!';
      $scope.showAlert();
    }
    else{
      socket.emit('logemp',$scope.logdata);
      //$state.go('app.menuprin');
    }
    socket.removeListener('logDesition');
    socket.on('logDesition', function(desition){
      if(desition.message=='false'){
        $scope.alertMessage = 'Usuario o Contraseña invalida!';
        $scope.showAlert();
        $scope.loginData ={};
      }
      else if(desition.message=='true'){
        userData.datos = desition;
        if (userData.datos.idmaster) {
          Cajas.enlazado.idmaster=userData.datos.idmaster;
        }
        //alert(userData.datos.userId);
        $state.go('app.resum');
      }
    });
  } 
 
})

/*.controller('ResumCtrl', function($scope) {
    $scope.payio = {
        "data": [
          {
            "nombre": "usuario1",
            "items": { "value": 159.0 },
            "total": { "value": 6.0 }
          }, {
            "nombre": "usuario2",
            "items": { "value": 237.0 },
            "total": { "value": 9.0 }
          }, {
            "nombre": "usuario3",
            "items": { "value":  262.0 },
            "total": { "value": 3.7 }
          }, {
            "nombre": "usuario4",
            "items": { "value":  305.0 },
            "total": { "value": 3.7 }
          }, {
            "nombre": "usuario5",
            "items": { "value":  375.0 },
            "total": { "value": 0.0 }
          }, {
            "nombre": "usuario6",
            "items": { "value": 392.0 },
            "total": { "value": 0.2 }
          }
        ]
    };
})*/

/*.controller('ResumCtrl', function($scope,$stateParams, Cajas, $state,socket,userData,ventas,pagoService,NgTableParams) {
  
})*/


//#################### Estadisticas ####################
/*.controller('ChartCtrl', function($scope, $stateParams, moment, $timeout, $state, $timeout, socket, userData, datosService) {
  



  
  // $scope.usuarioModel = {};
  //$scope.usuarioModel.usuario = 'jgdesign';
  if (!userData.datos.userId){

  //$state.go('login');
  } 

  socket.emit('pimedataReq',userData.datos);


  console.log(userData.datos);


  socket.on('pimedataRes',function(dataUser){
  //###############datefunciona##############
    console.log(dataUser);
   
  //  var dateRange = {
  //  start: moment().startOf('week'),
  //  end: moment().endOf('week')
  //    };
  //  
  //  var dataUserchart = {
  //      totalSales: 0,
  //      //totalEarnings: 0,
  //      //orders: [],
  //      dayTotals: []
  //      };
  //  
  //  console.log(dateRange);
  //  var startTime = dateRange.start.toDate();
  //  var endTime = dateRange.end.toDate();
  //      for(var fecha = startTime.getTime(); fecha < endTime.getTime(); fecha += 86400000) {
  //          var ventasDia = [];
  //        console.log(dataUser);
  //          for(i = 0; i < dataUser.length;i++){
  //            if(dataUser[i].fecha == fecha){
  //              ventasDia = ventasDia + dataUser[i].monto;
  //              dataUserchart.totalSales++;
  //            }
  //            else {
  //              console.log('bad date');
  //              console.log(dataUser[i].fecha+' '+fecha);
  //            }
  //            dataUserchart.dayTotals.push({
  //              fecha: moment(fecha ),
  //              monto: ventasDia
  //          });
  //          }
  //        //dataUserchart.totalSales += ventasDia;
  //      }
  //      //return dataUser;
    
  //###############funciona##############
  
  
    $scope.lineData = {
        labels: [],
        series: ['Sales'],
        options: {
            
            //datasetFill: false,
            maintainAspectRatio: false,
            responsive: true,
            scaleShowGridLines: false,
            bezierCurve: false,
            pointDotRadius: 2,
            scaleFontColor: '#ffffff',
            scaleFontSize: 16
        },
        colours:['#ffffff'],
        data: []
    };

  
      var row = [];
      for(var i=0;i<dataUser.length;i++){
        $scope.lineData.labels.push(dataUser[i].fecha);
        row.push(dataUser[i].monto);
      }
      $scope.lineData.data.push(row);
  
      //return lineData;
      $scope.$apply();
  });
})*/
//#############ultichart###########333
/*.controller('ChartCtrl', function($scope,$stateParams,$ionicHistory,$filter,socket,$state,pagoService,$timeout,userData) {
  var fecha=new Date();
  var dias_semana = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");
  var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre", "Diciembre");
  //alert(new Date(fecha.getTime()));
  $scope.ayer1=new Date(fecha.getTime() - 24*60*60*1000);
  $scope.ayer2=new Date(fecha.getTime() - 48*60*60*1000);
  $scope.manana1=new Date(fecha.getTime() + 24*60*60*1000);
  $scope.manana2=new Date(fecha.getTime() + 48*60*60*1000);

  $scope.ayer1mod=$scope.ayer1.getDate()+meses[$scope.ayer1.getMonth()].substring(0,3);
  $scope.ayer2mod=$scope.ayer2.getDate()+meses[$scope.ayer2.getMonth()].substring(0,3);

  $scope.manana1mod=$scope.manana1.getDate()+meses[$scope.manana1.getMonth()].substring(0,3);
  $scope.manana2mod=$scope.manana2.getDate()+meses[$scope.manana2.getMonth()].substring(0,3);

  $scope.dia0=new Date(fecha.getTime());
  $scope.dia1=new Date(fecha.getTime() - 24*60*60*1000);
  $scope.dia2=new Date(fecha.getTime() - 48*60*60*1000);
  $scope.dia3=new Date(fecha.getTime() - 72*60*60*1000);
  $scope.dia4=new Date(fecha.getTime() - 96*60*60*1000);
  $scope.dia5=new Date(fecha.getTime() - 120*60*60*1000);
  $scope.dia6=new Date(fecha.getTime() - 144*60*60*1000);
  $scope.formatfech=function(fec){
    var year1 = $filter('date')(fec, 'yyyy');
    var day1 = $filter('date')(fec, 'dd');
    var month1 = $filter('date')(fec, 'MM');
    var datemod1=day1+'/'+month1+'/'+year1;
    return datemod1;
  };
  var fecmoddia0=$scope.formatfech($scope.dia0);
  var fecmoddia1=$scope.formatfech($scope.dia1);
  var fecmoddia2=$scope.formatfech($scope.dia2);
  var fecmoddia3=$scope.formatfech($scope.dia3);
  var fecmoddia4=$scope.formatfech($scope.dia4);
  var fecmoddia5=$scope.formatfech($scope.dia5);
  var fecmoddia6=$scope.formatfech($scope.dia6);
 
  //alert($scope.formatfech($scope.dia0));
  var datos=userData.datos.userId;
  var fechas=[];
  fechas=[datos,fecmoddia0,fecmoddia1,fecmoddia2,fecmoddia3,fecmoddia4,fecmoddia5,fecmoddia6];
  //alert(fechas[0]+' '+fechas[1]+' '+fechas[2]+' '+fechas[3]+' '+fechas[4]+' '+fechas[5]+' '+fechas[6]);
  socket.emit('statventas',fechas);
  socket.removeListener('repstatventas');
  $scope.fecmonto0=0;
  $scope.fecmonto1=0;
  $scope.fecmonto2=0;
  $scope.fecmonto3=0;
  $scope.fecmonto4=0;
  $scope.fecmonto5=0;
  $scope.fecmonto6=0;
  socket.on('repstatventas',function(montos){
    //alert(montos);
    $scope.fec=montos;
    //alert($scope.dataVentas[0]);
    if ($scope.fec[0]=='f') {
      $scope.fec=[];
      
    }
    else{
      for(n in $scope.fec){
        //alert($scope.fec[n].fecha);
        if ($scope.fec[n].fecha==fecmoddia0) {
          //alert('entro');
          $scope.fecmonto0+=parseFloat($scope.fec[n].monto);
        }else if($scope.fec[n].fecha==fecmoddia1){
          $scope.fecmonto1+=parseFloat($scope.fec[n].monto);
        }else if($scope.fec[n].fecha==fecmoddia2){
          $scope.fecmonto2+=parseFloat($scope.fec[n].monto);
        }else if($scope.fec[n].fecha==fecmoddia3){
          $scope.fecmonto3+=parseFloat($scope.fec[n].monto);
        }else if($scope.fec[n].fecha==fecmoddia4){
          $scope.fecmonto4+=parseFloat($scope.fec[n].monto);
        }else if($scope.fec[n].fecha==fecmoddia5){
          $scope.fecmonto5+=parseFloat($scope.fec[n].monto);
        }else{
          $scope.fecmonto6+=parseFloat($scope.fec[n].monto);
        }
      }
     
      //alert($scope.fecmonto0);
      $scope.data = [
        [$scope.fecmonto6,$scope.fecmonto5,$scope.fecmonto4,$scope.fecmonto3,$scope.fecmonto2, $scope.fecmonto1, $scope.fecmonto0]
      ];
    }
    //alert(JSON.parse(ventas));
  });
  $scope.dia0mod=dias_semana[$scope.dia0.getDay()];
  $scope.dia1mod=dias_semana[$scope.dia1.getDay()];
  $scope.dia2mod=dias_semana[$scope.dia2.getDay()];
  $scope.dia3mod=dias_semana[$scope.dia3.getDay()];
  $scope.dia4mod=dias_semana[$scope.dia4.getDay()];
  $scope.dia5mod=dias_semana[$scope.dia5.getDay()];
  $scope.dia6mod=dias_semana[$scope.dia6.getDay()];

  //alert(dias_semana[$scope.dia6.getDay()]+' - '+dias_semana[$scope.dia5.getDay()]+' - '+dias_semana[$scope.dia4.getDay()]+' - '+dias_semana[$scope.dia3.getDay()]+' - '+dias_semana[$scope.dia2.getDay()]+' - '+dias_semana[$scope.dia1.getDay()]+' - '+dias_semana[$scope.dia0.getDay()]);


  $scope.ingresos=0;
  $scope.balance=0;
  $scope.ingresosItems=0;
  $scope.ingresosServicios=0;
  $scope.ingresosOtros=0;
  socket.emit('balance',userData.datos);
  socket.removeListener('repbalance');
  socket.on('repbalance',function(bal){
    //alert("hola");
    $scope.balance=bal;
  });
  $scope.datingre=userData.datos;
  $scope.datingre.fechaact=$scope.formatfech(fecha);
  socket.emit('ingresos',userData.datos);
  socket.removeListener('repingresos');
  socket.on('repingresos',function(ing){
    //alert("hola");
    $scope.dataIngresos=ing;
    if ($scope.dataIngresos[0]=='f') {
      $scope.dataIngresos=[];
      $scope.ingresos=0;
      $scope.ingresosItems=0;
      $scope.ingresosServicios=0;
      $scope.ingresosOtros=0;
      //alert("hola"+$scope.ingresos);
    }
    else{
      //alert('else');
      for(i in $scope.dataIngresos){
        //alert('for 1');
        //alert($scope.dataIngresos[i].histpag);
        var histpag=JSON.parse($scope.dataIngresos[i].histpag);
        //alert(histpag);
        //console.log(histpag.length);
        for(j in histpag){
          //console.log("for 2");
          if (histpag[j].tipo=='item') {
            $scope.ingresosItems+=parseFloat(histpag[j].precio);
          }
          else{
            $scope.ingresosOtros+=parseFloat(histpag[j].precio);
          }
        }
        $scope.ingresos+=parseFloat($scope.dataIngresos[i].monto);
      }
      //console.log($scope.ingresosItems);
      //console.log($scope.ingresosOtros);
    }
  });
  //alert($scope.fecmonto0);
  
  $scope.labels = [$scope.dia6mod, $scope.dia5mod, $scope.dia4mod, $scope.dia3mod, $scope.dia2mod, $scope.dia1mod, $scope.dia0mod];
  $scope.series = ['serie A'];
  
  $scope.options={scaleFontSize: $scope.fontchart};
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  
})*/
//#################### inventario ####################
/*.controller('InventCtrl', function($scope, $timeout, $ionicModal, NgTableParams) {
   $ionicModal.fromTemplateUrl('templates/agregarModal.html', {
     scope: $scope,
     animation: 'slide-in-up'
   }).then(function(modal) {
     $scope.modal = modal;
     });
   
   $scope.openModal = function() {
     $scope.modal.show();
       console.log("modal deberia<abrir");
   };
  
     //$scope.addInvent = function(u) {      
    //   $scope.payioVentas.ventas.push({
    //     nombre: u.nombreProd,
    //     fecha: u.fecha,
    //     cantidad: u.cantidad,
    //     status: u.status,
    //     fechacadu: u.fechaVenc,
    //     costo: u.costo 
    //   });
    //      //{ "name": u.firstName + ' ' + u.lastName});
    //   $scope.modal.hide();
    // };
 
    //$scope.query = {
    //  limit: 3,
    //};
 
     $scope.payioVentas = {
       "ventas": [
         {
         nombre: 'aceite',
         fecha: '12/12/2015' ,
         cantidad: 456 ,
         status: 'disponible' ,
         fechacadu: '22/3/2015' ,
         costo: 500.0
       },{
         "nombre": "mango",
         "fecha": "12/12/2015" ,
         "cantidad": 456 ,
         "status": "disponible" ,
         "fechacadu": "22/3/2015" ,
         "costo": {"value": 600.0}
       },{
         "nombre": "azucar",
         "fecha": "12/12/2015" ,
         "cantidad": 456 ,
         "status": "disponible" ,
         "fechacadu": "22/3/2015" ,
         "costo": {"value": 3000.0}
       },{
         "nombre": "carne",
         "fecha": "12/12/2015" ,
         "cantidad": 456 ,
         "status": "disponible" ,
         "fechacadu": "22/3/2015" ,
         "costo": {"value": 6000.0}
       },{
         "nombre": "agua",
         "fecha": "12/12/2015" ,
         "cantidad": 456 ,
         "status": "disponible" ,
         "fechacadu": "22/3/2015" ,
         "costo": {"value": 1200.0}
       },{
         "nombre": "harina pan",
         "fecha": "12/12/2015" ,
         "cantidad": 456 ,
         "status": "disponible" ,
         "fechacadu": "22/3/2015" ,
         "costo": {"value": 4000.0}
       }
     ]
   };
   $scope.datosTabla = new NgTableParams({}, { dataset: $scope.payioVentas});
 
})*/

.controller('ResumCtrl', function($scope,$stateParams,NgTableParams,$filter,socket,$state,pagoService,$timeout,userData, Cajas,ventas) {
  var fecha=new Date();
  var dias_semana = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");
  var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre", "Diciembre");
  //alert(new Date(fecha.getTime()));
 
  $scope.dia0=new Date(fecha.getTime());
  $scope.dia1=new Date(fecha.getTime() - 24*60*60*1000);
  $scope.dia2=new Date(fecha.getTime() - 48*60*60*1000);
  $scope.dia3=new Date(fecha.getTime() - 72*60*60*1000);
  $scope.dia4=new Date(fecha.getTime() - 96*60*60*1000);
  $scope.dia5=new Date(fecha.getTime() - 120*60*60*1000);
  $scope.dia6=new Date(fecha.getTime() - 144*60*60*1000);
  $scope.formatfech=function(fec){
    var year1 = $filter('date')(fec, 'yyyy');
    var day1 = $filter('date')(fec, 'dd');
    var month1 = $filter('date')(fec, 'MM');
    var datemod1=day1+'/'+month1+'/'+year1;
    return datemod1;
  };
  var fecmoddia0=$scope.formatfech($scope.dia0);
  var fecmoddia1=$scope.formatfech($scope.dia1);
  var fecmoddia2=$scope.formatfech($scope.dia2);
  var fecmoddia3=$scope.formatfech($scope.dia3);
  var fecmoddia4=$scope.formatfech($scope.dia4);
  var fecmoddia5=$scope.formatfech($scope.dia5);
  var fecmoddia6=$scope.formatfech($scope.dia6);

  //alert($scope.formatfech($scope.dia0));
  var datos=userData.datos.userId;
  var fechas=[];
  fechas=[datos,fecmoddia0,fecmoddia1,fecmoddia2,fecmoddia3,fecmoddia4,fecmoddia5,fecmoddia6];
  //alert(fechas[0]+' '+fechas[1]+' '+fechas[2]+' '+fechas[3]+' '+fechas[4]+' '+fechas[5]+' '+fechas[6]);
  socket.emit('statventas',fechas);
  socket.removeListener('repstatventas');
  $scope.fecmonto0=0;
  $scope.fecmonto1=0;
  $scope.fecmonto2=0;
  $scope.fecmonto3=0;
  $scope.fecmonto4=0;
  $scope.fecmonto5=0;
  $scope.fecmonto6=0;
  socket.on('repstatventas',function(montos){
    //alert(montos);
    $scope.fec=montos;
    //alert($scope.dataVentas[0]);
    if ($scope.fec[0]=='f') {
      $scope.fec=[];
    }
    else{
      for(n in $scope.fec){
        //alert($scope.fec[n].fecha);
        if ($scope.fec[n].fecha==fecmoddia0) {
          //alert('entro');
          $scope.fecmonto0+=parseFloat($scope.fec[n].monto);
        }else if($scope.fec[n].fecha==fecmoddia1){
          $scope.fecmonto1+=parseFloat($scope.fec[n].monto);
        }else if($scope.fec[n].fecha==fecmoddia2){
          $scope.fecmonto2+=parseFloat($scope.fec[n].monto);
        }else if($scope.fec[n].fecha==fecmoddia3){
          $scope.fecmonto3+=parseFloat($scope.fec[n].monto);
        }else if($scope.fec[n].fecha==fecmoddia4){
          $scope.fecmonto4+=parseFloat($scope.fec[n].monto);
        }else if($scope.fec[n].fecha==fecmoddia5){
          $scope.fecmonto5+=parseFloat($scope.fec[n].monto);
        }else{
          $scope.fecmonto6+=parseFloat($scope.fec[n].monto);
        }
      }
      //alert($scope.fecmonto0);

      $scope.data = [
        [$scope.fecmonto6,$scope.fecmonto5,$scope.fecmonto4,$scope.fecmonto3,$scope.fecmonto2, $scope.fecmonto1, $scope.fecmonto0]
      ];
    }
    //alert(JSON.parse(ventas));
  });

  $scope.dia0mod=dias_semana[$scope.dia0.getDay()];
  $scope.dia1mod=dias_semana[$scope.dia1.getDay()];
  $scope.dia2mod=dias_semana[$scope.dia2.getDay()];
  $scope.dia3mod=dias_semana[$scope.dia3.getDay()];
  $scope.dia4mod=dias_semana[$scope.dia4.getDay()];
  $scope.dia5mod=dias_semana[$scope.dia5.getDay()];
  $scope.dia6mod=dias_semana[$scope.dia6.getDay()];





 //########################tabla de retiro, ingresos, balance ###################
  $scope.ingresos=0;
  $scope.balance=0;
  $scope.ingresosItems=0;
  $scope.ingresosServicios=0;
  $scope.ingresosOtros=0;
  socket.emit('balance',userData.datos);
  socket.removeListener('repbalance');
  socket.on('repbalance',function(bal){
    //alert("hola");
    $scope.balance=bal;
  });
  $scope.datingre=userData.datos;
  $scope.datingre.fechaact=$scope.formatfech(fecha);
  socket.emit('ingresos',userData.datos);
  socket.removeListener('repingresos');
  socket.on('repingresos',function(ing){
    //alert("hola");
    $scope.dataIngresos=ing;
    if ($scope.dataIngresos[0]=='f') {
      $scope.dataIngresos=[];
      $scope.ingresos=0;
      $scope.ingresosItems=0;
      $scope.ingresosServicios=0;
      $scope.ingresosOtros=0;
      //alert("hola"+$scope.ingresos);
    }
    else{
      //alert('else');
      for(i in $scope.dataIngresos){
        //alert('for 1');
        //alert($scope.dataIngresos[i].histpag);
        var histpag=JSON.parse($scope.dataIngresos[i].histpag);
        //alert(histpag);
        //console.log(histpag.length);
        for(j in histpag){
          //console.log("for 2");
          if (histpag[j].tipo=='item') {
            $scope.ingresosItems+=parseFloat(histpag[j].precio);
          }
          else{
            $scope.ingresosOtros+=parseFloat(histpag[j].precio);
          }
        }
        $scope.ingresos+=parseFloat($scope.dataIngresos[i].monto);
      }
      //console.log($scope.ingresosItems);
      //console.log($scope.ingresosOtros);
    }
  });
  //########################final tabla de retiro, ingresos, balance ###################


  $scope.labels = [$scope.dia6mod, $scope.dia5mod, $scope.dia4mod, $scope.dia3mod, $scope.dia2mod, $scope.dia1mod, $scope.dia0mod];
  $scope.series = ['serie A'];
  $scope.options = {
            maintainAspectRatio: false,
            responsive: true,
            scaleShowGridLines: false,
            bezierCurve: true,
            pointDotRadius: 2,
            scaleFontColor: '#ffffff',
            scaleFontSize: 16
  };
  $scope.colours = ['#ffffff'];


  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };


   $scope.query = {
    order: 'fecha',
    limit: 10
  }

  var datsqlprod={userId:userData.datos.userId};
  var idmaster=Cajas.giveEnlazado();
  var id=idmaster.idmaster;
  datsqlprod.idmaster=id;

  socket.emit('sqlventas',datsqlprod);
  $scope.dataVentas=[];
  socket.removeListener('repsqlventas');
  socket.on('repsqlventas',function(ventas){
    
    //alert(JSON.parse(ventas));

    $scope.dataVentas=ventas;
    //alert($scope.dataVentas[0]);
    if ($scope.dataVentas[0]=='f') {
      $scope.dataVentas=[];
    }
 
    $scope.counventas=$scope.dataVentas.length;
    //alert(JSON.parse(ventas));
  });

  $scope.datosTabla = new NgTableParams({}, { dataset: $scope.dataVentas});

})/**/

.controller('InventCtrl', function($scope,$timeout,Cajas, $ionicModal,$stateParams,$state,$filter,$ionicModal,userData,socket,invent,detalle, NgTableParams) {
  //if (!userData.datos.userId) {
  //  $state.go('login');
  //}

  $ionicModal.fromTemplateUrl('templates/agregarModal.html', {
     scope: $scope,
     animation: 'slide-in-up',
     backdropClickToClose: false,
     focusFirstInput: true
   }).then(function(modal) {
     $scope.modal = modal;
     });
   
   $scope.openModal = function() {
     $scope.modal.show();
       console.log("modal deberia<abrir");
   };


  var datsqlprod={userId:userData.datos.userId};
  var idmaster=Cajas.giveEnlazado();
  var id=idmaster.idmaster;
  datsqlprod.idmaster=id;


  $scope.sql=function(datos){
    socket.emit('sqlprod',datos);
    socket.emit('sqlserv',userData.datos.userId);
  };
  $scope.sql(datsqlprod);
  
 //  $scope.check={
 //    val:'false',
 //    check:"input"
 //  };
 //  $scope.tipo="producto";
 //  $scope.srcfun="srcpro()";
 //  $scope.cambiar=function(val){
 //    $scope.check.val=val;
 //    if (val==false) {
 //      $scope.pageInv='Productos';
 //      $scope.tipo="producto";
 //      $scope.srcfun="srcpro()";
 //
 //      //alert("Productos");
 //    }
 //    else{
 //      $scope.pageInv='Servicios';
 //      $scope.tipo="servicio";
 //      $scope.srcinv='';
 //      $scope.srcfun="srcinv()";
 //      //alert("Servicios");
 //    };
 //  }
 //  //alert($scope.check.val);
 //  $scope.choice={categoria:''};
 //  $scope.srcinv='';
 //  $scope.counprod=1;
 //  $scope.counventa='';
 //
 //  $scope.detprod='';
 //  $scope.Swiper=null;
 //  $scope.index = 0;
 //  $scope.pageInv = 'Productos';
 //  $scope.options = {
 //    onSlideChangeEnd: function(swiper){
 //      if(swiper.activeIndex == 0){
 //        $scope.pageInv ='Productos';
 //        socket.emit('sqlprod',userData.datos.userId);
 //        socket.emit('sqlserv',userData.datos.userId);
 //      }
 //      if(swiper.activeIndex == 1)
 //      $scope.pageInv ='Categorias';  
 //      $scope.$apply();
 //     },
 //     onInit:function(swiper){
 //        $scope.declareSwiper(swiper);
 //        $scope.$digest();
 //     },
 //     pagination: false
 //    }
 //    $scope.declareSwiper = function(swiper){
 //      $scope.Swiper = swiper;
 //    }
 //    $scope.slideTo = function(slide){
 //      $scope.Swiper.slideTo(slide, 200, true);
 //    }
  socket.removeListener('repsqlprod');
  socket.on('repsqlprod',function(prod){
    
    $scope.dataVentas=prod;
    invent.inventario=prod;
    if ($scope.dataVentas[0]=='f') {
      $scope.dataVentas=[];
    }
    $scope.counprod=$scope.dataVentas.length;
    $scope.$apply();
  });
  socket.removeListener('repsqlserv');
  socket.on('repsqlserv',function(venta){
    //alert(JSON.parse(ventas));
    $scope.venta=venta;
    //alert($scope.dataVentas[0]);
    if ($scope.venta[0]=='f') {
      $scope.venta=[];
    }
    $scope.counprod2=$scope.venta.length;
    //alert(JSON.parse(ventas));
  });

  $scope.funcreg = function(tipo) {
    if (tipo=="producto") {
      $state.go('app.regpro');
    }else{
      $state.go('app.regser');
    };
  };
  $scope.detalle = function(producto) {
    //alert(producto);
    //$scope.nomprod=producto;
    //detalle.detprod=producto;
    //alert(detalle.detprod);
    $state.go('app.detinvent',{ producto: producto});
  };

  $scope.datosTabla = new NgTableParams({}, { dataset: $scope.dataVentas});
  
})

//###########################registrar producto#######################3
.controller('regproCtrl', function($scope,$stateParams,$state,$ionicHistory,$ionicPopup,socket,userData) {
  if (!userData.datos.userId) {
    $state.go('login');
  }
  $scope.regprod={};
  $scope.unidades=[{
    val:'KM'},{val:'CAJA'},{val:'BULTO'},{val:'LTS'},{val:'K'},{val:'MTS'},{val:'PULG'},{val:'PACK'},{val:'CM'},
  {val:'CM2'},{val:'CM3'},{val:'MTS2'},{val:'MTS3'}
  ];
  $scope.alertMessage ="Error";
  $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Alerta',
       template: $scope.alertMessage
     });

     alertPopup.then(function(res) {
     });
   };
  $scope.regProd = function(){
    //alert('existencia:'+$scope.regprod.precio);
    $scope.regprod.userId=userData.datos.userId;
    if(!$scope.regprod.nombre|| !$scope.regprod.precio||!$scope.regprod.existencia||!$scope.regprod.detalle){
      $scope.alertMessage = 'Faltan campos por llenar.';
      $scope.showAlert();

    }
    else if($scope.regprod.existencia==2 && !$scope.regprod.cantidad1){
      $scope.alertMessage = 'Debe ingresar una cantidad.';
      $scope.showAlert();
    }else if($scope.regprod.existencia==3 && !$scope.regprod.cantidad){
      $scope.alertMessage = 'Debe ingresar una cantidad.';
      $scope.showAlert();
    }else if($scope.regprod.existencia==3 && !$scope.regprod.unidad){
      $scope.alertMessage = 'Debe Seleccionar una unidad.';
      $scope.showAlert();
    }
    else{
      socket.emit('registerprod',$scope.regprod);
    }
    socket.removeListener('cantRegisprod');
    socket.on('cantRegis',function(){
      $scope.alertMessage = 'No se pudo registrar el producto!';
      $scope.showAlert();
    });
    socket.removeListener('regOk');
    socket.on('regOk',function(){
      $scope.alertMessage = 'Su producto ha sido registrado Exitosamente!';
      $scope.showAlert();
      $scope.modal.hide();
    }); 


  }
})

//#################### cajas ####################
.controller('CajasCtrl', function ($scope, NgTableParams) {
  



  $scope.payioCajas = {
    "data": [
      {
        "nombre": "usuario1",
        "fechaIni": "29/05/2016"
      }, {
        "nombre": "usuario2",
        "fechaIni": "30/05/2016"
      }, {
        "nombre": "usuario3",
        "fechaIni": "31/05/2016"
      }
    ]
  };

  $scope.query = {
    limit: 3,
  };

  $scope.payioVentas = {
    "ventas": [
      {
        "item": "aceite",
        "costo": {"value": 500.0}
      },{
        "item": "mango",
        "costo": {"value": 600.0}
      },{
        "item": "azucar",
        "costo": {"value": 3000.0}
      },{
        "item": "carne",
        "costo": {"value": 6000.0}
      },{
        "item": "agua",
        "costo": {"value": 1200.0}
      },{
        "item": "harina pan",
        "costo": {"value": 4000.0}
      }
    ]
  };

 $scope.tableParams = new NgTableParams({}, { dataset: $scope.payioVentas});
  
})





;
