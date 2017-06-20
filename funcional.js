// programacion Funcional

//1. inmutabilidad, en lugar de variables, son Valores.
// no alterar las variables Exitentes

var a = [1,2,3,4,5];

a[0] = 55; // esto no es programacion Funcional, por que alteramos la variable a


// lo correcto seria

var b = a.map((x) => x * 2); // asi generamos una variable con los valores ya procesados, y nuestra variable a sigue teniendo los mismo VALORES

console.log(a);
console.log(b);


// 2. funciones como parametros, o funciones que regresan funciones
//asi reutilizamos codigo

//3. utilizar los CALLBACKS

//4. regresar siempre un resutado unico
