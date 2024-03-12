
    let resultado = document.getElementById('resultado');

    function asignar(valor){
        resultado.value += valor;
    }

    function calcular() 
    {
        if(resultado.value!='')
            resultado.value = eval(resultado.value); 
        else
            alert('Ingrese un valor');
    }

    /*

    const asignar = (valor) => resultado.value += valor;

    const calcular = () =>  
    { 
        if(resultado.value!='') 
            resultado.value = eval(resultado.value); 
    }
*/

