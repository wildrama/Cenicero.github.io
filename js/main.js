const stockProductos = [
    { id:1, nombre:"Chomba Champion", precio:5000, img1:"../img/2.png", img2:"../img/1.png", stock: 2, talle:"M", elegidos:0},
    { id:2, nombre:"Buzo Michigan", precio:7500, img1:"../img/4.png", img2:"../img/5.png", stock: 2, talle:"XL", elegidos:0},
    { id:3, nombre:"Buzo Raiders", precio:8000, img1:"../img/6.png", img2:"../img/7.png", stock: 2, talle:"XL", elegidos:0},
    { id:4, nombre:"Chomba Polo Ralph Lauren", precio:4000, img1:"../img/9.png", img2:"../img/10.png", stock: 2, talle:"L slim fit", elegidos:0},
    { id:5, nombre:"Chomba Tommy Hilfiger", precio:3500, img1:"../img/11.png", img2:"../img/12.png", stock: 2, talle:"L", elegidos:0},
    { id:6, nombre:"Chomba Tommy Hilfiger", precio:2500, img1:"../img/13.png", img2:"../img/14.png", stock: 2, talle:"M", elegidos:0},
    { id:7, nombre:"Chomba Polo Ralph Lauren", precio:4500, img1:"../img/15.png", img2:"../img/16.png", stock: 2, talle:"L", elegidos:0},
    { id:8, nombre:"Chomba RLX Ralph Lauren", precio:4500, img1:"../img/17.png", img2:"../img/18.png", stock: 2, talle:"M", elegidos:0},
] 

const producto = document.querySelector("#productos");
const modalBody = document.querySelector("#modal-body");
let carrito = [];
let productosElegidos = [];


// cards productos
stockProductos.forEach ((producto) =>{
    const divCard = document.createElement('div');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const divCardBody = document.createElement('div');
    const h5tag = document.createElement('h3');
    const ptagTalle = document.createElement('h4');
    const ptagPrecio = document.createElement('h4');
    const atag = document.createElement('button');
    const tagTalle = document.createElement('h5');

    divCard.classList.add('card','text-dark','mt-5');
    img1.classList.add('card-img-top','mt-2');
    img1.src = `${producto.img1}`;
    img2.classList.add('card-img');
    img2.src = `${producto.img2}`;
    divCardBody.classList.add('card-body');
    h5tag.classList.add('card-title');
    tagTalle.classList.add('card-text');
    ptagPrecio.classList.add('card-text');
    atag.classList.add('btn','btn-outline-primary');
    img2.setAttribute('id', 'img2')

    h5tag.innerHTML= `${producto.nombre}`;
    ptagTalle.innerHTML= `${producto.talle}`;
    ptagPrecio.innerHTML= `$${producto.precio}`;
    atag.textContent = 'Agregar';
    
    // funcion agregar producto
    atag.addEventListener("click", () => {
        carrito.push({
            id : producto.id,
            nombre : producto.nombre,
            precio : producto.precio,
            img : producto.img1,
            elegidos : producto.elegidos,
        })
        console.log(carrito)
    });
    
    productos.append(divCard)
    divCard.append(img1,divCardBody)
    divCard.append(img2,divCardBody)
    divCardBody.append(h5tag,ptagTalle,ptagPrecio,atag);
    
    // funcion agregado
    atag.addEventListener('click',function(e){
        divCardBody.append(atag)
        atag.textContent = 'agregado';
        atag.classList.remove('btn-outline-primary')
        atag.classList.add('btn-warning')
    });
    

    // funcion selector de img
    img2.addEventListener('click', function(){
        // img1.src = this.src
        // img2.src = producto.img1
        if (img1.src = producto.img1){
        img1.src = producto.img2
        img2.src = producto.img1
        }
        else {
            img2.src = producto.img2
            img1.src = producto.img1
        }
    });
});






// boton Carrito
const botonCarrito = document.querySelector("#botonCarrito")
if (botonCarrito){
    botonCarrito.innerHTML +=`
    <button id="buttonC" type="button" data-toggle="modal" data-target="#exampleModal"><img src="../img/carrito-de-compras.png" class="imgBoton"></button>`
}


botonCarrito.addEventListener ("click", () =>{
        carrito.forEach ((producto) => {
            const {id, nombre, precio, img} = producto
            
            const divCarrito = document.createElement('div');
            divCarrito.classList.add('divCarrito');
            
            divCarrito.innerHTML += `
            <div class="modal-contenedor">
                <div>
                <img class="img-fluid img-carrito" src="${img}"/>
                </div>
            <div>
                <p>Producto: ${nombre}</p>
                <p>Precio: ${precio}</p>
            <button class="btn btn-danger"  onclick="eliminarProd(${id})">Eliminar producto</button>
                </div>
            </div>
            `;
            modalBody.append(divCarrito)
        });
    });














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