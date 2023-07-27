// Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo 
// y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
let auto = {
    color: "rojo",
    marca: "volkswagen",
    modelo: 2017,
    encendido: false,
    encenderApagar : function () {
        this.encendido=!this.encendido
    }
}
// Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, 
// mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
    constructor(alto,ancho){
    this.alto = alto;
    this.ancho = ancho;
}
mostrarProp() {
console.log(`El rectangulo tiene de alto = ${this.alto} y de ancho = ${this.ancho}`)
}
modProp(alto,ancho) {
this.alto = alto
this.ancho = ancho
this.mostrarProp()
}
calcularPerimetro(){
    let perimetro = 2 * (this.alto+this.ancho)
    console.log(`El perimetro del rectangulo es ${perimetro}`)
}
calcularArea(){
let area = this.alto * this.ancho
    console.log(`El área del rectangulo es ${area}`)
}
}

let rectangulo1 = new Rectangulo(4,4)

// Escribe una clase Producto para crear objetos. Estos objetos, 
// deben presentar las propiedades código, nombre y precio, además del método imprime datos, 
// el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores 
// de los tres objetos instanciados.

class Productos {
    constructor(codigo, nombre, precio){
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;    
    }
imprimirDatos(){
    document.write("<ul><li>CODIGO:"+ this.codigo+"</li><li>CODIGO:"+ this.nombre+"</li><li>CODIGO:"+ this.precio+"</li></ul>")
}
}

let productos = [new Productos("001","azucar","100"), new Productos("002", "yerba", "$150"), new Productos("003","galletas","$300")]

 productos.forEach((producto) => {
  producto.imprimirDatos();
});

// Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
// Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona 
// creada y cual es el rasgo característico de esta generación.

class Persona {
    constructor (nombre, apellido, fechanacimiento, edad, DNI, sexo, peso, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = fechanacimiento;
    this.edad = edad;
    this.dni = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    }
    mostrarGen(){
    switch (true) {
        case this.nacimiento >= 1930 && this.nacimiento <= 1948:
            console.log(`La persona pertenece a la Generacion: "Silent Generation" (Los niños de la postguerra) y su rasgo caracteristico es la Austeridad 😑`)
            break; 
    case this.nacimiento >= 1949 && this.nacimiento <= 1968:
            console.log(`La persona pertenece a la Generacion: "Baby Boom" y su rasgo caracteristico es la Ambicion 🤑`)
            break;
    case this.nacimiento >= 1969 && this.nacimiento <= 1980:
            console.log(`La persona pertenece a la Generacion: "X" y su rasgo caracteristico es la Obesion por el éxito 😎`)
            break;
    case this.nacimiento >= 1981 && this.nacimiento <= 1993:
            console.log(`La persona pertenece a la Generacion: "X" y su rasgo caracteristico es la Frustracion 🥴`)
            break;
    case this.nacimiento >= 1994 && this.nacimiento <= 2010:
            console.log(`La persona pertenece a la Generacion: "X" y su rasgo caracteristico es la Irreverencia 😋`)
            break;
    }   
    }
    // esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
    esMayorEdad(){
        if (this.edad>=18) {
            console.log(`La persona es mayor de edad`)}
            else {
            console.log(`La persona no es mayor de edad`)    
            }}

    // mostrarDatos: devuelve toda la información del objeto.
            
    mostrarDatos(){
 document.write("<ul><li>NOMBRE:"+ this.nombre+"</li><li>APELLIDO:"+ this.apellido+"</li><li>FECHA DE NACIMIENTO:"+ this.nacimiento+"</li><li>EDAD:"+ this.edad+"</li><li>DNI:"+ this.dni+"</li><li>SEXO:"+ this.sexo+"</li><li>PESO:"+ this.peso+"</li><li>ALTURA:"+ this.altura+"</li></ul>")       
}

// generaDNI(): genera un número aleatorio de 8 cifras.
// Para generar la funcion del DNI aleatorio use Math
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random#obtener_un_n%C3%BAmero_entero_entre_dos_valores_determinados

generarDNI(){
    let min = Math.ceil(11111111);
  let max = Math.floor(99999999);
  return Math.floor(Math.random() * (max - min) + min); 
  }
    }