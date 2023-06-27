// Tarea 1
// ------------
// 1 - ingreso el apellido
let apellido = "Juarez"
console.log(apellido)
// 2 - calcular cantidad de caracteres
console.log(apellido.length);
// 3 - obtener la última letra del apellido
console.log(apellido.at(-1))
// Tarea 2
// ------------
// Dada la siguiente palabra "marmota"
let palabra = "marmota"
// 1 - Pasarla a mayuscula
console.log(palabra.toUpperCase());
// 2 - Capitalizar la palabra (Marmota)
let Marmota = (palabra.at(0).toUpperCase() + palabra.substring(1));
console.log(Marmota)
let Marmota2 = (`${palabra.at(0).toUpperCase()}${palabra.substring(1)}`);
console.log(Marmota2)
