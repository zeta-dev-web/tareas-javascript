let numeroDni = 0
let resto = 0
let letraDni = ""

while (true){
numeroDni = (prompt(`Ingresar el numero de DNI sin puntos (Ejemplo: 24786412)`))
if (numeroDni.indexOf(".")!== -1 || isNaN(numeroDni) || numeroDni > 99999999 || numeroDni <= 0) {
alert(`⛔Error: Debe ingresar un número válido entre 0 y 99999999 sin puntos`)
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
