var resultadoOperacion = function(a,b){
    c = a + b;
    return c;
}

var segundoResultado = (a,b) => a + b; //reduciondo una Funcion, menos uso de caracteres
// se puede seguir usando los corchetes y el return, para secuencias mas largas, y es totalmente aseptable.



console.log(resultadoOperacion(3,8) , segundoResultado(12,8) );
