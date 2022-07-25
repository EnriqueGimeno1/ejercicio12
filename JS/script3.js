// Instrucciones ciclicas

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// While

let i = 0;

console.log("Antes del while");

while (i <= 10) {
    console.log(i);
    i = i + 1;
}

console.log("Despues del while");

// Do

do {
    console.log(i);
    i = i + 1;
} while (i <= 3);

// for

for (let j = 1; j <= 3; j++){
    console.log("J" + j);
}

// Contador

let contador = 0; // 0

contador = contador + 1; // 1

contador++; // 2
contador--; // 1

// Acumulador

let totalVentas = 0;

totalVentas = totalVentas + 30;

totalVentas = totalVentas + 56;

totalVentas = totalVentas + 10;

// las expresiones de abajo es lo mismo que lo de arriba 

totalVentas += 30;
totalVentas += 56;
totalVentas += 10;

let totSuma = 100;

totSuma -= 30;
totSuma = totSuma - 30;

