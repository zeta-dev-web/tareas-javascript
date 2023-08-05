// 1. Cambiar el color de fondo de un elemento:
let parr1 = document.querySelector("#parr1")


// este 1er metodo lo hace cambiando el color del background desde la hoja de estilos
// const changecolor = ()=> {
//     if (parr1.style.background=="blue") {
//  parr1.style.background=""       
//     }
// else {parr1.style.background="blue"}
// }

//este 2do metodo, cambia el color del background utilizando una clase de boostrap
const changecolor = ()=> {
    if (parr1.classList=="text-align-center bg-primary") {
 parr1.classList="text-align-center"       
    }
else {parr1.classList="text-align-center bg-primary"}
}



// 2. Contador de clics:
let parr2 = document.querySelector("#parr2")
let clics = 0

const countClics = ()=>
{
parr2.classList = "text-align-center bg-warning"     
clics++
parr2.innerText = "Hiciste "+ clics +" clics en el boton 2" 
}

// 3. Cambiar el estilo de un elemento con el mouse:
let parr3 = document.querySelector("#parr3")
const changeStyle = () => {
    if (parr3.classList=="text-align-center bg-dark text-white") {
 parr3.classList="text-align-center"       
    }
else {parr3.classList="text-align-center bg-dark text-white"}
}

// 4. Reloj digital:
let button3=document.querySelector("#button3");
let parr4= document.querySelector("#parr4");
let intervalo = null;
relojActive=false

const horaActual = () => { if (!relojActive) {
    let date = "";
    intervalo = setInterval(() => {
      date = new Date();
      parr4.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }, 1000);    
relojActive = true
button3.innerText="DETENER"
}else{
clearInterval(intervalo);
relojActive=false
parr4.innerText = "🕕"
button3.innerText="INICIAR"
}};

// 5. Lista de tareas:
class Lista {
    constructor(producto1, producto2 = "", producto3 = "", producto4 ="", producto5 = ""){
        this.producto1 = producto1;
        this.producto2 = producto2;
        this.producto3 = producto3;
        this.producto4 = producto4;
        this.producto5 = producto5;
    }
}

const listaProductos= []

let producto1 = document.querySelector("#input1")
let producto2 =document.querySelector("#input2")
let producto3 =document.querySelector("#input3")
let producto4 =document.querySelector("#input4")
let producto5 =document.querySelector("#input5")

const guardarProductos= (event)=>{
    event.preventDefault();
    const lista = new Lista(
    producto1.value, 
    producto2.value,
    producto3.value,
    producto4.value,
    producto5.value,  
    )
listaProductos.push(lista)
  document.querySelector("form").reset();
  producto1.focus();

}

let button5 = document.querySelector("#button5")
let parr6 = document.querySelector("#parr6")
let listActive = false

const mostrarLista = ()=>{ if (listActive==false) {
 button5.innerText= "OCULTAR LISTAS"  
 const ul = document.createElement('ul');
 listaProductos.forEach(producto => {
      const li = document.createElement('li');
      li.innerHTML = `Producto 1: ${producto.producto1}, Producto 2: ${producto.producto2}, Producto 3: ${producto.producto3}, Producto 4: ${producto.producto4}, Producto 5: ${producto.producto5}`;
      ul.appendChild(li);
      parr6.classList="text-danger"
      parr6.innerText="LISTAS DE COMPRAS"
      parr6.appendChild(ul);
    });
listActive = true
} 
else {   
    button5.innerText= "MOSTRAR LISTAS" 
parr6.innerText = ""
listActive = false}
}

// Cambiar el tamaño de texto:
let parr7 = document.querySelector("#parr7")
let contador = 6

const aumentarFuente = () =>{if (contador>1) {
    contador -- 
    switch (true) {
        case contador == 5:
        parr7.className="fs-5 text-align-center text-success"
            break;
    case contador == 4:
        parr7.className="fs-4 text-align-center text-success"
        break;
        case contador == 3:
        parr7.className="fs-3 text-align-center text-success"
        break;
        case contador == 2:
        parr7.className="fs-2 text-align-center text-success"
        break;
        case contador == 1:
        parr7.className="fs-1 text-align-center text-success"
        break;
}
}
else {
    alert("no se puede agrandar mas la fuente")
}
            
}

const disminuirFuente = () =>{if (contador<6) {
    contador ++ 
    switch (true) {

        case contador == 1:
        parr7.className="fs-1 text-align-center text-success"
            break;
    case contador == 2:
        parr7.className="fs-2 text-align-center text-success"
        break;
        case contador == 3:
        parr7.className="fs-3 text-align-center text-success"
        break;
        case contador == 4:
        parr7.className="fs-4 text-align-center text-success"
        break;
        case contador == 5:
        parr7.className="fs-5 text-align-center text-success"
        break;
        case contador == 6:
        parr7.className="fs-6 text-align-center text-success"
        break;
}
}
else {
    alert("no se puede disminuir mas la fuente")
}
            
}



