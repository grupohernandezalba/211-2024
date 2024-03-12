<template>
    <form>
        <fieldset>
        <div class="container">
            <div class="row my-3">
                <div class="col-12">
                    <h1>Registro de usuario</h1>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-12">
                    <label for="nombre">Nombre:</label>
                    <input type="text" v-model="nombre" id="nombre" required class="form-control">
                </div>
            </div>
            <div class="row my-3">
                <div class="col-12">
                    <label for="correo">Correo:</label>
                    <input type="text" v-model="correo" id="correo" required class="form-control">
                    <div class="row">
                        <div v-if="mensaje" class="col-6 alert alert-danger m-2" role="alert">
                            {{ mensaje }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-12">
                    <label for="usuario">Usuario:</label>
                    <input type="text" v-model="usuario" id="usuario" required class="form-control">
                    <div class="row">
                        <div v-if="mensajeUsuario" class="col-6 alert alert-danger m-2" role="alert">
                            {{ mensajeUsuario }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-12">
                    <label for="contrasena">Contraseña:</label>
                    <div class="input-group flex-nowrap">
                        <input type="password" v-model="contrasena" id="contrasena" required class="form-control">
                        <span @mousedown="cambiarContrasenaVisible()" class="input-group-text" id="password-input">@</span>
                    </div>
                </div>
            </div>  
            <div class="row my-3 text-center">
                <div class="col-12">
                    <input type="submit" class="btn btn-primary" value="Guardar">
                </div>
            </div>
        </div>
        </fieldset>
    </form>


</template>

<script>
export default {
    name: 'Formulario',
    data(){
        return {
            nombre: '',
            correo: '',
            usuario: '',
            contrasena: '',
            mensaje: '',
            mensajeUsuario: null
        }
    },
    watch: {
        correo(value){
            this.correo = value;
            this.validarCorreo(value);
        },
        usuario(value){
            this.usuario = value;
            this.validarUsuario(value);
        }
    },
    methods:{
        validarCorreo(value){
            // Checar expresiones regulares https://regexr.com/3e48o

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
            {
                this.mensaje = '';
            } 
            else
            {
                this.mensaje = 'Correo electrónico no válido';
            } 
        },
        validarUsuario(value){
            this.mensajeUsuario = '';
            if(value.length < 12)
                this.mensajeUsuario = 'El usuario debe ser de un tamaño mínimo de 12 caracteres'
            
            if(value.includes(' '))
                this.usuario = this.usuario.trim();
                
            let letrasNumeros = /^[0-9a-zA-Z]+$/;
            if(!value.match(letrasNumeros))
                this.mensajeUsuario = 'No debe contener signos, solo letras y números '

        },
        cambiarContrasenaVisible(){

            let contrasena = document.getElementById("contrasena");
            contrasena.type = contrasena.type === "password" ? "text" : "password";

        }
    }
}
</script>

<style>

</style>