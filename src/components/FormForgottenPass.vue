<template>
    <div>
    <form novalidate class="md-layout center-items">
        <md-card style ="position: absolute; top: 30%" class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
                <div class="md-title" style="text-align: center">Mot de passe oublié</div>
            </md-card-header>

            <md-card-content>
                <md-field>
                    <label for="email">Email</label>
                    <md-input type="email" name="email" id="email" autocomplete="email" />
                    <!--                    <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                                        <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>-->
                </md-field>
            </md-card-content>
            <!--            <md-progress-bar md-mode="indeterminate" v-if="sending" />-->
            <md-card-actions md-alignment="space-between">
                <router-link style="margin-left: 10px" classs="connexion" to="/login">Retour à la page de connexion</router-link>
                <md-button type="submit" class="md-raised md-primary">Recevoir un nouveau mot de passe</md-button>
            </md-card-actions>
        </md-card>

        <!--        <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>-->
    </form>
        <vue-particles></vue-particles>
    </div>
</template>

<script>
    export default {
        name: "FormForgottenPass"
    }
</script>

<style>
    canvas {
        position: absolute;
    }
    .center-items {
        justify-content: center;
    }
</style>