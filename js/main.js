const stockProductos = [
    { id:1, nombre:"chomba1", precio:4000, img:"../img/2.png", stock: 1, talle:"L"},
    { id:2, nombre:"chomba2", precio:4000, img:"../img/2.png", stock: 1, talle:"L"},
    { id:3, nombre:"chomba3", precio:4000, img:"../img/2.png", stock: 1, talle:"L"},
    { id:4, nombre:"chomba4", precio:4000, img:"../img/2.png", stock: 1, talle:"L"},
    { id:5, nombre:"chomba5", precio:4000, img:"../img/2.png", stock: 1, talle:"L"},
    { id:6, nombre:"chomba6", precio:4000, img:"../img/2.png", stock: 1, talle:"L"},
    { id:7, nombre:"chomba7", precio:4000, img:"../img/2.png", stock: 1, talle:"L"},
    { id:8, nombre:"chomba8", precio:4000, img:"../img/2.png", stock: 1, talle:"L"},
] 
const productos = document.querySelector("#productos");
let carrito = [];
const id =stockProductos.find(stockProductos => stockProductos.id);
const producto =stockProductos.find(stockProductos => stockProductos.nombre);
for(let producto of stockProductos){
    
    const divCard = document.createElement('div');
    const img = document.createElement('img');
    const divCardBody = document.createElement('div');
    const h5tag = document.createElement('h5');
    const ptagTalle = document.createElement('p');
    const ptagPrecio = document.createElement('p');
    const atag = document.createElement('button');
    const tagTalle = document.createElement('p');

    divCard.classList.add('card','text-dark','mt-5')
    img.classList.add('card-img-top','mt-2')
    img.src = `${producto.img}`;
    divCardBody.classList.add('card-body');
    h5tag.classList.add('card-title');
    tagTalle.classList.add('card-text');
    ptagPrecio.classList.add('card-text');
    atag.classList.add('btn','btn-outline-primary')
    atag.setAttribute('onclick','sumaProducto(id)');

    h5tag.innerHTML= `${producto.nombre}`;
    ptagTalle.innerHTML= `${producto.talle}`;
    ptagPrecio.innerHTML= `${producto.precio}`;
    atag.textContent = 'Agregar';
    

    productos.append(divCard)
    divCard.append(img,divCardBody)
    divCardBody.append(h5tag,ptagTalle,ptagPrecio,atag)

    atag.addEventListener('click',function(e){
        divCardBody.append(atag)
        atag.textContent = 'agregado';
        atag.classList.remove('btn-outline-primary')
        atag.classList.add('btn-warning')
    })
}

const modal = document.querySelector("#modal")
if (modal){
    modal.innerHTML +=`
    <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    `
}



const mCarrito = () => {
    const modalBody = document.querySelector("#modal .modal .modal-body");
    if (modalBody) {
        carrito.forEach((producto) => {
        const { id, nombre, precio, img, stock, talle } = producto;
        console.log(modalBody);
        modalBody.innerHTML += `
        <div class="modal-contenedor">
            <div>
            <img class="img-fluid img-carrito" src="${img}"/>
            </div>
        <div>
            <p>Producto: ${nombre}</p>
            <p>Precio: ${precio}</p>
        <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
            </div>
        </div>
        `;
        });
    }
}
function sumaProducto(id){
    const item = stockProductos.find((producto) => producto.id === id)
    carrito.push(item)
    console.log(carrito)
    mCarrito()
}
const botonCarrito = document.querySelector("#botonCarrito")
if (botonCarrito){
    botonCarrito.innerHTML +=`
    <button type="button" data-toggle="modal" data-target="#exampleModal"><img src="../img/carrito-de-compras.png" class="imgBoton"></button>`
}
botonCarrito.addEventListener("click", sumaProducto)

// let productosSeleccionados =[];
    // let productoElegido = {};
    // productosSeleccionados.push(productoElegido)
    // function clickearBoton (e){
    //     productosSeleccionados.forEach(productoPrecio => {
    //     precioTotal+= productoPrecio.precio ;
    //    });            
    //     if(sessionStorage.getItem('stock')==! null){
    //         sessionStorage.setItem('precioTotalCompra', precioTotal); 
    //         atag.textContent = sessionStorage.getItem('stock');

    //     }else{
    //         atag.textContent = sessionStorage.getItem('stock');
    //     }
    // }
    // precioCompra.innerHTML= precioTotal;
    
            // if(sessionStorage.getItem('stock') == null ){
        //     sessionStorage.setItem('stock',cantidadStock)
        //     divCardBody.append(pSinStock)
        //     atag.textContent = 'CON STOCK';
        //     atag.classList.remove('btn-outline-primary')
        //     atag.classList.add('btn-warning')
        // }else{
        //     sessionStorage.get('stock')
        // 
        // }
// }

// function sumaProducto(id){
//     const item = stockProductos.find((productos) => productos.id === id)
//     carrito.push (item) 
// }

// sessionStorage.setItem('CantidadTotalDeProductos',totalCantidad)
// stockProductos.forEach((prod) => {
//     const { id, nombre, precio, desc, img, stock, talle } = prod;
//     if (productos) {
//         productos.innerHTML += `
//         <div class="card text-dark mt-5" style="width: 20rem;">
//             <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
//                 <div class="card-body">
//                     <h5 class="card-title">${nombre}</h5>
//                     <p class="card-text">Talle: ${talle} <br> $ ${precio}</p>
//                     <a class="class="btn btn-primary" href="../pages/producto${id}.html">Comprar</a>
//                 </div>
//         </div>
//     `;
//     }
// });
// 