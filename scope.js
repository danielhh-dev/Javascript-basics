
//SCOPE GLOBAL
var miNombre = "Daniel";

    function nombre() {  //SCOPE LOCAL
        var miApellido = "Hernandez";
        console.log(miNombre + " " + miApellido);
    }

nombre(); //Llamamos a la funcion e imprime "Daniel Hernandez"

console.log(miApellido) //Marca error ya que la variable miApellido esta declarada en scope local


