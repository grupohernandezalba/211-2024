
const { createApp } = Vue

createApp({

    components: {
        'dias-semana': {
          props: ['seleccionado'],
          template:'#dias-semana',
          data() {
            return {
              dias: ['lunes','martes','miércoles','jueves','viernes','sábado','domingo']
            }
          }
        }
    }

}).mount('#miApp');

 