// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
let edad = 0
while (true) {
edad = (parseInt(prompt(`👤 Ingrese la edad de la persona:`)))    
if (isNaN(edad)) {
alert(`⛔Error: Ingrese la edad en número (Ejemplo: 21)`)}
else{ if(edad >= 18){
   alert(`✅ La persona esta autorizada a sacar la licencia`)}
 else{alert(`❎ La persona no esta autorizada a sacar la licencia`)}
    break}}        
// 2- Escribir un programa que solicite una nota (número) de 0  a 10. 
let nota = 0
let bucle = true

while (bucle) {
  nota = parseInt(prompt("📒 Ingrese la nota (debe ser entre 0 y 10):"));
  if (isNaN(nota)) {
    alert("⛔Error: debe ingresar un número (Ejemplo: 10).")} 
 else if (nota > 10) {alert(`⛔ Número Erroneo (Debe ingresar entre 0 y 10)`)}           
           else{   switch (true) {
        case nota <= 2:
            alert(`Muy Deficiente 👎`)
            break;
    case nota <= 4:
            alert(`Deficiente 🤏`)
            break;
                case nota <= 6:
            alert(`Suficiente 🤲`)
            break;
                case nota == 7:
            alert(`Bien 👍`)
            break;
            case nota <= 9:
            alert(`Notable👏`)
            break;
            case nota == 10:
            alert(`Sobresaliente 🧠`)
            break;
        default:
            break    }
            bucle = false
}
}
// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
let texto = prompt("Ingrese un texto 🖋️");
let cadenaDeTexto = "";
while (texto) {
 cadenaDeTexto = cadenaDeTexto + texto + " - " 
  let respuesta = confirm("¿Desea agregar otro texto?");
  if(respuesta){
  texto = prompt("Ingrese otro texto 🖋️");
}
else {
    break
}
}
alert(cadenaDeTexto);
// 4- Realiza un script que pida números hasta que se pulse “cancelar”.
let numero = 0
let suma = 0;
let seguirIngresando = true

while (true) {
   numero = parseInt(prompt("Ingrese un número #️⃣"))
   if(isNaN(numero)){
    alert(`⛔Error: Debe ingresar un numero válido`)
    }
   else {
 suma += numero} 
  let respuesta = confirm("¿Desea agregar otro número?")
  if(respuesta){
}
else {
    break
}
}
alert(`la suma de todos los números es igual a ${suma}`)