var arreglo = [45, 51, 548, 684, 58, 41, 125];

// usemos Foreach, casi el mismo uso que en cualquier lenguaje, osea usemolo como itereador.

for (var i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);// la manera Tradicional de siempre
}

console.log("________inpresion del forEach_________");

arreglo.forEach(function(a,b){
  console.log(a,b);
})

console.log("________inpreso con notacion de flecha_________");

arreglo.forEach((a,b) => console.log(a,b) ); // practica esta notacion, puede ser muy util, familiarizarte de una ves con ella

console.log("_______manejo de datos__numeros mayores a un falor pasado por una funcion________");

// manejo de datos, FILTER

var numerosmayores = arreglo.filter((valor) => valor > 100);
console.log(numerosmayores);
console.log("________impresion de todo el arreglo, para confirmar datos_________");
console.log(arreglo);


//map, recibe tambien una funcion. y nos sirve para manipular datos
console.log("________cuadrados de numeros mayores a un numero_________");

var NumerosAlCuadrado = arreglo.map(function(valor){

  return valor * valor;

}).filter((dato) => dato > 3360); //podemos concatenar, y como podemos ver no se modificara nuetro arreglo inicial, pues todo el proseso se lo asignamos a una nueva variable

console.log(NumerosAlCuadrado);



//reduce. reducir a un resultado unico, despues de procesar el Arreglo

var ResultadoUnico = arreglo.reduce((acumulador, valorsiguiente) => acumulador + valorsiguiente, 0);//ultilizamos este cero, como el primer valor acumulado que usaremos)

console.log("________rusultado de la suma de todo el arreglo_________");

console.log(ResultadoUnico);// se pueden procesar objetos JSON, o cualquier otro tipo de objeto
