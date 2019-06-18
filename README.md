# Initialisation du projet
## Instalation de Vue
Dans un premier temps, il faut installer une instance de Vue puis Vue CLI qui nous permet de lancer un serveur localhost pour voir nos modifications en live.
```bash
npm install Vue
```
```bash
npm install -g @vue/cli
```

## Instalation de Vue Material
```bash
npm install vue-material --save
```
Puis dans le fichier main.js
```js
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
```

## Le developpement peut commencer
On commencer par la page de connexion :
```vue
<template>
    <div id="Connexion">
        <form-connexion></form-connexion>
    </div>
</template>
<script>
    import FormConnexion from "./FormConnexion";
    export default {
        name: 'Connexion',
        components: {FormConnexion},
    }
</script>
<style scoped>
</style>
```

Comme vous pouvez le remarquer, la balise <form-connexion> n'existe pas en HTML, c'est une balise créee avec Vue:

