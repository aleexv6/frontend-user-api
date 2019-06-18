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

```vue
<template>
    <div>
    <form novalidate @submit="getAuth" class="md-layout center-items">
        <md-card style ="position: absolute; top: 19%" class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
                <div class="md-title">Connexion</div>
            </md-card-header>
            <md-card-content>
                <md-field>
                    <label for="email">Email</label>
                    <md-input v-model="form.email" type="email" name="email" id="email" autocomplete="email" />
                    <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>-->
                </md-field>
                <md-field>
                    <label for="password">Mot de passe</label>
                    <md-input v-model="form.password" type="password" name="password" id="password" autocomplete="password" />
                    <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>-->
                </md-field>
                <div style="display: flex">
                    <md-checkbox v-model="boolean" class="md-primary">Se souvenir de moi</md-checkbox>
                </div>
            </md-card-content>
            <md-card-actions md-alignment="space-between" style="margin-left: 12px">
                <router-link class="inscription" to="/inscription">Pas encore de compte ? Inscrivez vous !</router-link>
                <router-link class="forgetPass" to="/forgetPass">Mot de passe oublié</router-link>
                <md-button type="submit" class="md-raised md-primary">Se connecter</md-button>
            </md-card-actions>
        </md-card>
    </form>
        <vue-particles></vue-particles>
    </div>
</template>
```
### Et voilà à quoi ça ressemble



