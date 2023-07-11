// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// let frase = prompt("Ingrese una frase")
// let vocalesValidas = ["a","e","i","o","u","á","é","í","ó","ú"]
// let vocalesEnFrase = ""

// for (let index = 0; index < frase.length; index++) {
//      let letra = frase[index].toLowerCase();
//    if (letra.includes(vocalesValidas)) {
//    vocalesEnFrase.push(letra)
//    } 
// }
let frase = prompt("Ingrese una frase:");
let vocales = ["a","e","i","o","u","á","é","í","ó","ú"];
let vocalesEncontradas = [];
let texto = ""

for (let index = 0; index < frase.length; index++) {
  let letra = frase[index];
  if (vocales.includes(letra)) {
    vocalesEncontradas.push(letra) 
      }
  }
  texto = vocalesEncontradas.join("");
alert(texto);