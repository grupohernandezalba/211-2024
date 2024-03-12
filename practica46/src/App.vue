<template>
  <div>
    <h1>Contador</h1>
    <h2>{{ counter }}</h2>
    <p><button @click="decrementar">Decrementar</button> | <button @click="incrementar">Incrementar</button></p>
  </div>
</template>

<script>
import { ref } from 'vue';

import useCounter from '@/composables/useCounter'

export default {
  setup() {
    //const counter = ref(5);

    /*
    const incrementar = () => {
        counter.value++;
    }

    const decrementar = () => {
        counter.value--;
    }
    */

     const { counter, incrementar, decrementar } = useCounter()

     /*
    return {
      counter,
      //incrementar,
      //decrementar
      incrementar: () => counter.value++,
      decrementar: () => counter.value--,

    }
    */


      return {
        counter, incrementar, decrementar
      }

  }
}

</script>