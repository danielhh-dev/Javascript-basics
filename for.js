//FOR


//Creamos un arreglo con el nombre de los estudiantes
var estudiantes = ["Fanny", "Danny", "Fernando", "Nathas"];

//Creamos una funcion que reciba como argumento el nombre de un estudiante y luego lo imprima por consola
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
} 

// mandamos a llamar a la funcion dentro de un for el cual recibe como argumento cada uno de los indices del arreglo, el indicce cambia cuando la variable iterativa cambia
for (var i = 0; i < estudiantes.length ; i++){
    saludarEstudiantes(estudiantes[i]);
}

//Otra manera de realizar la misma tarea
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
