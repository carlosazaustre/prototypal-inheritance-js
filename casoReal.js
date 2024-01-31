// Función "Clase" Usuario
function Usuario(nombre, email) {
	this.nombre = nombre;
	this.email = email;
}

Usuario.prototype.informacion = function () {
	return `Nombre: ${this.nombre}, Email: ${this.email}`;
};

// Funcion Usuario Administrador (hereda de Usuario)
function Administrador(nombre, email) {
	Usuario.call(this, nombre, email);
}

Administrador.prototype = Object.create(Usuario.prototype);
Administrador.prototype.constructor = Administrador;
Administrador.prototype.accesoTotal = function () {
	return `El usuario ${this.nombre} tiene acceso total al sistema`;
};

// Función Usuario Moderador (hereda de Usuario)
function Moderador(nombre, email) {
	Usuario.call(this, nombre, email);
}

Moderador.prototype = Object.create(Usuario.prototype);
Moderador.prototype.constructor = Moderador;
Moderador.prototype.moderarContenido = function () {
	return `El usuario ${this.nombre} puede moderar contenido`;
};

// Instancias de varias clases
let admin = new Administrador("Alice", "alice@example.com");
let mod = new Moderador("Bob", "bob@example.com");
console.log(admin.informacion()); // Nombre: Alice, Email: alice@example
console.log(mod.informacion()); // Nombre: Bob, Email: bob@example.com

console.log(mod.accesoTotal()); // No Funciona.
console.log(admin.accesoTotal()); // El usuario Alice tiene acceso total al sistema
console.log(mod.moderarContenido()); // El usuario Bob puede moderar contenido
console.log(admin.moderarContenido()); // No Funciona.

let user = new Usuario("Carlos", "carlos@example.com");
console.log(user.informacion()); // Nombre: Carlos, Email: carlos@example.com
console.log(user.accesoTotal()); // No Funciona.
console.log(user.moderarContenido()); // No Funciona.
