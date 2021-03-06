import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import ModalService from "./modules/modals/services/modal.service";

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/main.css'


createApp(App).use(store).use(router).use(ModalService).mount('#app')
// devtools are not detected
// Vue.config.devtools = true;
 //window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor



