// Herencia prototipal en JavaScript

// Funcion "Clase" Vehiculo
function Vehiculo(marca) {
	this.marca = marca;
}

Vehiculo.prototype.informacion = function () {
	return `Marca del vehiculo: ${this.marca}`;
};

// Funcion "Clase" Coche (hereda de Vehiculo)
function Coche(marca, modelo) {
	Vehiculo.call(this, marca);
	this.modelo = modelo;
}

Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;
Coche.prototype.mostrarModelo = function () {
	return `Modelo del coche: ${this.modelo}`;
};

// Instancia de la clase Coche
let miCoche = new Coche("Tesla", "Model Y");
console.log(miCoche.mostrarModelo()); // Modelo del coche: Model Y
console.log(miCoche.informacion()); // Marca del vehiculo: Tesla
