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
parr2.classList = "text-align-center bg-info"     
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

//funcion que hace que cambie el estilo al hacer clic en dispositivos moviles
const changeStyleClic = () => {
if (window.innerWidth <= 820){
    if (parr3.classList=="text-align-center bg-dark text-white") {
 parr3.classList="text-align-center"       
    }
else {parr3.classList="text-align-center bg-dark text-white"}
}
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
      parr4.classList ="bg-warning text-dark border border-secondary border-4"
      parr4.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }, 1000);    
relojActive = true
button3.innerText="DETENER"
}else{
clearInterval(intervalo);
relojActive=false
parr4.classList =""
parr4.innerText = "🕕"
button3.innerText="INICIAR"
}};

// 5. Lista de tareas:
const myModal = new bootstrap.Modal(document.getElementById('updateModal'))
let listaProductos= JSON.parse(localStorage.getItem("productos")) || [];

class Productos {
    constructor(product){
        this.producto = product;
    }
}

let producto = document.querySelector("#input1")

const guardarProductos= (event)=>{
    event.preventDefault();
    const productos = new Productos(
    producto.value  
    )
listaProductos.push(productos)
  document.querySelector("form").reset();
  producto.focus();
  localStorage.setItem("productos", JSON.stringify(listaProductos));
}

let button5 = document.querySelector("#button5")
let parr6 = document.querySelector("#parr6")
let listActive = false

const mostrarLista = () => {
    const ul = document.createElement('ul');
    
    listaProductos.forEach((producto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `Producto ${index + 1}: ${producto.producto} <button class="btn btn-danger btn-sm mb-1 ms-1 me-1" onclick="eliminarProducto(${index})">X</button><button class="btn btn-warning btn-sm mb-1" onclick="mostrarModal(${index})">M</button>`;
        ul.appendChild(li);
    });
    
    parr6.innerHTML = ""; // Limpiar el contenido anterior
    parr6.classList.add("text-danger");
    parr6.innerText = "LISTAS DE COMPRAS";
    parr6.appendChild(ul);
};

button5.addEventListener("click", () => {
    if (!listActive) {
        button5.innerText = "OCULTAR LISTAS";
        mostrarLista();
        listActive = true;
    } else {
        button5.innerText = "MOSTRAR LISTA DE PRODUCTOS";
        parr6.innerHTML = "";
        listActive = false;
    }
});

const eliminarProducto = (index) => {
    listaProductos.splice(index, 1);
    localStorage.setItem("productos", JSON.stringify(listaProductos));
    mostrarLista(); // Actualizar la lista mostrada
};

// MOSTRAR MODAL

let posicionProducto = null

const mostrarModal = (index) => {
  document.querySelector("#inputModal1").value = listaProductos[index].producto; //TRAIGO EL NOMBRE DEL PRODUCTO DEL ARREGLO Y LO MUESTRO EN EL FORMULARIO
  posicionProducto = index; //GUARDO LA POSICION DEL PRODUCTO EN UNA VARIABLE
  myModal.show(); //MUESTRO EL MODAL
};

const actualizarProducto = (event) => {
 event.preventDefault();//DETENGO EL EVENTO DEL FORMULARIO
listaProductos[posicionProducto].producto =  document.getElementById("inputModal1").value; // TOMO EL VALOR DEL FORMULARIO Y LO GUARDO
        localStorage.setItem("productos", JSON.stringify(listaProductos)); //ACTUALIZO LA BASE DE DATOS
          myModal.hide() // CIERRO MODAL;
        mostrarLista(); // ACTUALIZO LA LISTA
    }
;


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

// funcion que escucha el boton de la imagen y ejecuta el modal
let listaImagenes = JSON.parse(localStorage.getItem("imagenes")) || [];

const contenedor = document.querySelector("#contenedor");

