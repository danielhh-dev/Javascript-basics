//CONSTRUCTOR

//Funcion que sirve como molde para instanciar (crear) objetos

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Creamos un objeto usando el constructor 

var autoNuevo = new auto("Tesla", "Model 3", 2020);

//Ejercicio

// Crear una funcion que cree 30 objetos de manera automatica
var marca = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",	
   "Cadillac",
    "Caterham",
    "Chevrolet",
    "Citroen",
    "Dacia",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Infiniti",
    "Isuzu",
    "Iveco",
    "Jaguar"   	 	 
];

var modelo = [
    "C-Max",
    "Fiesta",
    "Focus",
    "Mondeo",
    "Ka",
    "S-MA",
   " B-MAX",
    "Grand C-Max",
    "Tourneo Custom",
    "Kuga",
    "Galaxy",
    "Grand Tourneo Connect",
    "Tourneo Connect",
    "EcoSport",
    "Tourneo Courier",
    "Mustang",
    "Transit Connect",
    "Edge",
    "Ka+"
];

var annio = [
    "1988",
    "1989",
    "1978",
    "1989",
    "1928",
    "1989",
    "1968",
    "1989",
    "1888",
    "1989",
    "1288",
    "1989",
    "1938",
    "1989",
    "1988",
    "1999",
    "1983",
    "1989",
    "1918"
];

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

for (var i = 0; i < marca.length && i < modelo.length && i < annio.length; i++){
    var newAuto = new auto(marca[i], modelo[i], annio[i]);
    console.log(newAuto);
}