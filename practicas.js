// programacion orientada a objetos
// ES6 .... class nueva manera de utilizar Javascript


// javascript es orientada a prototipos

var Objeto = function () {


}

Objeto.prototype.saludar = function (mensaje) {
  if (mensaje == "estas ahi ??") {
    console.log("si aqui estoy")
  }
}

var o = new Objeto()
o.saludar("estas ahi ??") // le enviamos un texto a la funcion para que se realice la simple condicional

//extendiendo las cualidades de los objetos, aun despues de averlos Creados. podemos extender su Prototypo
// le creamos la capacida de despedirce


Objeto.prototype.Despedirse = function() {
  console.log("Adios MIzael")
}

o.Despedirse()
