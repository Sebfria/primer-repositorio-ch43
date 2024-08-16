// Tenemos un li de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos");
const $i = document.querySelector('input');

// Definir la función displayProductos
function displayProductos(productos) {
    while (li.firstChild) {
        li.removeChild(li.firstChild);
    }

    productos.forEach(producto => {
        var d = document.createElement("div");
        d.classList.add("producto");
    
        var ti = document.createElement("p");
        ti.classList.add("titulo");
        ti.textContent = producto.nombre;
        
        var imagen = document.createElement("img");
        imagen.setAttribute('src', producto.img);
    
        d.appendChild(ti);
        d.appendChild(imagen);
    
        li.appendChild(d);
    });
}

// Mostrar todos los productos al cargar la página
displayProductos(productos);

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  const texto = $i.value.toLowerCase(); // Convertir a minúsculas
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  displayProductos(productosFiltrados);
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => 
    item.tipo.toLowerCase().includes(texto) || 
    item.color.toLowerCase().includes(texto)
  );
}