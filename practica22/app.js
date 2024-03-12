
const { createApp } = Vue

const frases = [
  {
    id : 456,
    texto: 'El respeto al derecho ajeno es la paz',
    autor: 'Benito Juarez'
  },
  {
    id : 987,
    texto: 'La medida del amor es amar sin medida',
    autor: 'San Agustín'
  },
  { 
    id : 456,
    texto: 'El dinero no puede comprar la vida '
  }
]

createApp({
  data() {
    return {
      frases : frases,
      nueva : 'ingresa una nueva frase'
    }
  },
  methods : {
    agregarFrase( event ){
      if(event.charCode == 13)
      {
        this.frases.push({
          texto: this.nueva
        });
        this.nueva = '';
      }
    }
  } 
}).mount('#miApp');
