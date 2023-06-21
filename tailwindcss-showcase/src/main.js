import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import mitt from 'mitt';

const bus = mitt();

const app = createApp(App)
app.config.globalProperties.$bus = bus;
app.use(router)
app.mount('#app')
