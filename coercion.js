
//COERCION
var a = 20; //Este es un dato de tipo numero
var b = a + ""; //Este al concatenarlo con un string se convierte en un numero 20 de tipo string

typeof b; //Muestra en consola "String"

//Convertir la variable a de tipo numero a string mediante funciones

var c = String(a);

console.log(c); //Muestra en consola el numero 20 de tipo string