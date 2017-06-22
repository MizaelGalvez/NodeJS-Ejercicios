const Eventos = require('events');

class Auto extends Eventos {      //extendemos de eventos.
  constructor(){
    super();
    this.contador = 0;
  }

  arracar(){
    console.log("el auto arranca");
    this.emit('arranco', this.contador); // recordar que este evento que emitamos, es que que sera eschucaho y realizado por el .ON con este mismo nombre
    this.contador += 1;
                    //podemos tambien enviar variables por medio de la emicion del evento

  }

}


var charanga = new Auto();

//para escuchar eventos, usamos el metodo ON

charanga.on('arranco', function(c){ // se ejecutaro solo si emitamos un evento con este mismo nombre de 'arranco'
                                // podemos capturar infinidad de variables.

  console.log("escuchamos el evento y ejecutamos la funcion y es la ",c," vez que se ejecuta");
})


charanga.arracar();
charanga.arracar();
charanga.arracar();
charanga.arracar();
