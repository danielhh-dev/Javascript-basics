var estudiantes = ["Fanny", "Danny", "Nathas", "Fernando"];

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}

while (estudiantes.length >0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}