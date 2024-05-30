
    let listaProductos = document.querySelector("#listaProductos");
    let listaCategorias = document.querySelector("#listaCategorias");

    let productos = [];
    let productosMostrar = []; //agregar esta linea

    let obtieneCategorias = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(categoriasObtenidas => {
                console.log("Categorias obtenidas", categoriasObtenidas);
                categoriasObtenidas.forEach((categoria,indice) => {
                    console.log("Categoria" + categoria);

                    categoria = categoria.replace("'", "");  

                    listaCategorias.innerHTML += `
                        <li class="nav-item">
                            <a class="nav-link" href="#" onclick="muestraProductos('${ categoria }')" >${ categoria.toUpperCase() }</a>
                        </li>
                    `;
                });
            });
    }

    obtieneCategorias();

    let muestraProductos = (categoria) => {
        
        productosMostrar = productos.slice();

        console.log("Productos con apostrofe ", productos);
        if(categoria != "") {
             productosMostrar = productos.filter(producto => producto.category == categoria);
        }
        console.log("productosMostrar:",productosMostrar);
        renderProductos();
    } 

    let renderProductos = () => {

        listaProductos.innerHTML = "";
        productosMostrar.forEach((producto,indice) => {
            listaProductos.innerHTML += `
                <div class="col-12 col-md-3">
                    <div class="card">
                        <img src="${ producto.image }" class="imagenProducto card-img-top py-2" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${ producto.title }</h5>
                            <p class="card-text">${ producto.description.slice(0,100) }</p>
                            <p class="text-danger">$ ${ producto.price }</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
            `;
        });

    }

    function obtieneProductos() {
        //Promise o Promesa 
        //fetch('https://fakestoreapi.com/products/')
        fetch('http://localhost:3000/productos')
            .then(res=>res.json())
            .then( productosObtenidos => {
                console.log("Productos obtenidos", productosObtenidos);

                productos = productosObtenidos.slice();

                productosObtenidos.forEach((producto,indice) => {
                    console.log("Producto" + producto);
                    producto.category = producto.category.replace("'", ''); // agregar
                    listaProductos.innerHTML += `
                        <div class="col-12 col-md-3">
                            <div class="card">
                                <img src="${ producto.image }" class="imagenProducto card-img-top py-2" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${ producto.title }</h5>
                                    <p class="card-text">${ producto.description.slice(0,100) }</p>
                                    <p class="text-danger">$ ${ producto.price }</p>
                                    <a href="#" class="btn btn-primary">Comprar</a>
                                </div>
                            </div>
                        </div>
                    `;
                });
            });
    };

    obtieneProductos();

