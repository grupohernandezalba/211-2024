const edad = document.getElementById('edad');
let resp = document.getElementById('texto');


const mayorEdad = () => {
    resp.innerHTML = parseInt(edad.value) >= 18 ? 'mayor de edad' : ''
}

