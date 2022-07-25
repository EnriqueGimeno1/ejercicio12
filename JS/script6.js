// Arreglos y Funciones

let numeros = [10, 45, 16, 13];

let doble = numero => numero * 2;

let dobles = numeros.map((numero) => { return numero * 2 });
// simplificado let dobles = numeros.map(numero =>numero * 2);

let dobles1 = numeros.map(doble);

let nums = [2, 4, 6];

//Recorrer el Arreglo con un ciclo

// En el for con respecto a los arrays se puede usar .length que seria la longitud completa del array, seria una forma que lo recorra completo, en vez de utilizar ( i <= 2)que es en el caso de la variable ( nums )

for (let i = 0; i <= 2; i++){
    console.log(nums[i]);
}

let duplicado = [];

for (let i = 0; i < nums.length; i++){
    duplicado.push(nums[i]*2)
}

let nombres = ["raul", "pedro", "juana"];

for (let j = 0; j < nums.length; j++){
    console.log("hola " + nombres[j]);
}

//Ejemplo de for each

console.log("Ejemplo de forEach")
nombres.forEach(element => {
    console.log(element);
});









// Creacion de una funcion similar al map

let arr = [1, 1, 2, 35, 7, 3, 2];
let doble1 = function (num) {
    return num * 2;
}

let map = (func, list) => {
    newarr = [];
    for (let i = 0; i < arr.length; i++){
        newarr.push(func(list[i]))
    }
    return newarr
}

arr = (map(doble1, arr));