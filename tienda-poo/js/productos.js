    let listaProductos = document.querySelector("#listaProductos");
    let productos = [];
    let productosMostrar = [];

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
                        <a href="#" onclick="carrito.agregarProducto({ id: ${ producto.id },title: '${ producto.title }',price: ${ producto.price },description: '${ producto.description }',category: '${ producto.category }',image:'${ producto.image }'})" class="btn btn-primary">Agregar al carrito</a>
                    </div>
                </div>
            </div>`;
        });
    };