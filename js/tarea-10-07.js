// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

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