const express = require('express');
var cors = require('cors');
const app = express()
const port = 3000

app.use(cors());
//nos ayuda a analizar el cuerpo de la solicitud POST
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*
app.get('/', (req,res)=>{
    res.send('Hola Dia de la Hamburguesa, 2x1 en Carls JR')
})

app.get('/productos', (req,res)=>{

    let productos = [
        {
            nombre: 'Hamburguesa',
            precio: 100
        },
        {
            nombre: 'Papas',
            precio: 50
        },
        {
            nombre: 'Refresco',
            precio: 30
        }
    ];

    let respuesta = '<table border="1"> ';
    productos.forEach(producto => {
        respuesta += `<tr><td>${producto.nombre}</td>
        <td>${producto.precio}</td></tr>`;
    });

    respuesta += '</table>';

    res.send(respuesta)
})

*/

app.use(require('./routes/productos'));


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})