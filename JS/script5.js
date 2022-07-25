// Funciones

function sumar(num1, num2) {
    return(num1+num2)
};

// Funcion Tradicional

function saludar(nombre) {
    return "hola que tal " + nombre;
}

// Funciones Anonima

let saludar1 = function (nombre) {
                    return "hola que tal " + nombre;
}

// Funcion flecha

let saludar2 = (nombre) => {
        return "hola que tal " + nombre;
}

let saludar3 = nombre => "hola que tal " + nombre;

// Hacer una funcion de flecha que reciba un numero y devuelva el doble

// Esta instruccion es la misma que la de abajo let doble = numero => {return numero * 2 };

let doble = numero => numero * 2;

let suma = function (num1, num2) {
    return (num1 + num2);
}

//Estructura de control ciclico

function saludar4(num){
    return "hola que tal " + num;
}

console.log(saludar4(1000));

// for (let i = 1; i <= 10; i++){
//     console.log(saludar4(i));
// }

let num3 = 9;

let suma1 = function (num1, num2) {
    return (num1 + num2 + num3);
}
// let suma = 5 + 6;



// //Estructura de control ciclica

// function saludar4(num) {
//     return "hola que tal " + num;
// }
    

// for (let i = 1; i <= 10; i++) {
//     console.log(saludar4(i));
// }