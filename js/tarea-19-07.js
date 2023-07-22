// Crear un objeto con datos de usuario: username, state, role. Debe tener dos funciones, una que permita cambiar el estado y otra que muestre información del usuario.
let usuarios = {
    username: "benjamin",
    state: "habilitado",
    role: "estudiante",
    changeState: function (estado) {
    this.state = estado    
    },
infoUser: function (){
console.log(`Nombre del usuario: ${this.username}`)
console.log(`Estado del usuario: ${this.state}`)
console.log(`Roll del usuario: ${this.role}`)
}
}
// Crear un arreglo de objetos que contenga información de productos (por lo menos 10).
let infoProducts = [
{
    Nombre : "Tortillas Gruesas",
    Detalle: "Masa Hojaldrada",
    Stock: "100",
    PrecioUnitario: "30",
    Marca: "Produccion Propia",
},
{
    Nombre : "Tortillas Finas",
    Detalle: "Masa fina",
    Stock: "100",
    PrecioUnitario: "30",
    Marca: "Produccion Propia",
},
{
    Nombre : "Bollitos",
    Detalle: "Masa Leudada",
    Stock: "100",
    PrecioUnitario: "30",
    Marca: "Produccion Propia",
},
{
    Nombre : "Pan de Hamburguesa",
    Detalle: "Pack x4",
    Stock: "20",
    PrecioUnitario: "200",
    Marca: "Bimbo",
},
{
    Nombre : "Pan Lactal",
    Detalle: "Paquete por 500grs",
    Stock: "10",
    PrecioUnitario: "350",
    Marca: "Bimbo",
},
{
    Nombre : "Pan Sandwichero",
    Detalle: "Pan Miga fina",
    Stock: "100",
    PrecioUnitario: "10",
    Marca: "Produccion Propia",
},
{
    Nombre : "Pan Frances",
    Detalle: "Pan horneado doble",
    Stock: "100",
    PrecioUnitario: "10",
    Marca: "Produccion Propia",
},
{
    Nombre : "Facturas",
    Detalle: "Con crema",
    Stock: "50",
    PrecioUnitario: "50",
    Marca: "Produccion Propia",
},
{
    Nombre : "Medialunas",
    Detalle: "rellenas con dulce de leche",
    Stock: "50",
    PrecioUnitario: "50",
    Marca: "Produccion Propia",
},
{
    Nombre : "Masas Dulces",
    Detalle: "Masas surtidas",
    Stock: "40",
    PrecioUnitario: "60",
    Marca: "El mundo",
},
]
// Crear una función que muestre en pantalla una lista de los productos con nombre, detalle y precio.
const listProducts = ()=>{
document.write("<h2>PRODUCTOS:</h2>");
infoProducts.forEach((producto) => {
document.write("<ul>");
document.write("<li>Nombre:" + producto.Nombre + "</li>")
document.write("<li>Detalle:" + producto.Detalle + "</li>")
document.write("<li>Precio: $"+producto.PrecioUnitario + "</li>")
document.write("</ul>")
}) 
}
// Crear una función de búsqueda donde le pasemos como parámetro un termino y busque productos cuyo nombre coincida en parte con el termino enviado como parámetro.
//creo la funcion de busqueda que recibe el producto
const searchProduct = (termino)=>{
//creo la la funcion de filtro donde se guardara el resultado
    const resultSearch = infoProducts.filter ((producto)=> {
 //convierto los nombres de los productos a minisculas
        const nameProduct = producto.Nombre.toLowerCase();
    return nameProduct.includes(termino);
    });
    return resultSearch
}

//JUGANDO A PEDIRLO POR PANTALLA
const busqueda = () => {
let busquedaProducto = prompt("Ingrese el producto a buscar")
let displaySearch = searchProduct(busquedaProducto)
document.write("<h2>Resultado de Busqueda</h2>")
displaySearch.forEach((product) => {
document.write("<ul>");
document.write("<li>Nombre:" + product.Nombre + "</li>")
document.write("<li>Detalle:" + product.Detalle + "</li>")
document.write("<li>Detalle:" + product.Stock + "</li>")
document.write("<li>Precio: $"+product.PrecioUnitario + "</li>")
document.write("<li>Detalle:" + product.Marca + "</li>")
document.write("</ul>")
})  }    
