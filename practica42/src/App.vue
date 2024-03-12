<template>
    <div>
        <h2>Contador</h2>
        <!-- Shortcut Shift + Alt + Down Arrow -->
        <p>{{ contador + 1}} elevado a la segunda potencia es {{ contador * contador }}</p>
        <p>{{ contador + 1}} elevado a la segunda potencia es {{ calcular() }}</p>
        <p>{{ contador + 1}} elevado a la segunda potencia es {{ calcular() }}</p>
        <p>{{ contador + 1}} elevado a la segunda potencia es {{ calcularMejor }}</p>
        <p>{{ contador + 1}} elevado a la segunda potencia es {{ calcularMejor }}</p>
        <p>{{ contador + 1}} elevado a la segunda potencia es {{ calcularMejor }}</p>
        <!--
            <p>{{ contador + 1}} elevado a la segunda potencia es {{ calcular() }}</p>
        -->
    </div>  
</template>


<script>
export default {
    data(){
        return {
            contador : 5
        }
    },
    methods: {
        calcular() {
            console.log('entro a calcular');
            return this.contador *  this.contador;
        }
    },
    computed: {
            calcularMejor() {
                console.log('entro a calcularMejor');
                return this.contador *  this.contador;
            }
    }
}
</script>
