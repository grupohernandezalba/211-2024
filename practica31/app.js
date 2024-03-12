
const { createApp } = Vue

createApp({

    data() 
    {
        return { 
          notas: []
        }
    },
      methods: {
        recuperarPost() {
          const url = 
          axios.get('https://jsonplaceholder.typicode.com/posts').then((respuesta) => {
            this.notas = respuesta.data             
          })
        }
    } 

}).mount('#miApp');

 