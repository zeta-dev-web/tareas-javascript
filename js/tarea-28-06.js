// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
console.warn(`🦾 BIENVENIDO, COMENZEMOS ➡️`);
// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write(`Hello World 🙋‍♂️🌎`)
// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
console.log(3 + 5)
// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
let nombreUsuario = (prompt("➡️Ingrese su nombre de usuario"))
console.log(`👋Hola ${nombreUsuario}`)
// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
let numeroUno = (parseInt(prompt("Ingrese un Número")))
let numeroDos = (parseInt(prompt("Ingrese otro Número para ser ➕ al anterior")))
console.log(numeroUno + numeroDos)
// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let numUno = (parseInt(prompt("Ingrese un Número")))
let numDos = (parseInt(prompt("Ingrese otro Número diferente al primero")))
if (numUno > numDos) {
    console.log(`El ${numUno} es el número mayor✅`);
}
else {
if(numUno == numDos) {
    console.log(`Debias ingresar números diferentes, ${numUno} y ${numDos} son iguales 😒`);
}
else{
console.log(`El ${numDos} es el número mayor✅`);
}
}
// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let primerNum = (parseInt(prompt(`Seguimos con los Números 😅 Ingrese otro`))) 
let segundoNum = (parseInt(prompt(`Ingrese otro número más por favor 🙏`)))
let tercerNum = (parseInt(prompt(`Ingrese el último y no le pido más 😇`)))
let mayor = Math.max(primerNum,segundoNum,tercerNum)
console.log(`El número ${mayor} es el mayor🤖`)
// 8.- Escribe un programa que pida un número y diga si es divisible por 2
let numDivisible = (parseInt(prompt(`Ingrese un número y veremos si es divisible en 2️⃣`)))
if (isNaN(numDivisible)) {
  console.warn(`Te pedí un número 😠`);}
else {
    if (numDivisible % 2 == 0) {
console.log(`${numDivisible} es divisible en 2️⃣ Excelente!`)
}
else{
console.log (`Lo siento 😑 ${numDivisible} no es divisible en 2️⃣`)
}
}

// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let numeroDiv = parseInt(prompt`🔹Ingrese un Número y verificaremos si es divisible en 2, 3, 5 o 7 🔹`)
if (isNaN(numeroDiv)) {
console.error(`No ingresaste un número 🙄`);}
 else {
if (numeroDiv % 2 == 0 || numeroDiv % 3 == 0 || numeroDiv % 5 == 0 || numeroDiv % 7 == 0)  {
console.log(`Buenisimo!👌 el número ingresado ${numeroDiv} es divisible en 2️⃣ 3️⃣ 5️⃣ o 7️⃣ `)
} 
else {
console.log(`Lo Lamento, el número ingresado ${numeroDiv} no es divisible en 2️⃣ 3️⃣ 5️⃣o7️⃣ `)
}    
 }
// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
if (numeroDiv % 2 == 0 || numeroDiv % 3 == 0 || numeroDiv % 5 == 0 || numeroDiv % 7 == 0)
{alert(`✔️ ahora verificaremos en cuales de todos ellos es divisible`)}
else {;    
}
let divisibles= []

if (numeroDiv % 2 == 0) {
  divisibles[divisibles.length] = 2;
}
if (numeroDiv % 3 == 0) {
  divisibles[divisibles.length] = 3;
}
if (numeroDiv % 5 == 0) {
  divisibles[divisibles.length] = 5;
}
if (numeroDiv % 7 == 0) {
    divisibles[divisibles.length] = 7;
} 
if (divisibles.length > 0) {
console.log(`El número es divisble en ${divisibles}🤯`)
}