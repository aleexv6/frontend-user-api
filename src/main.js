import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css'
import VueParticles from 'vue-particles'


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueParticles);



const router = new VueRouter({
    routes // raccourci pour `routes: routes`
});

/* eslint-disable no-new */
new Vue({
    el: "#App",
    router,
    render: h => h(App),
}).$mount();
