//var, let, const (3 tipos de variables pero var se esta dejando de usar)

//tipos de variables primitivos: String,number, null, bollean, underfined, symbol.

//tipo de variables de objetos: Array y function, son los que se pasan por referencia

//Tipo de dato alfanumerico

var nombre;

nombre = "Jose";
nombre = "Mauricio";

//Tipo de dato numerico

let numero1;

numero1 = 8;

let numero2 = 6;

let suma = numero1 + numero2;

let numero3 = "5";

suma = suma + parseInt(numero3); // la funcion parseInt transforma el texto en un entero siempre y cuando en el texo haya un numero

console.log(suma);

document.write("La suma de numero1 y numero2 es " + suma);

// Tipo de dato booleano (verdadero o falso)

let valido = true;

valido = !valido; //(cuando se coloca "!" es la negacion de la variable bollean)

// Para hacer la salida directa por consola sin tener que llamar a la instruccion

// console.log(valido);

// Operadores (expresiones)

// 1) Matematicos (+, -, /, *, %)

// Suma

suma - numero1 + numero2;

let multiplicar = numero1 * numero2;

let modulo = numero1 % numero2; // este operador es Resto que seria lo que queda de la division ejemplo 9%4 = 1

// 2) Operadores de concatenación

let nom = "Juan";

let ape = "perez";

let nombreCompleto = nom + "" + ape;

// console.log(nom + "" + ape);

// console.log(nom,ape);

// cuando hablamos de string es una cadena de caracteras o texto, para poder sumar numeros dentro de un string se debe colocar los numeros o las variables dentro de ${}.

nombreCompleto = `Mi nombre de pila es ${nom} y mi apellido es ${ape}`;

let textoSuma = `La suma total de numero1, numero2 y numero3 es ${numero1+numero2+ parseInt(numero3)}`;

// 3) Operadores de Comparación

// ==, >, >=, <, <=, !=

// == compara contenido
// === compara contenido y tipo de dato
// la igual en las variables depende del tipo de dato: primitivo o compuesto (funciones o raice), los datos primitivos atacan al valor, y los datos compuestos atacan a la posicion de memoria a esto se le conoce como (pasar por referencia y pasar por valor)

let esMayor = 8 > 6;

let edad = 18;

let mayorDeEdad = edad >= 18;

// 4) Operadores logicos

// && (Y, ambos operandos deben ser verdaderos para que la expresion final sea verdadera)

let resultado = 8 > 4 && 10 > 11

// || (O, si un operandos es verdaderos la expresion final sera verdadera)

resultado = 8 > 4 || 10 > 11

// ! (negacion de una expresion, si es verdadero lo hace falso, y viseversa)