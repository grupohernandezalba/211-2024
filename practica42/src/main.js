import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')




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

 