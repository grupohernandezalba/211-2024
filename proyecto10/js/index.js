

    let listaProductos = document.querySelector("#listaProductos");
    let listaCategorias = document.querySelector("#listaCategorias");

    let productos = [];

    function obtieneProductos(){

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

    function muestraProductos(categoria){
        console.log("muestraProductos:", productos);

        productosMostrar = productos.slice();
        if(categoria != "")
            productosMostrar = productos.filter(producto => producto.category == categoria);

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
                        <a href="#" class="btn btn-primary">Comprar ahora</a>
                    </div>
                </div>
            </div>`;
        });
 
    }


    function obtieneCategorias(){

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
                        <a class="nav-link active" aria-current="page" onclick="muestraProductos('${ categoria }');" href="#">${ categoria.toUpperCase() }</a>
                    </li> `;
                });
 


            })

    }

    obtieneProductos();
    obtieneCategorias();

