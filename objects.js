//OBJECTS

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}

miAuto.detalleDelAuto() //Imprime en consola "Auto Corolla 2020"