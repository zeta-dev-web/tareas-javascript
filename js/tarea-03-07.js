// En un establecimiento de juegos existen cuatro salas: Arcade, Consolas, Rol, Realidad Virtual. 
//Si un usuario paga 4 créditos puede acceder a todas, 
//si paga 3 solo podrá acceder a las tres primeras, 
//si paga 2 a las dos primeras y si paga 1 solo a la primera sala.
let creditos = parseFloat(prompt(`Ingrese los creditos disponibles:`));

switch (true) {
    case creditos == 1:
        alert(`El usuario solo puede ingresar a la Sala Arcade`)
        break;
    case creditos == 2:
        alert(`El usuario solo puede ingresar a las Salas Arcade y Consolas`)
        break;
    case creditos == 3:
        alert(`El usuario solo puede ingresar a las Salas Arcade, Consolas y Rol`)
        break;
    case creditos == 4:
        alert(`El usuario puede ingresar a todas las Salas`)
        break;
    default:
alert(`El usuario no tiene créditos`)
        break;
}
