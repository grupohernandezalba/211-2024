const { createApp } = Vue
const articulos = {
    props: ['datos'],
    template: `
            <table class="table table-bordered">
                <tr>
                    <td>Código</td>
                    <td>Descripción</td>
                    <td>Precio</td>
                </tr>
                <tr v-for="articulo in datos">
                    <td>{{articulo.codigo}}</td>
                    <td>{{articulo.descripcion}}</td>
                    <td>{{articulo.precio}}</td>
                </tr>
            </table>
        `
};

createApp({
    components: {
        'articulos': articulos
    },
    data() {
        return {
            vegetales: [
                {
                    codigo: 1,
                    descripcion: 'papas',
                    precio: 12.52
                }, 
                {
                    codigo: 2,
                    descripcion: 'naranjas',
                    precio: 21
                }, 
                {
                    codigo: 3,
                    descripcion: 'peras',
                    precio: 18.20
                }
            ],

            carnes: [
                {
                    codigo: 4,
                    descripcion: 'carne molida',
                    precio: 212.52
                }, 
                {
                    codigo: 5,
                    descripcion: 'carne rib eye',
                    precio: 221
                }, 
                {
                    codigo: 6,
                    descripcion: 'carne sirloin',
                    precio: 218.20
                }
            ]
        }
    }

}).mount('#miApp');

 