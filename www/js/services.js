angular.module('starter.socketServices', [])

.factory('socket',function(socketFactory){
    //Create socket and connect to http://chat.socket.io 
    var myIoSocket = io.connect('https://54.149.254.78:1443', {'forceNew': true});

    mySocket = socketFactory({
        ioSocket: myIoSocket
    });

    return mySocket;
})

/*.service('userData', function () {

  this.datos = [];
  
  this.getdatos =function() {
    return this.datos;
  }
})*/

//.service('datosService',function(){
//  	this.fecha = [];
//  	this.monto = [];
//
//  	this.getfecha = function(){
//  		return this.fecha;
//  	}
//  	this.getmonto = function(){
//  		return this.monto;
//  	}
//})

//###########################servic###############################3333

.service('pagoService', function(){
 this.pago = {};

  this.givePago = function(){

    return this.pago;
  }
})
.service('EnlaceService', function(){
 this.datenl = {};

  this.giveDat = function(){

    return this.datenl;
  }
})
.service('userData', function(){
 this.datos = {};

  this.givePago = function(){

    return this.datos;
  }
})
.service('ventas', function(){
 this.ventas = {};

  this.giveVentas = function(){

    return this.ventas;
  }
})
.service('invent', function(){
 this.inventario = '';

  this.giveInven = function(){

    return this.inventario;
  }
})

.service('Cajas', function(){
 this.enlazado = {idmaster:0};

  this.giveEnlazado = function(){

    return this.enlazado;
  }
})


.service('histcob', function(){
 this.cob = [];
 this.cobext = [];
 this.totcob='';
 this.counthist=0;

  this.giveHistcob = function(){

    return this.cob;
  }
  this.givecounthist = function(){

    return this.counthist;
  }
})
.service('detalle', function(){
 this.detprod = {};

  this.giveDet = function(){

    return this.detprod;
  }
})



;