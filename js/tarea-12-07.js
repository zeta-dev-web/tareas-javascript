// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
const parOImpar = (num) => {
if(num % 2 == 0){
alert(`El numero es par`)
}
else{
alert(`El numero es impar`)
}
}

// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
const minusOMayus = (texto) => {
let mayuscula = false;
let minuscula = false;
let textoSinEspacios = texto.split(" ").join("");
for (let i = 0; i < textoSinEspacios.length; i++) {
    if (textoSinEspacios[i] == textoSinEspacios[i].toUpperCase()){mayuscula = true}
  if (textoSinEspacios[i] == textoSinEspacios[i].toLowerCase()) {
    minuscula = true;
  }
}
if (mayuscula == true && minuscula == true){
console.log(`el texto contiene mayusculas y minisculas`)
}
else if(mayuscula){
console.log(`el texto solo contiene mayusculas`)}
else if(minuscula){
console.log(`el texto solo contiene minusculas`)
}
}
// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
let ladoA = Number(prompt(`Ingrese el valor de lado A`))
let ladoB = Number(prompt(`Ingrese el valor de lado B`))
const perimetro = (lado1,lado2) => 2*(lado1+lado2)

while (isNaN(ladoA) || isNaN(ladoB)) {
alert(`ingrese nuevamente el valor de los lados en numeros (Ejem. 15)`)
ladoA = Number(prompt(`Ingrese el valor en numeros de lado A`))
ladoB = Number(prompt(`Ingrese el valor en numeros de lado B`))
}
console.log(`El perimetro es ${perimetro(ladoA,ladoB)}`)

// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
let numero = Number(prompt(`Ingrese un numero`))
const tabla = (num) => {
 let por1 = num*1
 let por2 = num*2
  let por3 = num*3
 let por4 = num*4
  let por5 = num*5
 let por6 = num*6
  let por7 = num*7
 let por8 = num*8
  let por9 = num*9
 let por10 = num*10
    alert(
    `${num} x 1 = ${por1}\n${num} x 2 = ${por2}\n${num} x 3 = ${por3}\n${num} x 4 = ${por4}\n${num} x 5 = ${por5}\n${num} x 6 = ${por6}\n${num} x 7 = ${por7}\n${num} x 8 = ${por8}\n${num} x 9 = ${por9}\n${num} x 10 = ${por10}`
  );
}
while (isNaN(numero)) {
alert(`ingrese nuevamente un numero (Ejem. 5)`)
numero = Number(prompt(`Ingrese un numero`))
}
tabla(numero)