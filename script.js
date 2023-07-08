// Variable de tipo string
let texto = "Hola, soy byron.";

// Método slice - devuelve una parte del texto desde el índice especificado
console.log(texto.slice(0, 4)); // Imprime: "Hola"

// Método includes - verifica si el texto contiene una subcadena específica
console.log(texto.includes("soy")); // Imprime: true


// Variable de tipo number
let numero = 10.5;

// Método Math.floor - redondea el número hacia abajo al entero más cercano
console.log(Math.floor(numero)); // Imprime: 10

// Método toExponential - devuelve una representación en notación exponencial del número
console.log(numero.toExponential(2)); // Imprime: "1.05e+1"


// Variable de tipo boolean
let bool = true;

// Operador de comparación (===) - compara si dos booleanos son iguales
console.log(bool === true); // Imprime: true

// Método valueOf - devuelve el valor primitivo del booleano
console.log(bool.valueOf()); // Imprime: true


// creacion de  array
let array = [1, 2, 3, 4, 5];

// Método join - une todos los elementos del array en un string utilizando un separador
console.log(array.join("-")); // Imprime: "1-2-3-4-5"
º   
// Método reverse - invierte el orden de los elementos en el array
console.log(array.reverse()); // Imprime: [5, 4, 3, 2, 1]


// creacion de objeto
let objeto = { nombre: "Juan", edad: 25 };

// Método values - devuelve un array con los valores del objeto
console.log(Object.values(objeto)); // Imprime: ["Juan", 25]

// Método toString - convierte el objeto a un string
console.log(objeto.toString()); // Imprime: "[object Object]"

// Variable con valor definido
let valorDefinido = "Hola";

// Comprobar si el valor es null o undefined
console.log(valorDefinido === null); // Imprime: false
console.log(valorDefinido === undefined); // Imprime: false