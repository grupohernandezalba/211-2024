<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <img v-if="imagen" :src="imagen" alt="foto">
                <br>
                <input v-model="pregunta" type="text">
                <div  v-if="estasPreguntando">
                    <p>{{ pregunta }}</p>
                    <i>{{ this.respuesta == 'yes' ? 'Si' : 'No' }}</i>
                </div>
                
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
    data(){
        return {
            pregunta: null,
            respuesta: null,
            imagen: null,
            estasPreguntando: false
        }
    },
    methods:{
        async obtieneRespuesta(){
            //llamada a la api
            const {answer, image} = await fetch('https://yesno.wtf/api').then( res => res.json() );

            this.respuesta = answer;

            this.imagen = image;
        }
    },
    watch : {
        pregunta(valor, valorAnterior){
            console.log(valor, valorAnterior);
            console.log(valor.includes('?'));
            this.estasPreguntando = false;
            if(!valor.includes('?')) return;

            this.estasPreguntando = true;
            this.obtieneRespuesta();
        }
    }

}
</script>

<style>

</style>