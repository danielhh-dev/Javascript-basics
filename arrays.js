//Arrays 

var frutas = ["manzana", "uva", "platano"];

console.log(frutas); //Imprime en consola ["manzana", "uva", "platano"]

console.log(frutas.length); //Imprime 4, que es el numero de elementos del array

console.log(frutas[0]); //Imprime el primer elemento "manzana"

var masFrutas = frutas.push("melon"); //Agrega melon como ultimo elemento del array

var masFrutas = frutas.pop("melon"); //Elimina melon como ultimo elemento del array

var nuevaLongitud = frutas.unshift("Tomate") //Agrega la fruta como primer elemento del array

var nuevaLongitud = frutas.shift("Tomate") //Elimina la fruta como primer elemento del array

var posicion = frutas.indexOf("manzana") // Muestra en consola la posicion de manzana 