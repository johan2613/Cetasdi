let peso;
let altura;
let imc;
peso = parseFloat(prompt("Ingrese su peso"));
altura = parseFloat(prompt("Ingrese su altura"));
imc = peso/(altura**2);
console.log("Tu IMC es " + imc);