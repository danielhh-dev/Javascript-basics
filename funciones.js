//FUNCIONES

//Declarativa
function calculaEdad() {
    return 26;
} //reserva un espacio en memoria para guardar el calculo obtenido dentro de la funcion

//Expresion 
var miEdad = function(a,b){
    return a + b;
} //Declara una variable que contiene dentro una funcion, tambien se conocen como funciones anonimas, ya que la misma funcion no tiene nombre



//EJEMPLOS

function saludarEstudiantes(estudiante) {
    console.log("estudiante");
} 

saludarEstudiantes("Diego"); //Llama a la funcion, le pasa el argumento y lo imprime en consola



function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`); //Imprime un string donde por dentro sustituye el valor del argumento   
} 

saludarEstudiantes("Diego"); //Imprime en sonsola "Hola Diego"



function sumar(a,b) {
    var resultado = a + b;
    return resultado; //regresa el valor guardado en la variable 
} // ó
function sumar(a,b) {
    return a + b; //regresa la suma
}

sumar(1,2); // La consola regresa el valor de 3


// Diferencias:

// A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.