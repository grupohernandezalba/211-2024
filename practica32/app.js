
const { createApp } = Vue


const HolaMundo = {
    props: ['idioma','color'],
    template: `
                <div>
                    <p v-if="idioma == 'castellano'" :style="{color: color}">Hola mundo {{ color }}</p>
                    <p v-else-if="idioma == 'ingles'" :style="{color: color}">Hello world</p>
                    <p v-else-if="idioma == 'aleman'" :style="{color: color}">Hallo Welt</p>
                    <p v-else-if="idioma == 'frances'" :style="{color: color}">Salut Monde</p>
                </div>
            `
};

createApp({

    components: {
        'hola-mundo-feliz': HolaMundo
    },

}).mount('#miApp');

 