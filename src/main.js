import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Notifications from "@kyvg/vue3-notification";
import router from './router';

createApp(App)
.use(Notifications)
.use(router)
.mount('#app')

