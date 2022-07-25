// Condicionales

// si esta lloviendo entonces
//     llevo pilotp
//     llevo paraguas
// fin si

// EJERCICIO 1

// let edad = 125;

// if (edad < 18)
// {
//     console.log("Es menor de edad");
// }
// else if (edad >= 18 && edad < 35)
// {
//     console.log("Es muy joven");
// }
// else if (edad >= 35 && edad < 50) {
//     console.log("Es bastante joven");
// }
// else if (edad >= 51 && edad < 120) {
//     console.log("La juventud esta en la actitud");
// }
// else {
//     console.log("Edad incorrecta");
// }

//EJERCICIO 2

// let ubicacionFinalTorneo = prompt("Ingrese su posicion");

// if (ubicacionFinalTorneo == 1) {
//     console.log("Medalla de Oro");
// }
// else if (ubicacionFinalTorneo == 2) {
//     console.log("Medalla de Plata");
// }
// else if (ubicacionFinalTorneo == 3) {
//     console.log("Medalla de Bronce");
// }
// else {
//     console.log("No ha conseguido medalla");
// }

//EJERCICIO 3

// let edad = prompt("Cual es su edad?")
// let genero = prompt("Su genero(M/F)?");

// if (edad => 60 && genero == "F")
//     console.log("")
// if (edad => 65 && genero == "M")

//     if ((genero == "F" && edad >= 60) || (genero == "M" && edad >= 65)) {
//         console.log("Usted puede Jubilarse");
//     }
//     else {
//         console.log("Usted no puede Jubilarse aun");
//     }

// if (genero == "M") {
//     if (edad >= 65) {
//         console.log("Usted puede jubilarse");
//     }
//     else {
//         console.log("Usted no puede jubilarse aun");
//     }
// }
// else if (genero == "F") {
//     if (edad >= 60) {
//         console.log("Usted puede jubilarse");
//     }
//     else {
//         console.log("Usted no puede jubilarse aun");
//     }
// }
// else {60
//     console.log("Genero no comtenplado");
// }

//EJERCICIO 4.1

// let mayor;
// let num1, num2;
// num1 = 16;
// num2 = 8;

// console.log("El mayor es ")
// if (num1 > num2) {
//     console.log(num1);
// }
// else {
//     console.log(num2);
// }

//EJERCICIO 4.2 (Operador ternario) da el mismo resultado que en el ejercicio 4.1 pero con otra sintaxis el THEN esta representado por (?), y el es por los (:).

// mayor = num1 > num2 ? num1 : num2;

// console.log(mayor);

// EJERCICIO 5

// let sonIguales = 6 == 6;

// EJERCICIO 6.1

// let dia = parseInt(prompt("Ingrese un numero de la semana del 1 al 7"));

// if (dia == 1){
//     console.log("Domingo")
// }
// if (dia == 2){
//     console.log("Lunes")
// }
// if (dia == 3){
//     console.log("Martes")
// }
// if (dia == 4){
//     console.log("Miercoles")
// }
// if (dia == 5){
//     console.log("Jueves")
// }
// if (dia == 6){
//     console.log("Viernes")
// }
// if (dia == 7){
//     console.log("Sabado")
// }

// EJERCICIO 6.2 es igual al de arriba pero otro metodo

// switch (dia) {
//     case 1: console.log("Domingo");
//         break;
//     case 2: console.log("Lunes");
//         break;
//     case 3: console.log("Martes");
//         break;
//     case 4: console.log("Miercoles");
//         break;
//     case 5: console.log("Jueves");
//         break;
//     case 6: console.log("Viernes");
//         break;
//     case 7: console.log("Sabado");
//         break;
//     default: console.log("Numero Incorrecto");
// }

// CONDICIONALES DE DIFERENTES TIPOS EN UN IF

let num = null;

function verificarPositivo(cualquierNumero) {
	if (cualquierNumero >= 0) {
		return "es positivo";
	}
}

if ("") {
	console.log("1. soy un string vacio");
} else {
	console.log("1.1. soy un string vacio");
}

if (!num) {
	console.log("2. soy un string");
}
if (50 - 60) {
	console.log("3. soy un negativo");
}
if (50 + 60) {
	console.log("4. soy un positivo");
}
if (-60) {
	console.log("5. soy un cero");
}
if (verificarPositivo(num)) {
	console.log("6. soy un positivo");
}
