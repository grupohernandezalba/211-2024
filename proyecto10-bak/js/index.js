    let listaProductos = document.querySelector("#listaProductos");
    let listaCategorias = document.querySelector("#listaCategorias");
    let btnBuscar = document.querySelector("#btnBuscar");
    let textoBuscar = document.querySelector("#textoBuscar");
    let btnFinalizarCompra = document.querySelector("#btnFinalizarCompra");
    let contadorCarrito = document.querySelector("#contadorCarrito");
    contadorCarrito.innerHTML = "0";

    let productos = [];

    let carrito = [];

    /*
    btnBuscar.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("textoBuscar:", textoBuscar.value);
        buscarProductos();
    });
    */

    let obtieneProductos = () => {

        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(productosObtenidos => {

                console.log(productosObtenidos);
                productos = productosObtenidos.slice();


                productos.forEach( (producto,indice) => {
                    console.log("producto:",indice, producto);
                    producto.category = producto.category.replace("'", '');
                });

                muestraProductos("");

            })

    }


    let buscarProductos = () => {
 
        productosMostrar = productos.slice();
        productosMostrar = productos.filter(producto => producto.title.toLowerCase().includes(textoBuscar.value.toLowerCase()));

        renderProductos();
 
    };

    let muestraProductos = (categoria) => {
        console.log("muestraProductos:", productos);

        productosMostrar = productos.slice();
        
        if(categoria != "")
            productosMostrar = productos.filter(producto => producto.category == categoria);

        renderProductos();
 
    };

    let renderProductos = () => {

        listaProductos.innerHTML = "";
        productosMostrar.forEach( (producto,indice) => {
            console.log("producto:",indice, producto);
            listaProductos.innerHTML += `
            <div class="col-12 col-md-3 py-5"> 
                <div class="card" style="max-height: 600px;">
                    <img class="py-3 imagenProducto" src="${ producto.image }" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${ producto.title }</h5>
                        <p class="card-text">${ producto.description.slice(0, 100) }</p>
                        <p class="text-danger fw-bold">$${ producto.price } USD</p>
                        <a href="#" onclick="agregarCarrito(${ indice })" class="btn btn-primary">Agregar al carrito</a>
                    </div>
                </div>
            </div>`;
        });

    };

    let agregarCarrito = (indice) => {
        carrito.push(productos[indice]);
        console.log("carrito:", carrito);
        renderProductosCarrito();
    };

    let renderProductosCarrito = () => {

        productosCarrito.innerHTML = "";

        if(carrito.length == 0) {
            productosCarrito.innerHTML = "<h3 class='text-center'>No hay productos en el carrito</h3>";
            btnFinalizarCompra.style.display = "none";
            contadorCarrito.innerHTML = "0";    
            return;
        }
        else {
            contadorCarrito.innerHTML = carrito.length;
            btnFinalizarCompra.style.display = "block";
        }

        carrito.forEach( (producto,indice) => {
            productosCarrito.innerHTML += `
                <div class="row">
                    <div class="col-12 col-md-3 border p-2">
                        <img  src="${ producto.image }" class="card-img-top w-50" alt="...">
                    </div>
                    <div class="col-12 col-md-3 border p-2">
                        <h5 class="card-title">${ producto.title }</h5>
                    </div>
                    <div class="col-12 col-md-3 border p-2">
                        <p class="text-danger fw-bold">$${ producto.price } USD</p>
                    </div>
                    <div class="col-12 col-md-3 border p-2 text-center">
                        <a href="#" onclick="eliminarCarrito(${ indice })" class="btn btn-danger">Eliminar</a>
                    </div>
                </div>`;
        });

    };

    let eliminarCarrito = (indice) => {
        carrito.splice(indice,1);
        renderProductosCarrito();
    };


    let obtieneCategorias = () =>   {

        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(categorias => {


                console.log(categorias);

                listaCategorias.innerHTML = "";
                categorias.forEach( (categoria,indice) => {
                    

                    categoria = categoria.replace("'", '');
                    console.log("categoria:",indice, categoria);

                    listaCategorias.innerHTML += ` 
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" onclick="muestraProductos('${ categoria }');" href="#">${ categoria.toUpperCase() }</a>
                    </li> `;
                });
 


            })

    }

    obtieneProductos();
    obtieneCategorias();

