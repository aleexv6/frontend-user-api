<template>
    <div>
    <form novalidate class="md-layout center-items">
        <md-card style ="position: absolute; top: 19%" class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
                <div class="md-title">Connexion</div>
            </md-card-header>

            <md-card-content>
                <md-field>
                    <label for="email">Email</label>
                    <md-input type="email" name="email" id="email" autocomplete="email" />
<!--                    <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                    <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>-->
                </md-field>
                <md-field>
                    <label for="password">Mot de passe</label>
                    <md-input type="password" name="password" id="password" autocomplete="password" />
<!--                    <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                    <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>-->
                </md-field>
                <div>
                    <md-checkbox v-model="boolean" class="md-primary">Se souvenir de moi</md-checkbox>
                </div>
            </md-card-content>
<!--           <md-progress-bar md-mode="indeterminate" />-->
            <md-card-actions md-alignment="space-between">
                <router-link class="inscription" to="/inscription">Pas encore de compte ? Inscrivez vous !</router-link>
                <router-link class="forgetPass" to="/forgetPass">Mot de passe oublié</router-link>
                <md-button type="submit" class="md-raised md-primary">Se connecter</md-button>
            </md-card-actions>
        </md-card>

<!--        <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>-->
    </form>
        <vue-particles></vue-particles>
    </div>
</template>

<script>
    export default {
        name: "FormConnexion",
        data() {
            return {
                boolean: false
            }
        }
    }
</script>

<style>
    canvas {
        position: absolute;
    }
    form{
        text-align: center;
    }

    .center-items {
        justify-content: center;
    }

    .md-checkbox {
        display: flex;
    }
</style>

