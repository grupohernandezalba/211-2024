  const { createApp } = Vue
  createApp({
    data() {
      return {
        articulos : [
          {
            codigo : 1,
            descripcion : 'papas',
            precio : 12.52
          },
          {
            codigo : 2,
            descripcion : 'naranjas',
            precio : 21
          },
          {
            codigo : 3,
            descripcion : 'peras',
            precio : 18.20
          }
        ],
        total : 10
      }
    },
    methods: {
        sumar(){
            this.total = this.total + 200;
        } 
    }
  }).mount('#miApp');
