
    let resultado = document.getElementById('resultado');

    const asignar = (valor) =>{
        //ShortHand
        resultado.value += valor;
    }

    let calcular = () => {
        resultado.value = eval(resultado.value);
    }

    let limpiar = () => {
        resultado.value = "";
    }

    let borrar = () => {
        resultado.value = resultado.value.substring(0,resultado.value.length-1);
    }

    