const modalimagenes = () => {
  const buttonForm = document.getElementById('buttonform');
  const modal = new bootstrap.Modal(document.getElementById('modalimagenes'));

  buttonForm.addEventListener('click', () => {
    modal.show();
  });

  const agregarImagenForm = document.getElementById('agregarImagenForm');
  agregarImagenForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const url = document.getElementById('urlImagen').value;
    const nombre = document.getElementById('nombreImagen').value;
    const descripcion = document.getElementById('descripcionImagen').value;

    const imagen = {
      url: url,
      nombre: nombre,
      descripcion: descripcion
    };

    listaImagenes.push(imagen);
    localStorage.setItem("imagenes", JSON.stringify(listaImagenes));

    contenedor.innerHTML = "";
    mostrarImagenes();

    modal.hide();
  });
};

const eliminarImagen = (index) => {
  let confirmacion = confirm("¿Está seguro que desea eliminar la imagen?");
  if (confirmacion) {
    listaImagenes.splice(index, 1);
    localStorage.setItem("imagenes", JSON.stringify(listaImagenes));
   alert(`La imagen ha sido eliminada`);
    contenedor.innerHTML = "";
    mostrarImagenes();
  }
};

const modImagen = (index) => {
  const imagen = listaImagenes[index];

  let modalTitle = document.getElementById('modalTitle');
  let nombreImagenModal = document.getElementById('nombreImagenModal');
  let descripcionImagenModal = document.getElementById('descripcionImagenModal');
  let guardarCambiosButton = document.getElementById('guardarCambiosButton');

  modalTitle.innerText = `Editar info de imagen: ${imagen.nombre}`;
  nombreImagenModal.value = imagen.nombre;
  descripcionImagenModal.value = imagen.descripcion;

  const modal = new bootstrap.Modal(document.getElementById('modImgModal'));
  modal.show();

  guardarCambiosButton.addEventListener('click', () => {
    let nuevoNombre = nombreImagenModal.value;
    let nuevaDescripcion = descripcionImagenModal.value;

    listaImagenes[index].nombre = nuevoNombre;
    listaImagenes[index].descripcion = nuevaDescripcion;

    localStorage.setItem("imagenes", JSON.stringify(listaImagenes));

    contenedor.innerHTML = "";
    mostrarImagenes();

    modal.hide();
  });
};

const mostrarImagenes = () => {
  contenedor.innerHTML = ""; // Limpiar el contenedor antes de mostrar las imágenes

  if (listaImagenes.length === 0) {
    let mensajeVacio = document.createElement('p');
    mensajeVacio.innerHTML= "<h3>No hay imágenes disponibles.</h3>";
    contenedor.appendChild(mensajeVacio);
  } else {
    listaImagenes.forEach((imagen, index) => {
      const card = document.createElement("div");
      card.classList = "card col-12 me-3 mt-3 m-0 p-0";
      card.style.width = "18rem";

      const img = document.createElement('img');
      img.src = imagen.url;
      img.classList = "card-img-top";
      img.alt = imagen.nombre;

      const cardBody = document.createElement('div');
      cardBody.classList = "card-body d-flex flex-column"; // Quitamos justify-content-between

      const cardTitle = document.createElement('h5');
      cardTitle.classList = "card-title";
      cardTitle.textContent = imagen.nombre;

      const cardDescription = document.createElement('p');
      cardDescription.classList = "card-text";
      cardDescription.textContent = imagen.descripcion;

      const buttonContainer = document.createElement('div');
      buttonContainer.classList = "d-flex justify-content-between";

      const deleteButton = document.createElement('button');
      deleteButton.classList = "btn btn-danger ms-1 mb-1";
      deleteButton.innerText = "Eliminar";
      deleteButton.addEventListener("click", () => {
        eliminarImagen(index);
      });

      const modifyButton = document.createElement('button');
      modifyButton.classList = "btn btn-primary me-1 mb-1";
      modifyButton.innerText = "Modificar";
      modifyButton.addEventListener("click", () => {
        modImagen(index);
      });

      buttonContainer.appendChild(deleteButton);
      buttonContainer.appendChild(modifyButton);

      card.appendChild(img);
      card.appendChild(cardBody);
      card.appendChild(buttonContainer);

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardDescription);

      contenedor.appendChild(card);
    });
  }
};

window.onload = () => {
  modalimagenes();
  mostrarImagenes();
};