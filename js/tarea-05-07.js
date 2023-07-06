// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
let edad = 0
do {
edad = (parseInt(prompt(`Ingrese la edad de la persona:`)))    
if (!isNaN(edad)) {
    if(edad >= 18){
   alert(`La persona esta autorizada a sacar la licencia`)
 }
 else{alert(`La persona no esta autorizada a sacar la licencia`)}
    }        
} while (isNaN(edad));
// 2- Escribir un programa que solicite una nota (número) de 0  a 10. 
let nota = 0

while (true) {
  nota = prompt("Ingrese la nota:");
  if (isNaN(nota)) {
    alert("Error: debe ingresar un número.");
  } 
  else {
    break
  }
}
   switch (true) {
        case nota <= 2:
            alert(`Muy Deficiente`)
            break;
    case nota <= 4:
            alert(`Deficiente`)
            break;
                case nota <= 6:
            alert(`Suficiente`)
            break;
                case nota == 7:
            alert(`Bien`)
            break;
            case nota <= 9:
            alert(`Notable`)
            break;
            case nota == 10:
            alert(`Sobresaliente`)
            break;
        default:
            case nota > 10:
            alert(`Numero Erroneo`)
            break;
    }
// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
let texto = prompt("Ingrese un texto");
let cadenaDeTexto = "";
while (texto) {
 cadenaDeTexto = cadenaDeTexto + texto + " - " 
  let respuesta = confirm("¿Desea agregar otro texto?");
  if(respuesta){
  texto = prompt("Ingrese otro texto");
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
   numero = parseInt(prompt("Ingrese un numero"))
   if(isNaN(numero)){
    alert(`Debe ingresar un numero valido`)
    }
   else {
 suma += numero} 
  let respuesta = confirm("¿Desea agregar otro numero?")
  if(respuesta){
}
else {
    break
}
}
alert(`la suma de todos los numeros es ${suma}`)

let numeroDni = 0
let resto = 0
let letraDni = ""

while (true){
numeroDni = parseInt(prompt(`Ingresar el numero de DNI`))
if (isNaN(numeroDni) || numeroDni > 99999999 || numeroDni <= 0) {
alert(`Debe ingresar un numero valido entre 0 y 99999999`)
}
else{
resto = parseInt(numeroDni % 23)
switch (resto) {
    case 0:
        letraDni = "T"
        break;
    case 1:
        letraDni = "R"
        break;
    case 2:
        letraDni = "W"
        break;
    case 3:
        letraDni = "A"
        break;
    case 4:
        letraDni = "G"
        break;
    case 5:
        letraDni = "M"
        break;
    case 6:
        letraDni = "Y"
        break;
    case 7:
        letraDni = "F"
        break;
    case 8:
        letraDni = "P"
        break;
    case 9:
        letraDni = "D"
        break;
    case 10:
        letraDni = "X"
        break;
    case 11:
        letraDni = "B"
        break;
    case 12:
        letraDni = "N"
        break;
    case 13:
        letraDni = "J"
        break;
    case 14:
        letraDni = "Z"
        break;
    case 15:
        letraDni = "S"
        break;
    case 16:
        letraDni = "Q"
        break;
    case 17:
        letraDni = "V"
        break;
    case 18:
        letraDni = "H"
        break;
    case 19:
        letraDni = "L"
        break;
    case 20:
        letraDni = "C"
        break;
    case 21:
        letraDni = "K"
        break;
    case 22:
        letraDni = "E"
        break;

    default:
        break;
}
alert(`${letraDni}`)
break;
}
}
