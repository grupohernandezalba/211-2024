
const { createApp } = Vue


const selectorNumerico = { 
    //props: ['valor', 'minimo', 'maximo'],
    props: {
        valor : {
            type : Number,
            default : 100,
            required : true
        },
        minimo : Number,
        maximo : Number
    },
    template: 
            `<div class="container">
                <div class="row">
                    <div class="col-12 bg-warning">
                        <p>{{cant}}</p>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-6 text-center m-0 p-0">
                        <button class="btn btn-danger w-25" @mouseover="decrementar()">-</button>
                    </div>
                    <div class="col-6 text-center m-0 p-0">
                        <button class="btn btn-primary w-25" @mouseover="incrementar()">+</button>
                    </div>
                </div>
            </div>
            `,
    methods: {
        incrementar() {
            if (this.cant < this.maximo)
                this.cant++;
        },
        decrementar() {
            if (this.cant > this.minimo)
                this.cant--;
        }
    },
    data() {
        return {
            cant: this.valor
        }
    }  
};

createApp({
    components: {
        'selector-numerico': selectorNumerico
    }
}).mount('#miApp');

 