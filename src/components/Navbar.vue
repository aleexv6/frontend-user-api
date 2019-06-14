<template>
    <div>
        <md-toolbar class="md-accent" md-elevation="1">
            <h3 class="md-title" style="flex: 1" >Dashboard</h3>
            <md-button><router-link style="color: white" class="user" to="/#">Utilisateurs</router-link></md-button>
            <md-button><router-link style="color: white" class="group" to="/#">Groupes</router-link></md-button>
            <md-button><router-link style="color: white" class="admin" to="/#">Admin</router-link></md-button>
            <md-button><router-link style="color: white" class="connexion" to="/login">Se deconnecter</router-link></md-button>
        </md-toolbar>
    </div>
</template>

<script>

</script>

<style scoped>

</style>