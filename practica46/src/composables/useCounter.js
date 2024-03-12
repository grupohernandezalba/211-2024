import { ref } from 'vue'

const useCounter = () => {
    const counter = ref(5)

    return {
        counter,
        incrementar: () => counter.value++,
        decrementar: () => counter.value--
    }
}

export default useCounter