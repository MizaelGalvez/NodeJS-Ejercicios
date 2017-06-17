// callback
// nos permiten ejecutar secuencias de codigo tras ejecutar una accion


//Ejemplo es el nombre de la Variable.... como anteriormente usamos la palabra OBJETO
var EjemploCALLBACK = function () {
};



EjemploCALLBACK.prototype.accion = function (VariableRecibida, callback) {
    if (VariableRecibida == 200) {
      console.log("Recibi el numero 200");
    }else{
      console.log("no recibi ningun 200");
    }

 // llamamos el callback al final de la secuencia. he implementamos un if, para validar que sea Funcion. por que si no es asi, tronara la secuencia
// no Olviden Siempre Validar tipos de datos, para evitar Problemas con Usuarios.
    if (typeof callback == 'function') {
      callback();
    }else{
      console.log("el parametro no es una Funcion");
    }


};

var o = new EjemploCALLBACK();
o.accion(200, "hola, pero no soy una Funcion"); // le enviamos el numero 200, logicamente, en un futuro aqui utilizamos nuestra logica de negocio
//tomemos en cuenta que el segundo paremetro no es una funcion

o.accion(100, function(){
  console.log("se ejecuto el Callback, que simplemente es una funcion enviada como parametro");
  //dentro de esta funcion podemos utilizar mas logica de negocio.
});
