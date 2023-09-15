import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/routes.js'; // Import the router configuration
import store from './store'; // Import the Vuex store

const app = createApp(App);
app.use(router); // Use the router
app.use(store); // Use the Vuex store
app.mount('#app');