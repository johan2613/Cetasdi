let nombre;
let año;
let culmpleaños;
let edad;
nombre = prompt("Ingrese su nombre");
año = parseInt(prompt("Digite el año actual"));
culmpleaños = parseInt(prompt("Escriba su fecha de nacimiento"));
edad = año - culmpleaños;
console.log("Hola " + nombre + ", tienes "  + edad + " años");